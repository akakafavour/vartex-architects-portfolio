import { MetadataRoute } from 'next'
import { getAllProjects, getBlogs } from '@/sanity/lib/service'
import { journalPosts as mockPosts } from '@/data/journal'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vartexarchitects.com'

  // Static routes
  const routes = [
    '',
    '/portfolio',
    '/about',
    '/contact',
    '/services',
    '/services/architecture',
    '/services/interior',
    '/process',
    '/journal',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : route === '/services' || route === '/portfolio' ? 0.9 : 0.7,
  }))

  // Projects. On any failure the sitemap still ships the static routes.
  let projectRoutes: MetadataRoute.Sitemap = []
  try {
    const projects = await getAllProjects()
    projectRoutes = projects
      .map((project: any) => project.slug || project.id)
      .filter(Boolean)
      .map((slug: string) => ({
        url: `${baseUrl}/project/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
  } catch (error) {
    console.error('sitemap projects error:', error)
  }

  // Journal posts. Mock posts are the live content when Sanity has none,
  // mirroring the /journal page's own fallback. Coming-soon posts are
  // noindexed on their page and must stay out of the sitemap too.
  let journalRoutes: MetadataRoute.Sitemap = []
  try {
    const sanityPosts = await getBlogs()
    const posts = sanityPosts.length > 0 ? sanityPosts : mockPosts
    journalRoutes = posts
      .filter((post: any) => !post.isComingSoon)
      .map((post: any) => {
        const slug = post.slug || post.id
        return {
          url: `${baseUrl}/journal/${slug}`,
          lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.5,
        }
      })
  } catch (error) {
    console.error('sitemap journal error:', error)
  }

  return [...routes, ...projectRoutes, ...journalRoutes]
}
