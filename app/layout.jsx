import "../src/index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "swiper/css";
import "swiper/css/autoplay";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/layout/Footer";
import HelpWidget from "../src/components/common/HelpWidget";
import ScrollAnimations from "../src/components/common/ScrollAnimations";
import { createSeoMetadata, pageSeo } from "../src/lib/seo";
import Script from "next/script";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var savedTheme = localStorage.getItem("zeomtech-theme");
              var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              document.documentElement.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");
            } catch (error) {
              document.documentElement.dataset.theme = "light";
            }
          `}
        </Script>
        <div className="min-h-screen">
          <header className="fixed top-0 left-0 w-full z-[999] site-header">
            <Navbar />
          </header>
          <main className="site-grid pt-16 md:pt-20">{children}</main>
          <Footer />
          <div className="z-999">
            <HelpWidget />
          </div>
          <ScrollAnimations />
        </div>
      </body>
    </html>
  );
}
