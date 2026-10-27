import Link from 'next/link'

export default function MakerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top bar */}
      <header className="bg-amber-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/styles/maker" className="font-bold text-xl tracking-tight">
            Aba Craft Workshop
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/styles/maker" className="hover:text-amber-200">Home</Link>
            <Link href="/styles/maker/products" className="hover:text-amber-200">Our Work</Link>
            <Link href="/styles/maker/process" className="hover:text-amber-200">How We Build</Link>
            <Link href="/styles/maker/about" className="hover:text-amber-200">About</Link>
            <Link href="/styles/maker/contact" className="bg-white text-amber-900 px-4 py-2 rounded-full hover:bg-amber-100">
              WhatsApp Us
            </Link>
          </nav>
          <Link href="/" className="text-xs text-amber-200 hover:text-white">
            ← Back to styles
          </Link>
        </div>
      </header>
      {children}
    </div>
  )
}