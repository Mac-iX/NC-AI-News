import Link from "next/link";
import { getFeaturedArticles } from "@/lib/articles";
import { format } from "date-fns";

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  } catch {
    return dateString;
  }
}

export default async function FeaturedArticles() {
  const articles = await getFeaturedArticles();

  return (
    <div className="space-y-12">
      {articles.map((article, index) => (
        <article key={article.slug} className={`flex flex-col md:flex-row gap-8 ${index !== 0 ? "pt-12 border-t border-slate-800" : ""}`}>
          <div className="md:w-2/5">
            <Link href={`/articles/${article.slug}`} prefetch={false}>
              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src={article.coverImage || "/images/placeholder.jpg"}
                  alt={article.title}
                  className="w-full h-full object-cover aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </div>
          <div className="md:w-3/5 flex flex-col justify-center">
            <p className="text-xs text-carolina-blue font-bold uppercase tracking-widest">{article.category.replace(/-/g, ' ')}</p>
            <h3 className="mt-3 text-3xl font-bold leading-tight">
              <Link href={`/articles/${article.slug}`} prefetch={false} className="hover:text-carolina-blue transition-colors duration-200">
                {article.title}
              </Link>
            </h3>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">{article.description}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span className="font-medium">By {article.author}</span>
              <span>•</span>
              <span>{formatDate(article.date)}</span>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
