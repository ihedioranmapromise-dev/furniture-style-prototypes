import Link from 'next/link'

export default function ShopHome() {
  return (
    <>
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Furniture<br />Ready to Order</h1>
          <p className="text-stone-300 text-lg mb-8">Sofas, beds, dining sets, office furniture and more. Delivered across Nigeria.</p>
          <Link href="/styles/shop/products" className="inline-block bg-white text-stone-900 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Sofas', 'Beds', 'Dining', 'Office'].map((cat) => (
            <Link key={cat} href="/styles/shop/products" className="bg-stone-100 rounded-xl p-8 text-center font-medium hover:bg-stone-200 transition">
              {cat}
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