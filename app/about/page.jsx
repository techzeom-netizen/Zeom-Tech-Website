import AboutUs from "../../src/components/sections/AboutUs";

export const metadata = {
  title: "About Us",
  description:
    "Meet ZeomTech, a team of strategists, designers, and developers delivering enterprise-grade digital solutions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
