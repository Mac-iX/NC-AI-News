import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h3 className="font-semibold text-lg">NC AI News</h3>
          <p className="text-gray-400 text-sm max-w-md">
            Your essential guide to artificial intelligence innovation and its impact on the Tar Heel State. We provide in-depth analysis, breaking news, and expert insights into the technology shaping North Carolina.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <nav className="grid gap-2 text-sm">
              <Link href="/" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                Home
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                News Feed
              </Link>
              <Link href="/clusters" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                Topic Clusters
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                About
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <nav className="grid gap-2 text-sm">
              <Link href="/contact" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                Contact Us
              </Link>
              <Link href="#" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                Advertise
              </Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-carolina-blue transition-colors" prefetch={false}>
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-slate-700 text-center">
        <p className="text-xs text-gray-500">
          © 2026 Quality Creative Consulting, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
