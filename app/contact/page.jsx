import ContactUs from "../../src/components/common/ContactUs";
import { createSeoMetadata } from "../../src/lib/seo";

export const metadata = createSeoMetadata({
  title: "Contact ZeomTech | Start Your Project",
  description:
    "Contact ZeomTech to discuss a new website, app, software, cloud, or digital transformation project.",
  path: "/contact",
  keywords: [
    "contact ZeomTech",
    "hire web developers",
    "start software project",
    "app development quote",
  ],
});

export default function ContactPage() {
  return <ContactUs />;
}
