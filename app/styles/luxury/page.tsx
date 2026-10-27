import Link from 'next/link'

export default function LuxuryHome() {
  return (
    <>
      <section className="min-h-[70vh] flex items-center justify-center px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="text-center max-w-3xl">
          <p className="text-neutral-400 text-sm tracking-[0.3em] uppercase mb-6">Premium Furniture</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">Spaces designed<br />with intention</h1>
          <p className="text-neutral-400 text-lg mb-10">Bespoke furniture and interior pieces crafted for discerning homes and offices.</p>
          <Link href="/styles/luxury/collections" className="inline-block border border-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition">
            View Collections
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {['Living', 'Bedroom', 'Office'].map((room) => (
          <Link key={room} href="/styles/luxury/collections" className="group">
            <div className="aspect-[4/5] bg-neutral-800 mb-4 flex items-center justify-center text-4xl group-hover:bg-neutral-700 transition">
              {room === 'Living' ? '🛋️' : room === 'Bedroom' ? '🛏️' : '🗄️'}
            </div>
            <h3 className="text-lg font-light tracking-wide">{room} Collection</h3>
          </Link>
        ))}
      </section>

      <section className="border-t border-neutral-800 py-16 text-center">
        <p className="text-neutral-400 mb-6">Experience the pieces in person</p>
        <Link href="/styles/luxury/contact" className="inline-block bg-white text-black px-10 py-3 text-sm tracking-widest uppercase hover:bg-neutral-200">
          Book a Showroom Visit
        </Link>
      </section>
    </>
  )
}