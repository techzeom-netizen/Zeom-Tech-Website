import Image from "next/image";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import Breadcrumbs from "../../../src/components/common/Breadcrumbs";
import SEO, {
  buildArticleSchema,
  buildBreadcrumbSchema,
} from "../../../src/components/common/SEO";
import { blogs, getBlogBySlug } from "../../../src/data/blogData";
import { createSeoMetadata } from "../../../src/lib/seo";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  return createSeoMetadata({
    title: `${blog.title} | ZeomTech Blog`,
    description: blog.description,
    path: `/blogs/${blog.slug}`,
    image: blog.image,
    imageAlt: blog.imageAlt,
    keywords: blog.keywords,
    type: "article",
    publishedTime: blog.publishedAt,
    modifiedTime: blog.updatedAt || blog.publishedAt,
    authors: ["ZeomTech"],
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: blog.title, path: `/blogs/${blog.slug}` },
  ];

  return (
    <main className="bg-white">
      <SEO schema={[buildArticleSchema(blog), buildBreadcrumbSchema(breadcrumbItems)]} />

      <article>
        <section className="brand-section px-4 py-10 md:py-14">
          <div className="containerMax">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="max-w-4xl">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <FaTag aria-hidden="true" className="text-[#0E9E76]" />
                  {blog.category}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt aria-hidden="true" className="text-[#0B4DB8]" />
                  <time dateTime={blog.publishedAt}>
                    {new Intl.DateTimeFormat("en", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(blog.publishedAt))}
                  </time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaClock aria-hidden="true" className="text-[#0B4DB8]" />
                  {blog.readTime}
                </span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                {blog.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                {blog.description}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-10">
          <div className="containerMax max-w-5xl">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-lg bg-[#EAF3FF]">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
              {blog.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-slate-950">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
