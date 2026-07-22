import Discover from "../../src/components/sections/Discover";
import SEO, {
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "../../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.discover);

export default function DiscoverPage() {
  return (
    <>
      <SEO
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/discover" },
          ]),
          buildServiceSchema({
            name: "Custom IT Solutions and Software Development",
            description: pageSeo.discover.description,
            path: pageSeo.discover.path,
            image: pageSeo.discover.image,
          }),
        ]}
      />
      <Discover />
    </>
  );
}
