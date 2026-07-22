import { absoluteUrl, siteName, siteUrl } from "../../lib/seo";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/assets/images/ZeomTechLogo.png"),
    email: "techzeom@gmail.com",
    telephone: "+91-8271927132",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: ["https://www.linkedin.com/in/codeflex-devs-4anss/"],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildServiceSchema({ name, description, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    areaServed: "Worldwide",
    url: absoluteUrl(path),
    image: absoluteUrl(image),
  };
}

export function buildArticleSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: absoluteUrl(blog.image),
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/images/ZeomTechLogo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blogs/${blog.slug}`),
  };
}

export default function SEO({ schema }) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return schemas
    .filter(Boolean)
    .map((item, index) => (
      <script
        key={`${item["@type"]}-${index}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
      />
    ));
}
