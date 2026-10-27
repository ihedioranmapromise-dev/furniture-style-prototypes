import Link from 'next/link'

const items = [
  { name: 'The Lagos Sofa', desc: 'Deep seating, solid frame' },
  { name: 'Executive Desk', desc: 'Mahogany finish' },
  { name: 'Platform Bed', desc: 'Low profile, clean lines' },
  { name: 'Dining Table 8', desc: 'Solid wood top' },
  { name: 'Sideboard', desc: 'Storage with elegance' },
  { name: 'Accent Chair', desc: 'Statement piece' },
]

export default function LuxuryCollections() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/styles/luxury" className="text-sm text-neutral-500 hover:text-white">← Home</Link>
      <h1 className="text-4xl font-light mt-4 mb-12 tracking-wide">Collections</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <div key={item.name} className="group">
            <div className="aspect-square bg-neutral-800 mb-4 flex items-center justify-center text-5xl group-hover:bg-neutral-700 transition">🪑</div>
            <h3 className="text-lg font-light">{item.name}</h3>
            <p className="text-neutral-500 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}