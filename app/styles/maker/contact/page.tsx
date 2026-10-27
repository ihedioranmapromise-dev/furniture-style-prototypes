import Link from 'next/link'

export default function MakerContact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 text-center">
      <Link href="/styles/maker" className="text-sm text-amber-700 hover:underline">← Back to home</Link>
      <h1 className="text-3xl font-bold mt-2 mb-4">Contact Us</h1>
      <p className="text-stone-600 mb-10">
        The fastest way to reach us is WhatsApp. Send a message and we will reply.
      </p>

      <a
        href="https://wa.me/2348161305184"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 shadow-lg"
      >
        <span className="text-2xl">💬</span>
        Chat on WhatsApp
      </a>

      <p className="mt-8 text-sm text-stone-500">
        Or call: 0816 130 5184
      </p>

      <div className="mt-14 pt-8 border-t border-stone-200">
        <p className="text-xs text-stone-400">This is a prototype style preview</p>
        <Link href="/" className="text-sm text-amber-700 hover:underline mt-2 inline-block">
          ← Back to all styles
        </Link>
      </div>
    </div>
  )
}