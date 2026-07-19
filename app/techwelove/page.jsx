import TechWeLove from "../../src/components/sections/TechWeLove";

export const metadata = {
  title: "Tech We Love",
  description:
    "Explore the technologies ZeomTech uses to build scalable products, cloud systems, web apps, and mobile experiences.",
  alternates: {
    canonical: "/techwelove",
  },
};

export default function TechWeLovePage() {
  return <TechWeLove />;
}
