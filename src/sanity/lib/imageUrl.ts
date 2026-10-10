// Sanity's CDN can serve pre-sized derivatives of any asset. The originals
// uploaded to this project are ~3344px wide, and the Next.js image optimizer
// downloads the full source before resizing — multi-megabyte fetches that
// regularly exceed its upstream timeout. Appending CDN transform params makes
// the optimizer download a 2048px source instead, with no visible quality
// difference for the widths the site actually renders.
const MAX_SOURCE_WIDTH = 2048;

function transformUrl(url: string): string {
    try {
        const u = new URL(url);
        u.searchParams.set("auto", "format");
        u.searchParams.set("q", "80");
        u.searchParams.set("w", String(MAX_SOURCE_WIDTH));
        return u.toString();
    } catch {
        return url;
    }
}

// Walks arbitrary JSON-shaped query results and rewrites every Sanity image
// asset URL in place, so callers get pre-sized sources without each render
// site having to remember to do it.
export function shrinkSanityImages<T>(data: T): T {
    if (typeof data === "string") {
        return (/cdn\.sanity\.io\/images?\//.test(data) ? transformUrl(data) : data) as T;
    }
    if (Array.isArray(data)) {
        return data.map((item) => shrinkSanityImages(item)) as T;
    }
    if (data !== null && typeof data === "object") {
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, shrinkSanityImages(value)]),
        ) as T;
    }
    return data;
}
