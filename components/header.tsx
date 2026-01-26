import Link from "next/link"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-dark-navy text-white shadow-md">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
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
          className="h-6 w-6 text-carolina-blue"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span className="font-semibold text-lg">NC AI News</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link href="/news" className="text-sm font-medium text-gray-300 hover:text-white transition-colors" prefetch={false}>
          News Feed
        </Link>
        <Link href="/clusters" className="text-sm font-medium text-gray-300 hover:text-white transition-colors" prefetch={false}>
          Topic Clusters
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
      <div className="ml-4">
        <Link href="/subscribe" prefetch={false}>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-warm-orange text-white hover:bg-warm-orange/90 h-10 px-4 py-2">
            Subscribe
          </button>
        </Link>
      </div>
    </header>
  )
}
