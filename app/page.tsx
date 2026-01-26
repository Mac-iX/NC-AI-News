import Hero from "@/components/hero";
import FeaturedArticles from "@/components/featured-articles";
import TopicClusters from "@/components/topic-clusters";
import RssFeed from "@/components/rss-feed";
import NewsletterSignup from "@/components/newsletter-signup";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Editorials</h2>
              <FeaturedArticles />
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Latest Headlines</h2>
              <RssFeed />
            </div>
          </div>
        </div>
        <TopicClusters />
        <NewsletterSignup />
      </main>
    </div>
  );
}
