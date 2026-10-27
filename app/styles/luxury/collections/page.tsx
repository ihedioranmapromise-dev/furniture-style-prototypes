import Link from 'next/link'
import { img } from '@/lib/images'

const items = [
  { name: 'The Lagos Sofa', desc: 'Deep seating, solid frame', image: img.sofaGrey },
  { name: 'Executive Desk', desc: 'Mahogany finish', image: img.desk },
  { name: 'Platform Bed', desc: 'Low profile, clean lines', image: img.bed },
  { name: 'Dining Table 8', desc: 'Solid wood top', image: img.dining },
  { name: 'Sideboard', desc: 'Storage with elegance', image: img.console },
  { name: 'Accent Chair', desc: 'Statement piece', image: img.chair },
]

export default function LuxuryCollections() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/styles/luxury" className="text-sm text-neutral-500 hover:text-white">← Home</Link>
      <h1 className="text-4xl font-light mt-4 mb-12 tracking-wide">Collections</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <div key={item.name} className="group">
            <div className="aspect-square overflow-hidden mb-4 bg-neutral-800">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <h3 className="text-lg font-light">{item.name}</h3>
            <p className="text-neutral-500 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}