export const siteUrl = "https://zeomtech.in";
const siteName = "ZeomTech";
const previewImage = {
  url: `${siteUrl}/zeomtech-og.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "ZeomTech web, app, cloud, and software development",
};

export function createSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}) {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage.url],
    },
  };
}

export const defaultSeoImage = previewImage;
