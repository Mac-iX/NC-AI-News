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
        
        {/* Editorials Section */}
        <section id="editorials" className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-carolina-blue rounded-full" />
                <h2 className="text-4xl font-bold">Editorials</h2>
              </div>
              <FeaturedArticles />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-1 w-12 bg-warm-orange rounded-full" />
                  <h2 className="text-4xl font-bold">Latest Headlines</h2>
                </div>
                <RssFeed />
              </div>
            </div>
          </div>
        </section>
        
        {/* Topic Clusters Section */}
        <section className="bg-slate-900/30 border-y border-slate-800">
          <TopicClusters />
        </section>
        
        {/* Newsletter Section */}
        <section id="newsletter" className="bg-gradient-to-b from-dark-navy to-slate-900">
          <NewsletterSignup />
        </section>
      </main>
    </div>
  );
}
