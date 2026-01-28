import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-slate-900 to-duke-blue" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(139, 188, 225) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(139, 188, 225) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-carolina-blue/10 border border-carolina-blue/30 rounded-full">
            <span className="text-carolina-blue font-semibold text-sm tracking-wide">NORTH CAROLINA'S TECH NEWS SOURCE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-white to-carolina-blue bg-clip-text text-transparent">
            Discover North Carolina's Tech Frontier
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            AI trends, startup news, and innovation shaping the Tar Heel State. Your essential guide to the future of technology in North Carolina.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#editorials" prefetch={false}>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark-navy bg-carolina-blue rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-carolina-blue/20">
                <span className="relative z-10">Read Editorials</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </Link>
            <Link href="#newsletter" prefetch={false}>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-carolina-blue/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-carolina-blue hover:shadow-lg hover:shadow-carolina-blue/10">
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-carolina-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-navy to-transparent" />
    </section>
  );
}
