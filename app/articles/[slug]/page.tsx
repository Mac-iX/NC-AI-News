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
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <p className="text-sm text-carolina-blue font-semibold uppercase">{article.category.replace(/-/g, ' ')}</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{article.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
            <span>By {article.author}</span>
            <span>{article.date}</span>
            <span>{article.readTime} min read</span>
          </div>
        </header>
        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </div>
    </article>
  );
}
