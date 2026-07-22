import "../src/index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "swiper/css";
import "swiper/css/autoplay";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/layout/Footer";
import HelpWidget from "../src/components/common/HelpWidget";
import { createSeoMetadata, pageSeo } from "../src/lib/seo";

export const metadata = {
  ...createSeoMetadata(pageSeo.home),
  title: {
    default: pageSeo.home.title,
    template: "%s",
  },
  applicationName: "ZeomTech",
  category: "technology",
  icons: {
    icon: [
      {
        url: "/assets/images/FAVIC.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/images/FAVIC.svg",
    apple: "/assets/images/ZeomTechLogo.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#0B4DB8",
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
