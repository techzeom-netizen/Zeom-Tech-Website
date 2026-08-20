import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
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
    <main className="blog-detail-page bg-white">
      <SEO schema={[buildArticleSchema(blog), buildBreadcrumbSchema(breadcrumbItems)]} />

      <article>
        <section className="blog-detail-hero brand-section px-4 py-10 md:py-14">
          <div className="containerMax">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="mx-auto max-w-4xl text-center">
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
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                {blog.description}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:py-14">
          <div className="containerMax">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <aside className="blog-detail-aside lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-xl shadow-blue-950/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF3FF]">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-5">
                    <div className="flex flex-wrap gap-2 text-xs font-bold">
                      <span className="rounded-full bg-[#0B4DB8]/10 px-3 py-1.5 text-[#0B4DB8]">
                        {blog.category}
                      </span>
                      <span className="rounded-full bg-[#0E9E76]/10 px-3 py-1.5 text-[#0E9E76]">
                        {blog.readTime}
                      </span>
                    </div>
                    <Link
                      href="/blogs"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4DB8] transition hover:text-[#063B8F]"
                    >
                      <FaArrowLeft className="h-3.5 w-3.5" />
                      Back to blogs
                    </Link>
                  </div>
                </div>
              </aside>

              <div className="blog-content-card rounded-lg border border-blue-100 bg-white p-5 shadow-lg shadow-blue-950/5 md:p-8">
                <div className="space-y-8">
                  {blog.sections.map((section) => (
                    <section key={section.heading} data-no-auto-reveal>
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
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
