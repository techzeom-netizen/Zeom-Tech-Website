import TechWeLove from "../../src/components/sections/TechWeLove";
import { createSeoMetadata } from "../../src/lib/seo";

export const metadata = createSeoMetadata({
  title: "Tech We Love | ZeomTech Technology Stack",
  description:
    "Explore the technologies ZeomTech uses to build scalable products, cloud systems, web apps, and mobile experiences.",
  path: "/techwelove",
  keywords: [
    "ZeomTech technology stack",
    "React developers",
    "Next.js development",
    "cloud technologies",
    "software tools",
  ],
});

export default function TechWeLovePage() {
  return <TechWeLove />;
}
