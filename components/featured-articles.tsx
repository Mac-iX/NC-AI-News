import Link from "next/link";
import { getFeaturedArticles } from "@/lib/articles";

export default async function FeaturedArticles() {
  const articles = await getFeaturedArticles();

  return (
    <div className="space-y-8">
      {articles.map((article, index) => (
        <article key={article.slug} className={`flex flex-col md:flex-row gap-6 ${index !== 0 ? "pt-8 border-t border-slate-700" : ""}`}>
          <div className="md:w-1/3">
            <Link href={`/articles/${article.slug}`} prefetch={false}>
              <img
                src={article.coverImage || "/images/placeholder.jpg"}
                alt={article.title}
                className="rounded-lg object-cover aspect-video transition-transform hover:scale-105"
              />
            </Link>
          </div>
          <div className="md:w-2/3">
            <p className="text-sm text-carolina-blue font-semibold uppercase">{article.category.replace(/-/g, ' ')}</p>
            <h3 className="mt-2 text-2xl font-bold leading-tight">
              <Link href={`/articles/${article.slug}`} prefetch={false} className="hover:text-carolina-blue transition-colors">
                {article.title}
              </Link>
            </h3>
            <p className="mt-2 text-gray-400">{article.description}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
              <span>By {article.author}</span>
              <span>{String(article.date)}</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
