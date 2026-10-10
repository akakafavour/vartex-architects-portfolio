import ProjectClient from './ProjectClient';
import { getProjectBySlug, getAllProjects } from '@/sanity/lib/service';
import { PROJECT_DETAILS, projectList as mockProjects } from '@/data/projects_detail';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { shrinkSanityImages } from '@/sanity/lib/imageUrl';

// Project pages are re-fetched from Sanity on every request otherwise, which
// shows up as a ~1s freeze between clicking a project card and the detail
// page responding. ISR keeps a rendered copy at the edge for a minute.
export const revalidate = 60;

// ISR alone still pays the server render on the first click after a cache
// expiry, which is exactly the lag the client flagged. Pre-rendering every
// known project slug at build time removes that first-hit cost entirely.
export async function generateStaticParams() {
    try {
        const projects = await getAllProjects();
        const slugs = projects
            .map((p: any) => p.slug || p.id)
            .filter(Boolean);
        if (slugs.length > 0) return slugs.map((id: string) => ({ id }));
    } catch (error) {
        console.error('generateStaticParams (projects) error:', error);
    }
    return Object.keys(PROJECT_DETAILS).map((id) => ({ id }));
}

interface Props {
    params: Promise<{ id: string }>;
}

// generateMetadata and the page both need the project; cache() makes the
// Sanity fetch happen once per request instead of twice.
const fetchProject = cache(async (id: string) => {
    let project: any = await getProjectBySlug(id);
    if (!project) {
        project = PROJECT_DETAILS[id as keyof typeof PROJECT_DETAILS];
    }
    return project ?? null;
});

export async function generateMetadata({ params }: Props): Promise<any> {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const project: any = await fetchProject(id);

    if (!project) return { title: "Project Not Found" };

    return {
        title: project.title,
        description: project.description?.slice(0, 160) || `Experience ${project.title} by VARTEX Architects. Architecture shaped by idea, context, and precision.`,
        alternates: {
            canonical: `/project/${id}`
        },
        openGraph: {
            title: project.title,
            description: project.description?.slice(0, 160),
            images: project.images?.[0] ? [{ url: project.images[0] }] : [],
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    let project: any = await fetchProject(id);

    // Default fallback to "Nka na Uzu" if still not found
    if (!project) {
        project = PROJECT_DETAILS["nka-na-uzu"];
    }

    if (!project) {
        notFound();
    }

    // Get all projects for navigation and related works
    const allProjects: any[] = await getAllProjects();
    const activeProjects = allProjects.length > 0 ? allProjects : mockProjects;

    // Navigation logic
    const currentIndex = activeProjects.findIndex(p => (p.slug || p.id) === id);
    const prevProject = currentIndex > 0 ? activeProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < activeProjects.length - 1 ? activeProjects[currentIndex + 1] : activeProjects[0];

    // Related works (excluding current)
    const relatedWorks = activeProjects
        .filter(p => (p.slug || p.id) !== id);

    return (
        <ProjectClient
            project={shrinkSanityImages(project)}
            prevProject={prevProject ? shrinkSanityImages(prevProject) : null}
            nextProject={nextProject ? shrinkSanityImages(nextProject) : null}
            relatedWorks={relatedWorks.map((p) => shrinkSanityImages(p))}
        />
    );
}
