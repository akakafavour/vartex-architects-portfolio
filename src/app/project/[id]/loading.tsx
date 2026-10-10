// Instant visual feedback while the project detail page renders on the
// server, so clicking a project card never feels like a dead click.
export default function ProjectLoading() {
    return (
        <div className="min-h-screen bg-white dark:bg-background-dark" aria-busy="true" aria-label="Loading project">
            <div className="px-8 lg:px-24 pt-[104px] pb-12 lg:pt-[128px]">
                <div className="h-3 w-40 bg-neutral-100 dark:bg-white/10 animate-pulse rounded-sm" />
                <div className="mt-8 h-16 lg:h-32 w-full max-w-4xl bg-neutral-100 dark:bg-white/10 animate-pulse rounded-sm" />
                <div className="mt-8 h-4 w-full max-w-xl bg-neutral-100 dark:bg-white/10 animate-pulse rounded-sm" />
                <div className="mt-3 h-4 w-2/3 max-w-xl bg-neutral-100 dark:bg-white/10 animate-pulse rounded-sm" />
            </div>
            <div className="relative aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
        </div>
    );
}
