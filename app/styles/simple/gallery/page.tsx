import Link from 'next/link'

export default function SimpleGallery() {
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <Link href="/styles/simple" className="text-sm text-stone-500">← Back</Link>
      <h1 className="text-2xl font-bold mt-2 mb-6">Gallery</h1>
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square bg-stone-100 rounded-lg flex items-center justify-center text-3xl">
            {['🛋️','🛏️','🪑','🗄️','🪞','🚪','📺','🪑'][i]}
          </div>
        ))}
      </div>
      <Link href="/styles/simple/contact" className="mt-8 block text-center bg-emerald-600 text-white py-3 rounded-xl font-medium">
        Order on WhatsApp
      </Link>
    </div>
  )
}