import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-20 flex items-center bg-dark-navy/95 backdrop-blur-md text-white border-b border-slate-800/50">
      <Link href="/" className="flex items-center justify-center gap-3 group" prefetch={false}>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-carolina-blue group-hover:scale-110 transition-transform duration-200"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-tight">NC AI News</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-8 items-center">
        <Link href="/" className="text-sm font-medium text-gray-300 hover:text-carolina-blue transition-colors duration-200" prefetch={false}>
          Home
        </Link>
        <Link href="/news" className="text-sm font-medium text-gray-300 hover:text-carolina-blue transition-colors duration-200" prefetch={false}>
          News Feed
        </Link>
        <Link href="/clusters/ai-innovation" className="text-sm font-medium text-gray-300 hover:text-carolina-blue transition-colors duration-200" prefetch={false}>
          Topics
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-carolina-blue transition-colors duration-200" prefetch={false}>
          About
        </Link>
      </nav>
      <div className="ml-6 lg:ml-8">
        <Link href="#newsletter" prefetch={false}>
          <button className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-carolina-blue rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-carolina-blue/20">
            <span className="relative z-10">Subscribe</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </Link>
      </div>
    </header>
  )
}
