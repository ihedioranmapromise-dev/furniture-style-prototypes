'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  {
    id: 'catalogs',
    label: 'Catalogs',
    title: 'Product catalogs',
    body: 'Owner uploads products into groups (sofa, bed, dining). Public shop stays organised.',
    points: ['Add / edit products', 'Group by category', 'Show or hide items', 'Prices on the public site'],
  },
  {
    id: 'work',
    label: 'Work',
    title: 'Work made by hand',
    body: 'Proof section — finished jobs, not only stock. Builds trust for custom or quality buyers.',
    points: ['Project photos', 'Short captions', 'Trust before order', 'Optional WhatsApp link'],
  },
  {
    id: 'store',
    label: 'Store',
    title: 'Selling floor',
    body: 'What the customer uses: grid, price, Order on WhatsApp. Sale closes in chat.',
    points: ['Product grid', 'Categories', 'WhatsApp CTA', 'Mobile-first'],
  },
  {
    id: 'admin',
    label: 'You manage',
    title: 'After handover',
    body: 'You keep the site current. Full company admin (Okmade-level) is a larger product; this model is scoped to sell and update.',
    points: ['Update products', 'Change photos / text', 'Handle WhatsApp orders', 'No dependency for every edit'],
  },
]

export default function ShopStructurePage() {
  const [active, setActive] = useState('catalogs')
  const current = tabs.find((t) => t.id === active) || tabs[0]

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Link href="/styles/shop" className="text-xs text-stone-500 hover:text-stone-800">← Store</Link>
      <h1 className="text-2xl font-semibold mt-3 mb-1">Structure map</h1>
      <p className="text-sm text-stone-500 mb-6">What the Store model carries. Tap a tab.</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
              active === t.id ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="border border-stone-200 rounded-xl p-5">
        <h2 className="font-semibold text-stone-900 mb-2">{current.title}</h2>
        <p className="text-sm text-stone-600 mb-4 leading-relaxed">{current.body}</p>
        <ul className="space-y-1.5">
          {current.points.map((p) => (
            <li key={p} className="text-sm text-stone-800 flex gap-2">
              <span className="text-stone-400">–</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
