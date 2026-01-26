import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/nc-hero-banner.jpg')" }}>
      <div className="absolute inset-0 bg-dark-navy/70" />
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Discover North Carolina's Tech Frontier</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">AI trends, startup news, and innovation shaping the Tar Heel State. Your essential guide to the future of technology in North Carolina.</p>
        <div className="mt-8 flex gap-4">
          <Link href="/news" prefetch={false}>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-carolina-blue text-duke-blue hover:bg-carolina-blue/90 h-11 px-8">
              Read Editorials
            </button>
          </Link>
          <Link href="/subscribe" prefetch={false}>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-11 px-8">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
