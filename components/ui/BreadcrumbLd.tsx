const BASE = "https://www.thatmarketingguyy.com";

/** BreadcrumbList JSON-LD matching the visible "Home / X" breadcrumb. */
export default function BreadcrumbLd({ trail }: { trail: { name: string; path: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${BASE}${t.path}`,
      })),
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
