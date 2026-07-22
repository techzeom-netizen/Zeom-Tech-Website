import { blogs } from "../src/data/blogData";
import { pageSeo, siteUrl } from "../src/lib/seo";

const staticPages = [
  { path: pageSeo.home.path, priority: 1, changeFrequency: "weekly" },
  { path: pageSeo.about.path, priority: 0.8, changeFrequency: "monthly" },
  { path: pageSeo.discover.path, priority: 0.9, changeFrequency: "monthly" },
  { path: pageSeo.tech.path, priority: 0.7, changeFrequency: "monthly" },
  { path: pageSeo.contact.path, priority: 0.8, changeFrequency: "monthly" },
  { path: pageSeo.blogs.path, priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap() {
  const pages = staticPages.map((page) => ({
    url: `${siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...blogPages];
}
