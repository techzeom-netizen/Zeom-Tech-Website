import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-medium text-slate-900">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="font-medium text-[#0B4DB8] hover:text-[#063B8F]"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && <FaChevronRight aria-hidden="true" className="h-3 w-3" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
