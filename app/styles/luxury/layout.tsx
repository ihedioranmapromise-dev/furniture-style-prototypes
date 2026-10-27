import Link from 'next/link'

export default function LuxuryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/styles/luxury" className="text-xl font-light tracking-[0.2em] uppercase">Atelier Aba</Link>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-neutral-300">
            <Link href="/styles/luxury" className="hover:text-white">Home</Link>
            <Link href="/styles/luxury/collections" className="hover:text-white">Collections</Link>
            <Link href="/styles/luxury/about" className="hover:text-white">About</Link>
            <Link href="/styles/luxury/contact" className="border border-white/30 px-5 py-2 hover:bg-white hover:text-black transition">Book Visit</Link>
          </nav>
          <Link href="/" className="text-xs text-neutral-500 hover:text-white">← Styles</Link>
        </div>
      </header>
      {children}
    </div>
  )
}