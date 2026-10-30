import Link from 'next/link'

const styles = [
  {
    id: 'maker',
    title: 'Maker / Workshop',
    why: 'You build custom furniture. Clients need to trust your craft and order their own piece.',
    features: ['Custom orders', 'Process story', 'Workshop identity', 'WhatsApp CTA'],
    href: '/styles/maker',
    color: 'from-amber-700 to-amber-900',
    badge: 'Best for producers'
  },
  {
    id: 'shop',
    title: 'E-commerce Store',
    why: 'You sell ready pieces. Customers browse products, see prices, and order on WhatsApp.',
    features: ['Product catalog', 'Categories', 'Prices', 'Full structure tabs'],
    href: '/styles/shop',
    color: 'from-stone-700 to-stone-900',
    badge: 'Best for sellers · most features'
  },
  {
    id: 'luxury',
    title: 'Luxury Showroom',
    why: 'You serve higher-end clients. The site must feel premium and invite a visit or private order.',
    features: ['Gallery look', 'Collections', 'Book a visit', 'Minimal premium'],
    href: '/styles/luxury',
    color: 'from-neutral-800 to-black',
    badge: 'Premium feel'
  },
  {
    id: 'simple',
    title: 'Simple Portfolio',
    why: 'You only need a clean page: photos of your work and a big WhatsApp button.',
    features: ['Photos first', 'Fast load', 'WhatsApp only', 'Mobile-first'],
    href: '/styles/simple',
    color: 'from-emerald-700 to-emerald-900',
    badge: 'Fast & light'
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-stone-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
            Furniture Style Prototypes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Choose the look that fits<br />your furniture business
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-4">
            Four fully clickable website styles. Each one explains why it exists, how it works, and what features you get — then you walk the real pages.
          </p>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            Open a style → read the guide at the top → click through Home, products, and contact like a real customer would.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {styles.map((style) => (
            <Link
              key={style.id}
              href={style.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-36 bg-gradient-to-br ${style.color} flex items-end p-6`}>
                <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                  {style.badge}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {style.title}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{style.why}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {style.features.map((f) => (
                    <span key={f} className="text-[11px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">{f}</span>
                  ))}
                </div>
                <div className="flex items-center text-amber-700 font-medium text-sm">
                  Open this style
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-stone-200 py-10 text-center text-stone-500 text-sm px-4">
        <p>Sales prototype — each style is clickable. Shop style shows the fullest structure (catalog, work, store).</p>
      </footer>
    </main>
  )
}
