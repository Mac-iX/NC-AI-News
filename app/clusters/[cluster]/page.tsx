import { getSortedArticlesData } from "@/lib/articles";
import Link from "next/link";
import { format } from "date-fns";

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

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  } catch {
    return dateString;
  }
}

export default function ClusterPage({ params }: { params: { cluster: keyof typeof CLUSTER_DATA } }) {
  const clusterInfo = CLUSTER_DATA[params.cluster];
  const allArticles = getSortedArticlesData();
  const clusterArticles = allArticles.filter(article => article.category === params.cluster);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-carolina-blue">{clusterInfo.title}</h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">{clusterInfo.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clusterArticles.map((article) => (
          <article key={article.slug} className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-carolina-blue/50 transition-all duration-300 group">
            <Link href={`/articles/${article.slug}`} prefetch={false}>
              <div className="relative overflow-hidden">
                <img
                  src={article.coverImage || "/images/placeholder.jpg"}
                  alt={article.title}
                  className="w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold leading-tight group-hover:text-carolina-blue transition-colors duration-200">{article.title}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed line-clamp-3">{article.description}</p>
                <div className="mt-5 flex items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
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
