import Link from 'next/link'

export default function ShopContact() {
  return (
    <div className="max-w-md mx-auto px-6 py-16 text-center">
      <Link href="/styles/shop" className="text-sm text-stone-500 hover:underline">← Home</Link>
      <h1 className="text-3xl font-bold mt-2 mb-3">Place Your Order</h1>
      <p className="text-stone-600 mb-8">Send the product name on WhatsApp. We confirm price and delivery.</p>
      <a href="https://wa.me/2348161305184" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700">
        💬 WhatsApp Order
      </a>
      <p className="mt-6 text-sm text-stone-500">Call: 0816 130 5184</p>
      <div className="mt-12 pt-6 border-t">
        <Link href="/" className="text-sm text-stone-500 hover:underline">← All styles</Link>
      </div>
    </div>
  )
}