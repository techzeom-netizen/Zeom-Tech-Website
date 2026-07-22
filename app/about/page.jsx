import AboutUs from "../../src/components/sections/AboutUs";
import SEO, { buildBreadcrumbSchema } from "../../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <>
      <SEO
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutUs />
    </>
  );
}
