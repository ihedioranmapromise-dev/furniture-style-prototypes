import Link from 'next/link'

export default function SimpleHome() {
  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-3">Furniture made in Aba</h1>
      <p className="text-stone-600 mb-8">Custom pieces for home and office. Solid work, fair price.</p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        {[1,2,3,4].map((i) => (
          <div key={i} className="aspect-square bg-stone-100 rounded-xl flex items-center justify-center text-3xl">
            {i === 1 ? '🛋️' : i === 2 ? '🛏️' : i === 3 ? '🪑' : '🗄️'}
          </div>
        ))}
      </div>

      <Link href="/styles/simple/gallery" className="block w-full border border-stone-300 py-3 rounded-xl font-medium mb-3 hover:bg-stone-50">
        See more photos
      </Link>
      <Link href="/styles/simple/contact" className="block w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700">
        Chat on WhatsApp
      </Link>
    </div>
  )
}