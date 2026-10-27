import Link from 'next/link'

export default function MakerHome() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-800 to-amber-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-300 text-sm font-medium mb-3 tracking-widest uppercase">Handmade in Aba</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We build furniture<br />the proper way
          </h1>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Real wood. Real craftsmanship. Custom pieces made for your home or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/styles/maker/products" className="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50">
              See Our Work
            </Link>
            <Link href="/styles/maker/contact" className="border border-white/40 px-8 py-3 rounded-full font-semibold hover:bg-white/10">
              Order Custom Piece
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🪵</div>
          <h3 className="font-semibold text-lg mb-2">Solid Materials</h3>
          <p className="text-stone-600 text-sm">We use real wood and quality boards. No shortcuts.</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🛠️</div>
          <h3 className="font-semibold text-lg mb-2">Custom Orders</h3>
          <p className="text-stone-600 text-sm">Tell us what you need. We design and build it for you.</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">📍</div>
          <h3 className="font-semibold text-lg mb-2">Made in Aba</h3>
          <p className="text-stone-600 text-sm">Workshop based in Aba. Fast delivery across Nigeria.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-100 py-14 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to order?</h2>
        <p className="text-stone-600 mb-6">Send us a message on WhatsApp. We reply fast.</p>
        <Link href="/styles/maker/contact" className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-900">
          Chat on WhatsApp
        </Link>
      </section>
    </>
  )
}