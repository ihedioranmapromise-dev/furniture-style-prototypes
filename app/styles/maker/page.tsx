import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

export default function MakerHome() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <StyleGuide
          why="For workshops that build custom furniture. The site sells trust in your craft and makes it easy to request a custom piece."
          how={[
            'Visitor lands and sees you are a real workshop',
            'They browse finished work and how you build',
            'They message WhatsApp to order a custom piece',
            'You reply, agree size/price, and build',
          ]}
          features={['Custom order focus', 'Process / how we build', 'Work gallery', 'WhatsApp CTA', 'Workshop story']}
        />
      </div>

      <section className="relative py-20 px-6 overflow-hidden">
        <img src={img.woodwork} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-amber-950/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
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

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🪵</div>
          <h3 className="font-semibold text-lg mb-2">Solid Materials</h3>
          <p className="text-stone-600 text-sm">Real wood and quality boards. No shortcuts.</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🛠️</div>
          <h3 className="font-semibold text-lg mb-2">Custom Orders</h3>
          <p className="text-stone-600 text-sm">Tell us what you need. We design and build it.</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">📍</div>
          <h3 className="font-semibold text-lg mb-2">Made in Aba</h3>
          <p className="text-stone-600 text-sm">Workshop in Aba. Delivery across Nigeria.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12 grid sm:grid-cols-3 gap-4">
        {[img.sofa, img.dining, img.bed].map((src, i) => (
          <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
            <img src={src} alt="Workshop piece" className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      <section className="bg-stone-100 py-14 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to order?</h2>
        <p className="text-stone-600 mb-6">Message on WhatsApp. We reply fast.</p>
        <Link href="/styles/maker/contact" className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-900">
          Chat on WhatsApp
        </Link>
      </section>
    </>
  )
}
