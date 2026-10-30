import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

export default function ShopHome() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <StyleGuide
          accent="stone"
          forWho="Sellers who stock furniture and want a clear catalog with prices."
          notFor="Custom-only makers who never list fixed products."
          job="Customer browses products, sees price, orders on WhatsApp."
          flow={[
            'Open store → categories',
            'Open product → price and detail',
            'Order on WhatsApp',
            'You confirm stock, payment, delivery',
          ]}
          scope="Catalog + categories + prices + WhatsApp order + structure map. Not a full payment-gateway mall unless scoped later."
        />
      </div>

      <section className="relative py-16 px-6 overflow-hidden">
        <img src={img.living2} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/75" />
        <div className="max-w-3xl mx-auto text-center relative z-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Furniture ready to order</h1>
          <p className="text-stone-200 text-sm mb-6">Browse. See price. Message to buy.</p>
          <Link href="/styles/shop/products" className="inline-block bg-white text-stone-900 px-7 py-2.5 rounded-lg font-semibold text-sm hover:bg-stone-100">
            Browse products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">Under the hood</h2>
            <p className="text-sm text-stone-500">What this model is built to carry</p>
          </div>
          <Link href="/styles/shop/structure" className="text-sm font-medium text-stone-900 underline underline-offset-2 shrink-0">
            Structure map →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { t: 'Catalogs', d: 'Products grouped by type' },
            { t: 'Work', d: 'Handmade / finished jobs' },
            { t: 'Store', d: 'Prices + WhatsApp order' },
          ].map((x) => (
            <Link key={x.t} href="/styles/shop/structure" className="border border-stone-200 rounded-lg p-4 hover:border-stone-400 transition">
              <p className="font-semibold text-stone-900 text-sm">{x.t}</p>
              <p className="text-xs text-stone-500 mt-1">{x.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'Sofas', image: img.sofa },
            { name: 'Beds', image: img.bed },
            { name: 'Dining', image: img.dining },
            { name: 'Office', image: img.desk },
          ].map((cat) => (
            <Link key={cat.name} href="/styles/shop/products" className="relative rounded-lg overflow-hidden aspect-square group">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-3">
                <span className="text-white text-sm font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 py-10 text-center">
        <Link href="/styles/shop/contact" className="inline-block bg-stone-900 text-white px-7 py-2.5 rounded-lg font-semibold text-sm hover:bg-stone-800">
          Order on WhatsApp
        </Link>
      </section>
    </>
  )
}
