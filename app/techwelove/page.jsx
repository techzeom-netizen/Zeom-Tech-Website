import TechWeLove from "../../src/components/sections/TechWeLove";
import SEO, {
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "../../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.tech);

export default function TechWeLovePage() {
  return (
    <>
      <SEO
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Technology Stack", path: "/techwelove" },
          ]),
          buildServiceSchema({
            name: "Modern Web, Cloud, Backend, and Mobile Technology Stack",
            description: pageSeo.tech.description,
            path: pageSeo.tech.path,
            image: pageSeo.tech.image,
          }),
        ]}
      />
      <TechWeLove />
    </>
  );
}
