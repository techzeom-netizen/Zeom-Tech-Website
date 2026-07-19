import ContactUs from "../../src/components/common/ContactUs";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact ZeomTech to discuss a new website, app, software, cloud, or digital transformation project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactUs />;
}
