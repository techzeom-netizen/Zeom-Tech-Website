const routes = ["", "/about", "/discover", "/contact", "/techwelove"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `https://zeomtech.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
