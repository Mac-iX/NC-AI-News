import { getArticleData, getSortedArticlesData } from "@/lib/articles";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = getSortedArticlesData();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  let article;
  try {
    article = await getArticleData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <p className="text-sm text-carolina-blue font-bold uppercase tracking-wider">{article.category.replace(/-/g, ' ')}</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-tight">{article.title}</h1>
          <div className="mt-6 flex items-center gap-6 text-base text-gray-400">
            <span className="font-medium">By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>
        </header>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </div>
    </article>
  );
}
