import Link from 'next/link'

export default function SimpleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-4 py-4 flex items-center justify-between border-b border-stone-100">
        <Link href="/styles/simple" className="font-semibold text-lg">Aba Maker</Link>
        <div className="flex items-center gap-4">
          <Link href="/styles/simple/gallery" className="text-sm text-stone-600">Gallery</Link>
          <Link href="/styles/simple/contact" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-full">WhatsApp</Link>
          <Link href="/" className="text-xs text-stone-400">←</Link>
        </div>
      </header>
      {children}
    </div>
  )
}