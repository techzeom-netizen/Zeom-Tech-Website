import "../src/index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "swiper/css";
import "swiper/css/autoplay";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/layout/Footer";
import HelpWidget from "../src/components/common/HelpWidget";
import { defaultSeoImage } from "../src/lib/seo";

export const metadata = {
  metadataBase: new URL("https://zeomtech.com"),
  title: {
    default: "ZeomTech | Web, App, and Software Development",
    template: "%s | ZeomTech",
  },
  description:
    "ZeomTech builds modern websites, apps, cloud solutions, and enterprise software for startups and growing businesses.",
  openGraph: {
    title: "ZeomTech | Web, App, and Software Development",
    description:
      "Technology partners delivering modern websites, apps, cloud solutions, and enterprise software.",
    url: "https://zeomtech.com",
    siteName: "ZeomTech",
    type: "website",
    images: [defaultSeoImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeomTech | Web, App, and Software Development",
    description:
      "Technology partners delivering modern websites, apps, cloud solutions, and enterprise software.",
    images: [defaultSeoImage.url],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="fixed top-0 left-0 w-full z-[999] bg-white/95 shadow-md border-b border-blue-100">
            <Navbar />
          </header>
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
          <div className="z-999">
            <HelpWidget />
          </div>
        </div>
      </body>
    </html>
  );
}
