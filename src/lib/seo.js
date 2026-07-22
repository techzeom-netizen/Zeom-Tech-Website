export const siteUrl = "https://zeomtech.in";
const siteName = "ZeomTech";
const defaultAuthor = "ZeomTech";
const defaultThemeColor = "#0B4DB8";
export const defaultLocale = "en_IN";
export const businessEmail = "techzeom@gmail.com";
export const businessPhone = "+91-8271927132";
export const businessLocation = {
  city: "Bengaluru",
  region: "Karnataka",
  country: "IN",
};

export const serviceAreas = [
  "India",
  "Bengaluru",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Worldwide",
];

export const commonSeoFaqs = [
  {
    question: "What services does ZeomTech provide?",
    answer:
      "ZeomTech provides custom web development, mobile app development, cloud and DevOps services, UI and UX design, and custom software development for startups and growing businesses.",
  },
  {
    question: "Does ZeomTech build SEO-friendly websites?",
    answer:
      "Yes. ZeomTech builds websites with clean metadata, structured content, fast loading pages, mobile-friendly layouts, internal links, and technical SEO foundations.",
  },
  {
    question: "Can ZeomTech work with clients outside India?",
    answer:
      "Yes. ZeomTech works with clients in India and international markets through remote product strategy, design, development, and cloud delivery workflows.",
  },
];

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

export const seoServices = [
  {
    name: "Custom Web Development",
    description:
      "SEO-friendly business websites, landing pages, and web applications built with modern frontend and backend technology.",
    path: "/discover",
    image: seoImages.webDevelopment,
    keywords: [
      "custom web development company",
      "business website development",
      "Next.js development services",
      "SEO friendly website design",
    ],
  },
  {
    name: "Mobile App Development",
    description:
      "iOS, Android, and cross-platform mobile app development with scalable APIs, analytics, and launch support.",
    path: "/discover",
    image: seoImages.mobile,
    keywords: [
      "mobile app development company",
      "iOS Android app development",
      "mobile app developers India",
    ],
  },
  {
    name: "Cloud and DevOps Services",
    description:
      "Cloud architecture, AWS deployment, DevOps automation, monitoring, and migration support for growing digital products.",
    path: "/discover",
    image: seoImages.cloud,
    keywords: [
      "cloud consulting services",
      "AWS application development",
      "DevOps services India",
      "cloud migration planning",
    ],
  },
  {
    name: "Custom Software Development",
    description:
      "Business software, dashboards, portals, and integrations designed around measurable workflows and long-term maintainability.",
    path: "/discover",
    image: seoImages.discover,
    keywords: [
      "custom software development company",
      "enterprise software development",
      "software development services India",
    ],
  },
];

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
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
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
    applicationName: siteName,
    referrer: "origin-when-cross-origin",
    keywords: normalizeKeywords(keywords),
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    category: "technology",
    classification: "Software development, web development, mobile app development, cloud consulting",
    robots,
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
      ...alternates,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
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
    title: "ZeomTech | Custom Software, Web, App, and Cloud Development Company",
    description:
      "ZeomTech is a custom software development company in India building SEO-friendly websites, mobile apps, cloud platforms, and enterprise software for growing businesses.",
    path: "/",
    image: seoImages.home,
    imageAlt: "ZeomTech digital product development preview",
    keywords: [
      "ZeomTech",
      "web development company India",
      "mobile app development company",
      "software development services",
      "custom software development company",
      "web app development services",
      "cloud solutions company",
      "digital product development",
      "hire React developers",
      "Next.js development company",
    ],
  },
  about: {
    title: "About ZeomTech | Digital Product Strategy and Engineering Team",
    description:
      "Meet ZeomTech's product strategists, designers, developers, and cloud engineers building reliable websites, apps, and custom software for modern businesses.",
    path: "/about",
    image: seoImages.about,
    imageAlt: "ZeomTech team and digital product culture",
    keywords: [
      "about ZeomTech",
      "digital product team",
      "software engineering company",
      "web design agency Bengaluru",
      "technology consulting team",
      "software development company Bengaluru",
    ],
  },
  discover: {
    title: "Software Development Services | Web, App, Cloud, and Enterprise Solutions",
    description:
      "Explore ZeomTech services for custom web development, mobile app development, cloud infrastructure, enterprise software, UI/UX, and digital transformation.",
    path: "/discover",
    image: seoImages.discover,
    imageAlt: "Custom software and IT solution development",
    keywords: [
      "IT solutions company",
      "custom software development",
      "software development services India",
      "custom web development company",
      "cloud consulting services",
      "mobile app development company",
      "enterprise software development",
      "web app development services",
      "digital transformation partner",
    ],
  },
  tech: {
    title: "Technology Stack | React, Next.js, Cloud, and Backend Tools",
    description:
      "See the modern technologies ZeomTech uses for scalable React, Next.js, backend, cloud, database, DevOps, and mobile application development.",
    path: "/techwelove",
    image: seoImages.tech,
    imageAlt: "Next.js and modern development technology stack",
    keywords: [
      "ZeomTech technology stack",
      "React development services",
      "Next.js developers",
      "AWS cloud development",
      "full stack development company",
      "React development company India",
      "backend development tools",
      "DevOps technology stack",
    ],
  },
  contact: {
    title: "Contact ZeomTech | Start a Website, App, or Software Project",
    description:
      "Contact ZeomTech to plan your next website, mobile app, custom software, cloud migration, or digital product development project.",
    path: "/contact",
    image: seoImages.contact,
    imageAlt: "Contact ZeomTech for software development",
    keywords: [
      "contact ZeomTech",
      "hire web developers India",
      "hire software developers India",
      "custom software development quote",
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
