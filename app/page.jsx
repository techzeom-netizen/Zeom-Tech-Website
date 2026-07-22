import Hero from "../src/components/sections/Hero";
import SEO, {
  buildOrganizationSchema,
  buildServiceCatalogSchema,
  buildWebsiteSchema,
} from "../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <SEO
        schema={[
          buildOrganizationSchema(),
          buildWebsiteSchema(),
          buildServiceCatalogSchema(),
        ]}
      />
      <Hero />
    </>
  );
}
