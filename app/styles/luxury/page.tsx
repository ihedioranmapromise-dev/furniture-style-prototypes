import Link from 'next/link'
import { img } from '@/lib/images'

export default function LuxuryHome() {
  return (
    <>
      <section className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden">
        <img src={img.luxury} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="text-center max-w-3xl relative z-10">
          <p className="text-neutral-300 text-sm tracking-[0.3em] uppercase mb-6">Premium Furniture</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">Spaces designed<br />with intention</h1>
          <p className="text-neutral-300 text-lg mb-10">Bespoke furniture and interior pieces crafted for discerning homes and offices.</p>
          <Link href="/styles/luxury/collections" className="inline-block border border-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition">
            View Collections
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          { room: 'Living', image: img.living },
          { room: 'Bedroom', image: img.bed },
          { room: 'Office', image: img.office },
        ].map((item) => (
          <Link key={item.room} href="/styles/luxury/collections" className="group">
            <div className="aspect-[4/5] overflow-hidden mb-4 bg-neutral-800">
              <img src={item.image} alt={item.room} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <h3 className="text-lg font-light tracking-wide">{item.room} Collection</h3>
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