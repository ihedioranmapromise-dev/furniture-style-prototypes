import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

export default function LuxuryHome() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <StyleGuide
          accent="dark"
          forWho="Higher-end furniture and interior clients who buy on trust and taste."
          notFor="High-volume low-price stock sellers."
          job="Premium presence that leads to a visit or private WhatsApp order."
          flow={[
            'Enter calm gallery feel',
            'Browse collections without noise',
            'Book a visit or message privately',
            'You handle the relationship',
          ]}
          scope="Gallery site + collections + contact/visit CTA. Not a discount catalog."
        />
      </div>

      <section className="min-h-[65vh] flex items-center justify-center px-6 relative overflow-hidden">
        <img src={img.luxury} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="text-center max-w-2xl relative z-10">
          <p className="text-neutral-400 text-xs tracking-[0.25em] uppercase mb-5">Premium furniture</p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">Spaces designed<br />with intention</h1>
          <Link href="/styles/luxury/collections" className="inline-block border border-white/80 px-8 py-2.5 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition">
            Collections
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { room: 'Living', image: img.living },
          { room: 'Bedroom', image: img.bed },
          { room: 'Office', image: img.office },
        ].map((item) => (
          <Link key={item.room} href="/styles/luxury/collections" className="group">
            <div className="aspect-[4/5] overflow-hidden mb-3 bg-neutral-900">
              <img src={item.image} alt={item.room} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <h3 className="text-sm font-light tracking-wide text-neutral-300">{item.room}</h3>
          </Link>
        ))}
      </section>

      <section className="border-t border-neutral-800 py-12 text-center">
        <Link href="/styles/luxury/contact" className="inline-block bg-white text-black px-8 py-2.5 text-xs tracking-widest uppercase hover:bg-neutral-200">
          Book a visit
        </Link>
      </section>
    </>
  )
}
