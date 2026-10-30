import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

export default function ShopHome() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <StyleGuide
          accent="stone"
          why="For sellers who stock furniture and want customers to browse products, see prices, and order on WhatsApp. This is the fullest of the four styles."
          how={[
            'Customer opens the store and browses categories',
            'They open a product, see price and details',
            'They tap Order on WhatsApp with the item in mind',
            'You confirm stock, payment, and delivery',
          ]}
          features={['Product catalog', 'Categories', 'Visible prices', 'WhatsApp order', 'Structure like a real store']}
        />
      </div>

      <section className="relative py-20 px-6 overflow-hidden">
        <img src={img.living2} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/70" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Furniture<br />Ready to Order</h1>
          <p className="text-stone-200 text-lg mb-8">Sofas, beds, dining sets, office furniture. Delivered across Nigeria.</p>
          <Link href="/styles/shop/products" className="inline-block bg-white text-stone-900 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-2">What this style can hold</h2>
        <p className="text-stone-600 text-sm mb-6">Same idea as a full furniture company site — simplified for the prototype. Click a tab area below on the Structure page.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Link href="/styles/shop/structure" className="border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition">
            <p className="font-semibold text-stone-900 mb-1">Catalogs</p>
            <p className="text-sm text-stone-600">Upload and group products by type (sofa, bed, dining…).</p>
          </Link>
          <Link href="/styles/shop/structure" className="border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition">
            <p className="font-semibold text-stone-900 mb-1">Work / handmade</p>
            <p className="text-sm text-stone-600">Show pieces you built — portfolio of finished jobs.</p>
          </Link>
          <Link href="/styles/shop/structure" className="border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition">
            <p className="font-semibold text-stone-900 mb-1">Store</p>
            <p className="text-sm text-stone-600">Prices, order on WhatsApp, ready-to-sell grid.</p>
          </Link>
        </div>
        <Link href="/styles/shop/structure" className="text-sm font-medium text-stone-900 underline underline-offset-2">
          See full structure tabs →
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
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
