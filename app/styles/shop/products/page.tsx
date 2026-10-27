import Link from 'next/link'

const items = [
  { name: '3-Seater Sofa', price: '₦165,000', cat: 'Sofa' },
  { name: 'King Bed + Side Tables', price: '₦198,000', cat: 'Bedroom' },
  { name: '6-Seater Dining Set', price: '₦245,000', cat: 'Dining' },
  { name: 'Office Desk + Chair', price: '₦89,000', cat: 'Office' },
  { name: 'TV Console', price: '₦72,000', cat: 'Living' },
  { name: '4-Door Wardrobe', price: '₦175,000', cat: 'Storage' },
]

export default function ShopProducts() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/styles/shop" className="text-sm text-stone-500 hover:underline">← Home</Link>
      <h1 className="text-3xl font-bold mt-2 mb-8">All Products</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition">
            <div className="h-48 bg-stone-100 flex items-center justify-center text-4xl">🛋️</div>
            <div className="p-5">
              <p className="text-xs text-stone-500 mb-1">{item.cat}</p>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-lg font-bold mt-1">{item.price}</p>
              <Link href="/styles/shop/contact" className="mt-4 block text-center bg-stone-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-stone-800">
                Order on WhatsApp
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}