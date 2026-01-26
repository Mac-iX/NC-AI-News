import { getSortedArticlesData } from "@/lib/articles";
import Link from "next/link";

const CLUSTER_DATA = {
  "ai-innovation": { title: "AI Innovation & Startups", description: "The latest on NC-based AI companies, product launches, and success stories." },
  "research-triangle": { title: "Research Triangle Ecosystem", description: "News from Duke, UNC, and NC State, and the tech that defines the Triangle." },
  "coastal-tech": { title: "Coastal Tech", description: "The rise of Wilmington and the coastal tech scene, from FinTech to marine bio-tech." },
  "workforce-education": { title: "Workforce & Education", description: "How North Carolina is training the next generation of tech talent." },
  "policy-regulation": { title: "Policy & Regulation", description: "The legislative landscape shaping the future of AI in the Tar Heel State." },
  "funding-investment": { title: "Funding & Investment", description: "Tracking the venture capital, grants, and investments fueling NC's growth." },
};

export async function generateStaticParams() {
  return Object.keys(CLUSTER_DATA).map((cluster) => ({
    cluster,
  }));
}

export default function ClusterPage({ params }: { params: { cluster: keyof typeof CLUSTER_DATA } }) {
  const clusterInfo = CLUSTER_DATA[params.cluster];
  const allArticles = getSortedArticlesData();
  const clusterArticles = allArticles.filter(article => article.category === params.cluster);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-carolina-blue">{clusterInfo.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">{clusterInfo.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clusterArticles.map((article) => (
          <article key={article.slug} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-carolina-blue transition-all">
            <Link href={`/articles/${article.slug}`} prefetch={false}>
              <img
                src={article.coverImage || "/images/placeholder.jpg"}
                alt={article.title}
                className="object-cover aspect-video"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold leading-tight hover:text-carolina-blue transition-colors">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-400 line-clamp-3">{article.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
