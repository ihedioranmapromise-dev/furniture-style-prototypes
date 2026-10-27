import Link from 'next/link'

const styles = [
  {
    id: 'maker',
    title: 'Maker / Workshop',
    description: 'For those who produce furniture themselves. Focus on craftsmanship, process and custom orders.',
    href: '/styles/maker',
    color: 'from-amber-700 to-amber-900',
    badge: 'Best for producers'
  },
  {
    id: 'shop',
    title: 'E-commerce Store',
    description: 'Pure selling style. Product grid, categories, prices and clear WhatsApp order buttons.',
    href: '/styles/shop',
    color: 'from-stone-700 to-stone-900',
    badge: 'Best for sellers'
  },
  {
    id: 'luxury',
    title: 'Luxury Showroom',
    description: 'Premium look with beautiful photography and lifestyle feel. Ideal for ambitious workshops.',
    href: '/styles/luxury',
    color: 'from-neutral-800 to-black',
    badge: 'Premium feel'
  },
  {
    id: 'simple',
    title: 'Simple Portfolio',
    description: 'Clean, fast and mobile-first. Mostly photos + big WhatsApp button. Perfect for small makers.',
    href: '/styles/simple',
    color: 'from-emerald-700 to-emerald-900',
    badge: 'Fast & light'
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
            Furniture Style Prototypes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Choose the look that fits<br />your furniture business
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Four fully clickable website styles. Open any of them, walk around the pages, and decide which direction you want for your business.
          </p>
        </div>
      </section>

      {/* Style Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {styles.map((style) => (
            <Link
              key={style.id}
              href={style.href}
              className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-40 bg-gradient-to-br ${style.color} flex items-end p-6`}>
                <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                  {style.badge}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {style.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {style.description}
                </p>
                <div className="flex items-center text-amber-700 font-medium">
                  Preview this style
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <footer className="border-t border-stone-200 py-10 text-center text-stone-500 text-sm">
        <p>This is a sales prototype. Each style is fully clickable so you can walk around and experience it.</p>
      </footer>
    </main>
  )
}