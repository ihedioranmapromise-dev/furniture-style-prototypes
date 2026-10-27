import Link from 'next/link'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-stone-200 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/styles/shop" className="font-bold text-xl text-stone-900">Aba Furniture Store</Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <Link href="/styles/shop" className="hover:text-stone-900">Home</Link>
            <Link href="/styles/shop/products" className="hover:text-stone-900">Shop</Link>
            <Link href="/styles/shop/categories" className="hover:text-stone-900">Categories</Link>
            <Link href="/styles/shop/contact" className="bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800">Order on WhatsApp</Link>
          </nav>
          <Link href="/" className="text-xs text-stone-500 hover:text-stone-800">← Styles</Link>
        </div>
      </header>
      {children}
    </div>
  )
}