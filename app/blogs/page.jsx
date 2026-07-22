import Blogs from "../../src/components/sections/Blogs";
import SEO, {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "../../src/components/common/SEO";
import { createSeoMetadata, pageSeo } from "../../src/lib/seo";

export const metadata = createSeoMetadata(pageSeo.blogs);

export default function BlogsPage() {
  return (
    <>
      <SEO
        schema={[
          buildOrganizationSchema(),
          buildWebsiteSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
          ]),
        ]}
      />
      <Blogs />
    </>
  );
}
