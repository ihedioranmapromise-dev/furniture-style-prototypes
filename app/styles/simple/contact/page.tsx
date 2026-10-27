import Link from 'next/link'

export default function SimpleContact() {
  return (
    <div className="max-w-sm mx-auto px-4 py-16 text-center">
      <Link href="/styles/simple" className="text-sm text-stone-500">← Back</Link>
      <h1 className="text-2xl font-bold mt-2 mb-3">Contact</h1>
      <p className="text-stone-600 mb-8 text-sm">Fastest way is WhatsApp. Send what you need.</p>
      <a href="https://wa.me/2348161305184" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700">
        💬 WhatsApp
      </a>
      <p className="mt-6 text-sm text-stone-500">0816 130 5184</p>
      <div className="mt-12">
        <Link href="/" className="text-sm text-stone-400">← All styles</Link>
      </div>
    </div>
  )
}