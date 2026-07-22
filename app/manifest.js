import { siteUrl } from "../src/lib/seo";

export default function manifest() {
  return {
    name: "ZeomTech",
    short_name: "ZeomTech",
    description:
      "Web, app, cloud, and software development company for startups and growing businesses.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B4DB8",
    icons: [
      {
        src: `${siteUrl}/assets/images/ZeomTechLogo.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${siteUrl}/assets/images/ZeomTechLogo.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
