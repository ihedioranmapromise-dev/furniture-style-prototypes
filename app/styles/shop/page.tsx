import Link from 'next/link'
import { img } from '@/lib/images'

export default function ShopHome() {
  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden">
        <img src={img.living2} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Furniture<br />Ready to Order</h1>
          <p className="text-stone-200 text-lg mb-8">Sofas, beds, dining sets, office furniture and more. Delivered across Nigeria.</p>
          <Link href="/styles/shop/products" className="inline-block bg-white text-stone-900 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Sofas', image: img.sofa },
            { name: 'Beds', image: img.bed },
            { name: 'Dining', image: img.dining },
            { name: 'Office', image: img.desk },
          ].map((cat) => (
            <Link key={cat.name} href="/styles/shop/products" className="relative rounded-xl overflow-hidden aspect-square group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <span className="text-white font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-12 text-center">
        <p className="text-stone-600 mb-4">See something you like?</p>
        <Link href="/styles/shop/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
          Order via WhatsApp
        </Link>
      </section>
    </>
  )
}