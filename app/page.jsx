import Hero from "../src/components/sections/Hero";
import { createSeoMetadata } from "../src/lib/seo";

export const metadata = createSeoMetadata({
  title: "ZeomTech | Dedicated Development, Support, and Services",
  description:
    "Award-winning developers for dedicated development, support, software, websites, apps, and digital product delivery.",
  path: "/",
  keywords: [
    "ZeomTech",
    "web development company",
    "app development",
    "software development",
    "cloud solutions",
  ],
});

export default function HomePage() {
  return <Hero />;
}
