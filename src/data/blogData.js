import { seoImages } from "../lib/seo";

export const blogs = [
  {
    slug: "custom-web-development-for-growing-businesses",
    title: "Custom Web Development for Growing Businesses",
    description:
      "A practical guide to planning fast, secure, and conversion-ready websites that support real business growth.",
    excerpt:
      "Learn how a custom website strategy improves trust, speed, lead generation, and long-term scalability.",
    category: "Web Development",
    publishedAt: "2026-07-08",
    readTime: "5 min read",
    image: seoImages.webDevelopment,
    imageAlt: "Custom website interface shown on a laptop",
    keywords: [
      "custom web development",
      "business website development",
      "conversion focused website",
      "Next.js web development",
      "SEO friendly website design",
    ],
    sections: [
      {
        heading: "Start With Business Goals",
        body:
          "A strong website is planned around user intent, conversion paths, page speed, and content structure. Before design starts, define what visitors need to learn and what action they should take next.",
      },
      {
        heading: "Build for Performance and Search",
        body:
          "Modern frameworks, optimized media, clean headings, structured metadata, and internal links help search engines understand the site while giving visitors a faster experience.",
      },
      {
        heading: "Keep the Platform Flexible",
        body:
          "Growing businesses need room for landing pages, blogs, integrations, analytics, and future product workflows. A maintainable codebase keeps those improvements affordable.",
      },
    ],
  },
  {
    slug: "cloud-ready-software-architecture",
    title: "Cloud-Ready Software Architecture: What to Plan Before You Scale",
    description:
      "Key architecture decisions for reliable cloud applications, secure deployments, monitoring, and future growth.",
    excerpt:
      "Understand the foundations of scalable cloud software before traffic, users, and data complexity increase.",
    category: "Cloud",
    publishedAt: "2026-07-11",
    readTime: "6 min read",
    image: seoImages.cloud,
    imageAlt: "Cloud infrastructure and AWS development concept",
    keywords: [
      "cloud software architecture",
      "AWS application development",
      "scalable cloud systems",
      "DevOps for startups",
      "cloud migration planning",
    ],
    sections: [
      {
        heading: "Design Around Reliability",
        body:
          "Cloud-ready systems use clear boundaries, resilient storage, observability, and repeatable deployments so issues can be diagnosed and fixed quickly.",
      },
      {
        heading: "Security Comes Early",
        body:
          "Identity, secrets, backups, audit trails, and least-privilege access should be part of the first architecture discussion, not a late-stage patch.",
      },
      {
        heading: "Scale the Right Things",
        body:
          "Not every system needs complex infrastructure on day one. Good planning lets teams start lean while keeping a path toward higher traffic and availability.",
      },
    ],
  },
  {
    slug: "mobile-app-development-checklist",
    title: "Mobile App Development Checklist for a Smoother Launch",
    description:
      "A launch-focused checklist for planning mobile app features, user experience, backend APIs, analytics, and app store readiness.",
    excerpt:
      "Use this checklist to reduce rework and prepare your mobile app for users, performance, and future updates.",
    category: "Mobile Apps",
    publishedAt: "2026-07-15",
    readTime: "5 min read",
    image: seoImages.mobile,
    imageAlt: "Mobile app development interface and phone screens",
    keywords: [
      "mobile app development checklist",
      "app launch planning",
      "iOS Android app development",
      "mobile UX design",
      "app backend development",
    ],
    sections: [
      {
        heading: "Clarify the First Release",
        body:
          "A focused first release should solve the core user problem with a small set of polished features instead of spreading effort across unfinished ideas.",
      },
      {
        heading: "Plan APIs and Analytics",
        body:
          "Backend APIs, authentication, notifications, and analytics events need to be mapped before development so the app can measure adoption and retention.",
      },
      {
        heading: "Prepare Store Assets",
        body:
          "Screenshots, descriptions, privacy details, icons, and release notes are part of the product experience and should be ready before launch week.",
      },
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
