import AboutUs from "../../src/components/sections/AboutUs";
import { createSeoMetadata } from "../../src/lib/seo";

export const metadata = createSeoMetadata({
  title: "About ZeomTech | Digital Product Team",
  description:
    "Meet ZeomTech, a team of strategists, designers, and developers delivering enterprise-grade digital solutions.",
  path: "/about",
  keywords: [
    "about ZeomTech",
    "digital product team",
    "software development team",
    "web design agency",
  ],
});

export default function AboutPage() {
  return <AboutUs />;
}
