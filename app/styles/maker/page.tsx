import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

export default function MakerHome() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <StyleGuide
          forWho="Workshops that build custom furniture and need clients to trust the craft."
          notFor="Pure resellers who only list fixed stock and never take custom jobs."
          job="Turn craftsmanship into inbound custom orders via WhatsApp."
          flow={[
            'Land on workshop identity',
            'See finished work and how you build',
            'Message WhatsApp for a custom piece',
            'You agree size, price, timeline — then build',
          ]}
          scope="Public site + process story + work gallery + WhatsApp path. Not a full inventory ERP."
        />
      </div>

      <section className="relative py-20 px-6 overflow-hidden">
        <img src={img.woodwork} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-amber-950/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <p className="text-amber-300/90 text-xs font-medium mb-3 tracking-widest uppercase">Handmade in Aba</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            We build furniture<br />the proper way
          </h1>
          <p className="text-amber-100/90 text-base mb-8 max-w-xl mx-auto">
            Real wood. Custom pieces for home or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/styles/maker/products" className="bg-white text-amber-950 px-8 py-3 rounded-full font-semibold text-sm hover:bg-amber-50">
              See our work
            </Link>
            <Link href="/styles/maker/contact" className="border border-white/40 px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/10">
              Order custom
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
        {[
          { t: 'Solid materials', d: 'Real wood. Quality boards. No shortcuts.' },
          { t: 'Custom orders', d: 'You specify. We design and build.' },
          { t: 'Made in Aba', d: 'Workshop local. Delivery nationwide.' },
        ].map((x) => (
          <div key={x.t} className="text-center md:text-left">
            <h3 className="font-semibold text-stone-900 mb-1">{x.t}</h3>
            <p className="text-stone-600 text-sm">{x.d}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10 grid sm:grid-cols-3 gap-3">
        {[img.sofa, img.dining, img.bed].map((src, i) => (
          <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      <section className="border-t border-stone-200 py-12 px-6 text-center">
        <Link href="/styles/maker/contact" className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-amber-950">
          WhatsApp the workshop
        </Link>
      </section>
    </>
  )
}
