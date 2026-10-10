"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

// Route changes must always land at the top of the new page. Two things fight
// that: the browser's default scroll restoration, which can re-apply the
// position left on the previous page, and Lenis — a plain window.scrollTo
// doesn't reset Lenis's internal animated position, so it snaps back on the
// next wheel event. This component must be mounted inside <SmoothScroll> so
// the Lenis context is available; on touch devices Lenis is inactive and the
// hook returns undefined, so we fall back to native scrolling there.
export default function ScrollToTop() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true, force: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
}
