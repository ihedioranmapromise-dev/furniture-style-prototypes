import Link from 'next/link'

const products = [
  { name: 'Living Room Sofa Set', category: 'Sofa', price: 'From ₦185,000' },
  { name: 'King Size Bed Frame', category: 'Bedroom', price: 'From ₦120,000' },
  { name: '6-Seater Dining Set', category: 'Dining', price: 'From ₦210,000' },
  { name: 'Office Executive Desk', category: 'Office', price: 'From ₦95,000' },
  { name: 'Wardrobe (4 doors)', category: 'Storage', price: 'From ₦165,000' },
  { name: 'TV Console Unit', category: 'Living', price: 'From ₦75,000' },
]

export default function MakerProducts() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <Link href="/styles/maker" className="text-sm text-amber-700 hover:underline">← Back to home</Link>
        <h1 className="text-3xl font-bold mt-2">Our Work</h1>
        <p className="text-stone-600 mt-1">Pieces we build in the workshop</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.name} className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition">
            <div className="h-44 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-4xl">
              🪑
            </div>
            <div className="p-5">
              <p className="text-xs text-amber-700 font-medium mb-1">{item.category}</p>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-stone-600 text-sm mt-1">{item.price}</p>
              <Link href="/styles/maker/contact" className="mt-4 inline-block text-sm font-medium text-amber-800 hover:underline">
                Order this →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}