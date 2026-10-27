import Link from 'next/link'

export default function ShopCategories() {
  const cats = [
    { name: 'Sofas & Living', count: '24 items' },
    { name: 'Beds & Bedroom', count: '18 items' },
    { name: 'Dining Sets', count: '12 items' },
    { name: 'Office Furniture', count: '15 items' },
    { name: 'Storage & Wardrobes', count: '9 items' },
    { name: 'TV Consoles', count: '7 items' },
  ]
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/styles/shop" className="text-sm text-stone-500 hover:underline">← Home</Link>
      <h1 className="text-3xl font-bold mt-2 mb-8">Categories</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {cats.map((c) => (
          <Link key={c.name} href="/styles/shop/products" className="flex justify-between items-center p-5 border border-stone-200 rounded-xl hover:border-stone-400 transition">
            <span className="font-medium">{c.name}</span>
            <span className="text-sm text-stone-500">{c.count}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}