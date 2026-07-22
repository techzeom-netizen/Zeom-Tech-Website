export const siteUrl = "https://zeomtech.in";
const siteName = "ZeomTech";
const defaultAuthor = "ZeomTech";
const defaultThemeColor = "#0B4DB8";

export const seoImages = {
  home: "/seo-preview.png",
  about: "/assets/images/about-us.png",
  discover: "/assets/images/coding.png",
  tech: "/assets/images/next.png",
  contact: "/assets/images/ZeomTechLogo.png",
  blogs: "/assets/images/dataShare.png",
  webDevelopment: "/assets/images/landing01.png",
  cloud: "/assets/images/aws.jpg",
  mobile: "/assets/images/mobile.png",
};

function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizeKeywords(keywords = []) {
  if (Array.isArray(keywords)) {
    return keywords;
  }

  return keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

function imageTypeFromUrl(url) {
  if (url.endsWith(".jpg") || url.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  if (url.endsWith(".webp")) {
    return "image/webp";
  }

  return "image/png";
}

const previewImage = {
  url: absoluteUrl(seoImages.home),
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "ZeomTech web, app, cloud, and software development",
};

export function createSeoMetadata({
  title,
  description,
  path = "/",
  image = previewImage.url,
  imageAlt,
  keywords = [],
  robots = {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  author = defaultAuthor,
  themeColor = defaultThemeColor,
  alternates = {},
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}) {
  const url = `${siteUrl}${path}`;
  const imageUrl = absoluteUrl(image);
  const imageMeta = {
    url: imageUrl,
    width: 1200,
    height: 630,
    type: imageTypeFromUrl(imageUrl),
    alt: imageAlt || title,
  };

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: normalizeKeywords(keywords),
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    robots,
    alternates: {
      canonical: url,
      ...alternates,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [imageMeta],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@zeomtech",
    },
    other: {
      "og:image:secure_url": imageUrl,
      "theme-color": themeColor,
    },
  };
}

export const defaultSeoImage = previewImage;
export { absoluteUrl, siteName };

export const pageSeo = {
  home: {
    title: "ZeomTech | Web, App, Cloud, and Software Development Company",
    description:
      "ZeomTech builds websites, mobile apps, cloud platforms, and enterprise software that help startups and businesses launch faster and scale with confidence.",
    path: "/",
    image: seoImages.home,
    imageAlt: "ZeomTech digital product development preview",
    keywords: [
      "ZeomTech",
      "web development company India",
      "mobile app development company",
      "software development services",
      "cloud solutions company",
      "digital product development",
    ],
  },
  about: {
    title: "About ZeomTech | Digital Product Strategy and Engineering Team",
    description:
      "Meet ZeomTech's product strategists, designers, developers, and cloud engineers building reliable digital solutions for modern businesses.",
    path: "/about",
    image: seoImages.about,
    imageAlt: "ZeomTech team and digital product culture",
    keywords: [
      "about ZeomTech",
      "digital product team",
      "software engineering company",
      "web design agency Bengaluru",
      "technology consulting team",
    ],
  },
  discover: {
    title: "IT Solutions | Web, Cloud, App, and Enterprise Software Services",
    description:
      "Explore ZeomTech IT services for custom websites, mobile apps, cloud infrastructure, enterprise systems, and digital transformation.",
    path: "/discover",
    image: seoImages.discover,
    imageAlt: "Custom software and IT solution development",
    keywords: [
      "IT solutions company",
      "custom software development",
      "cloud consulting services",
      "enterprise software development",
      "web app development services",
      "digital transformation partner",
    ],
  },
  tech: {
    title: "Technology Stack | React, Next.js, Cloud, and Backend Tools",
    description:
      "See the modern technologies ZeomTech uses for scalable frontend, backend, cloud, database, DevOps, and mobile application development.",
    path: "/techwelove",
    image: seoImages.tech,
    imageAlt: "Next.js and modern development technology stack",
    keywords: [
      "ZeomTech technology stack",
      "React development services",
      "Next.js developers",
      "AWS cloud development",
      "backend development tools",
      "DevOps technology stack",
    ],
  },
  contact: {
    title: "Contact ZeomTech | Start a Website, App, or Software Project",
    description:
      "Talk to ZeomTech about your next website, mobile app, custom software, cloud migration, or digital product idea.",
    path: "/contact",
    image: seoImages.contact,
    imageAlt: "Contact ZeomTech for software development",
    keywords: [
      "contact ZeomTech",
      "hire web developers India",
      "software project quote",
      "app development consultation",
      "website development enquiry",
    ],
  },
  blogs: {
    title: "ZeomTech Blogs | Web, App, Cloud, and Software Insights",
    description:
      "Read practical ZeomTech articles about web development, mobile apps, cloud architecture, software delivery, and digital growth.",
    path: "/blogs",
    image: seoImages.blogs,
    imageAlt: "ZeomTech software development blog insights",
    keywords: [
      "ZeomTech blog",
      "software development blog",
      "web development insights",
      "mobile app development tips",
      "cloud architecture articles",
      "digital product strategy",
    ],
  },
};
