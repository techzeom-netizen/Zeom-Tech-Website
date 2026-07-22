import ContactUs from "../../src/components/common/ContactUs";
import SEO, { buildBreadcrumbSchema } from "../../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <SEO
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactUs />
    </>
  );
}
