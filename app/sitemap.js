import { blogs } from "../src/data/blogData";
import { absoluteUrl, pageSeo, siteUrl } from "../src/lib/seo";

const siteLastModified = new Date("2026-07-23");

const staticPages = [
  { ...pageSeo.home, priority: 1, changeFrequency: "weekly" },
  { ...pageSeo.about, priority: 0.8, changeFrequency: "monthly" },
  { ...pageSeo.discover, priority: 0.9, changeFrequency: "monthly" },
  { ...pageSeo.tech, priority: 0.7, changeFrequency: "monthly" },
  { ...pageSeo.contact, priority: 0.8, changeFrequency: "monthly" },
  { ...pageSeo.blogs, priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap() {
  const pages = staticPages.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: siteLastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: [absoluteUrl(page.image)],
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(blog.image)],
  }));

  return [...pages, ...blogPages];
}
