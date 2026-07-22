import ContactUs from "../../src/components/common/ContactUs";
import SEO, {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "../../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <SEO
        schema={[
          buildOrganizationSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactUs />
    </>
  );
}
