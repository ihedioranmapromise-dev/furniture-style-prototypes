import Link from 'next/link'

const styles = [
  {
    id: 'maker',
    title: 'Maker / Workshop',
    forWho: 'Workshops that build custom pieces',
    notFor: 'Pure resellers with fixed stock only',
    job: 'Turn craft into inbound custom orders',
    href: '/styles/maker',
    color: 'from-amber-800 to-amber-950',
  },
  {
    id: 'shop',
    title: 'Store / Catalog',
    forWho: 'Sellers with products and prices',
    notFor: 'Custom-only makers who never list stock',
    job: 'Browse → price → WhatsApp order',
    href: '/styles/shop',
    color: 'from-stone-700 to-stone-900',
  },
  {
    id: 'luxury',
    title: 'Luxury Showroom',
    forWho: 'Higher-end furniture and interiors',
    notFor: 'High-volume cheap stock sellers',
    job: 'Premium trust → visit or private order',
    href: '/styles/luxury',
    color: 'from-neutral-800 to-black',
  },
  {
    id: 'simple',
    title: 'Simple Portfolio',
    forWho: 'Small makers who need presence only',
    notFor: 'Anyone needing full catalog or admin',
    job: 'Photos + WhatsApp. Nothing extra.',
    href: '/styles/simple',
    color: 'from-emerald-800 to-emerald-950',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-stone-200 px-6 py-14 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-4">
            Four website models for furniture businesses.
          </h1>
          <p className="text-stone-600 text-lg mb-2">
            Click one. Walk it. Pick a direction.
          </p>
          <p className="text-stone-400 text-sm">
            Same builder. Four models. You choose; we ship.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        {styles.map((s) => (
          <Link
            key={s.id}
            href={s.href}
            className="block group border border-stone-200 rounded-xl overflow-hidden hover:border-stone-400 transition"
          >
            <div className="flex flex-col sm:flex-row">
              <div className={`sm:w-28 h-16 sm:h-auto bg-gradient-to-br ${s.color} shrink-0`} />
              <div className="p-5 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700">
                    {s.title}
                  </h2>
                  <span className="text-stone-400 text-sm shrink-0 group-hover:text-stone-600">Open →</span>
                </div>
                <p className="text-sm text-stone-800 mt-2">
                  <span className="text-stone-400">For </span>{s.forWho}
                </p>
                <p className="text-sm text-stone-500 mt-0.5">
                  <span className="text-stone-400">Not for </span>{s.notFor}
                </p>
                <p className="text-sm text-stone-700 mt-2 font-medium">{s.job}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="border-t border-stone-100 py-8 text-center text-xs text-stone-400 px-4">
        <p>Live demos · Next.js · Mobile-ready · Built to decide, not to decorate</p>
        <p className="mt-1">Store model includes structure map (catalog / work / store / manage)</p>
      </footer>
    </main>
  )
}
