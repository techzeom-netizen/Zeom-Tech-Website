import {
  absoluteUrl,
  businessEmail,
  businessLocation,
  businessPhone,
  commonSeoFaqs,
  seoServices,
  serviceAreas,
  siteName,
  siteUrl,
} from "../../lib/seo";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId,
    name: siteName,
    legalName: "ZeomTech",
    url: siteUrl,
    logo: absoluteUrl("/assets/images/ZeomTechLogo.png"),
    image: absoluteUrl("/seo-preview.png"),
    description:
      "ZeomTech is a custom software development company providing web development, mobile app development, cloud, DevOps, and enterprise software services.",
    email: businessEmail,
    telephone: businessPhone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: businessLocation.city,
      addressRegion: businessLocation.region,
      addressCountry: businessLocation.country,
    },
    areaServed: serviceAreas,
    knowsAbout: [
      "Custom software development",
      "Web development",
      "Mobile app development",
      "Cloud architecture",
      "DevOps",
      "React development",
      "Next.js development",
      "UI and UX design",
    ],
    makesOffer: seoServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.path),
      },
    })),
    sameAs: ["https://www.linkedin.com/in/codeflex-devs-4anss/"],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
    },
  };
}

export function buildServiceCatalogSchema(services = seoServices) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ZeomTech software development services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.path),
        image: absoluteUrl(service.image),
        provider: {
          "@type": "Organization",
          "@id": organizationId,
          name: siteName,
          url: siteUrl,
        },
        areaServed: serviceAreas,
        keywords: service.keywords.join(", "),
      },
    })),
  };
}

export function buildFaqSchema(faqs = commonSeoFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
      "@id": organizationId,
      name: siteName,
      url: siteUrl,
    },
    areaServed: serviceAreas,
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
