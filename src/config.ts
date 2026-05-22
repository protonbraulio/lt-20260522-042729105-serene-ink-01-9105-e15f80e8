import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
    title: "Serene Ink Load Test 01 20260522-042729105",
    description: "Real staging load test batch 20260522-042729105 for Serene Ink.",
    siteUrl: "https://lt-20260522-042729105-serene-ink-01-9105-e15f80e8.pages.dev",
    author: {
        name: "Serene Ink Load Test 01 20260522-042729105",
        bio: "Real staging load test batch 20260522-042729105 for Serene Ink.",
    },
    nav: [
        { label: "Blog", href: "/" },
        { label: "Pages", href: "/pages" },
        { label: "Tags", href: "/tags" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    socials: {
        github: "",
        twitter: "",
        linkedin: "",
    },
    postsPerPage: 5,
    analytics: {
        umami: {
            websiteId: "",
            src: "",
        },
    },
    rss: {
        title: "Serene Ink Load Test 01 20260522-042729105 Blog",
        description: "Real staging load test batch 20260522-042729105 for Serene Ink.",
    },
};
