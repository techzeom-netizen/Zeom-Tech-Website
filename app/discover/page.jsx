import Discover from "../../src/components/sections/Discover";
import { createSeoMetadata } from "../../src/lib/seo";

export const metadata = createSeoMetadata({
  title: "IT Solutions | Cloud, Web, App, and Enterprise Software",
  description:
    "Discover scalable IT solutions from ZeomTech, including cloud, enterprise software, consulting, and modern digital experiences.",
  path: "/discover",
  keywords: [
    "IT solutions",
    "cloud software",
    "enterprise software",
    "digital transformation",
    "web app development",
  ],
});

export default function DiscoverPage() {
  return <Discover />;
}
