'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  {
    id: 'catalogs',
    label: 'Catalogs',
    title: 'Product catalogs',
    body: 'This is where products are grouped — sofas, beds, dining, office. In a full system (like Okmade) you upload photos, names, and prices into catalogs so the public shop stays organised.',
    points: ['Add / edit products', 'Group by category', 'Show or hide items', 'Prices visible to customers'],
  },
  {
    id: 'work',
    label: 'Work made by hand',
    title: 'Portfolio of finished work',
    body: 'Separate from the shop stock. This is proof — real jobs you completed. Customers who want custom or quality trust this section.',
    points: ['Upload project photos', 'Short caption per job', 'Builds trust before order', 'Can link to WhatsApp'],
  },
  {
    id: 'store',
    label: 'E-commerce store',
    title: 'The selling floor',
    body: 'What the customer browses: grid of products, price, and a clear Order on WhatsApp button. No heavy checkout required — WhatsApp closes the sale.',
    points: ['Product grid', 'Category filters', 'WhatsApp order button', 'Mobile-friendly'],
  },
  {
    id: 'admin',
    label: 'What you manage',
    title: 'Behind the scenes',
    body: 'In a full company-style site you also manage branding, messages, and basic content. This prototype only shows the idea — Okmade is the heavy version of that admin.',
    points: ['Update products yourself', 'Change photos and text', 'See inquiries', 'Keep the public site current'],
  },
]

export default function ShopStructurePage() {
  const [active, setActive] = useState('catalogs')
  const current = tabs.find((t) => t.id === active) || tabs[0]

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/styles/shop" className="text-sm text-stone-500 hover:underline">← Shop home</Link>
      <h1 className="text-3xl font-bold mt-3 mb-2">Site structure</h1>
      <p className="text-stone-600 mb-8">
        How a full furniture store site is organised. Tap each tab. This is what the Shop style is built to carry — catalogs, handmade work, store, and management.
      </p>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-200 pb-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              active === t.id
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-3">{current.title}</h2>
        <p className="text-stone-600 leading-relaxed mb-6">{current.body}</p>
        <ul className="space-y-2">
          {current.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-stone-800">
              <span className="text-green-600 font-bold">✓</span> {p}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm text-stone-500">
        Client note: Shop is the style that shows the most structure. Maker, Luxury, and Simple are lighter on purpose.
      </p>
    </div>
  )
}
