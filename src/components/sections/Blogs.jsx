import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaTag } from "react-icons/fa";
import { blogs } from "../../data/blogData";
import Breadcrumbs from "../common/Breadcrumbs";

export default function Blogs() {
  return (
    <main className="bg-white">
      <section className="brand-section px-4 py-12 md:py-16">
        <div className="containerMax">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blogs" },
            ]}
          />

          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0B4DB8]">
              Insights
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
              Practical Ideas for Better Digital Products
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Guides from ZeomTech on websites, apps, cloud systems, software
              delivery, and digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="containerMax">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-lg border border-blue-100 bg-white shadow-lg shadow-blue-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <Link href={`/blogs/${blog.slug}`} aria-label={`Read ${blog.title}`}>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#EAF3FF]">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FaCalendarAlt aria-hidden="true" className="text-[#0B4DB8]" />
                      <time dateTime={blog.publishedAt}>
                        {new Intl.DateTimeFormat("en", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }).format(new Date(blog.publishedAt))}
                      </time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaTag aria-hidden="true" className="text-[#0E9E76]" />
                      {blog.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-slate-950">
                    <Link href={`/blogs/${blog.slug}`} className="hover:text-[#0B4DB8]">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#0B4DB8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#063B8F]"
                  >
                    View Blog
                    <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
