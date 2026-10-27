import Link from 'next/link'

export default function LuxuryContact() {
  return (
    <div className="max-w-md mx-auto px-6 py-20 text-center">
      <Link href="/styles/luxury" className="text-sm text-neutral-500 hover:text-white">← Home</Link>
      <h1 className="text-3xl font-light mt-4 mb-4 tracking-wide">Book a Visit</h1>
      <p className="text-neutral-400 mb-10">Schedule a private viewing or discuss a custom piece.</p>
      <a href="https://wa.me/2348161305184" target="_blank" rel="noopener noreferrer"
        className="inline-block border border-white px-10 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition">
        WhatsApp Us
      </a>
      <p className="mt-8 text-sm text-neutral-500">0816 130 5184</p>
      <div className="mt-16 pt-8 border-t border-neutral-800">
        <Link href="/" className="text-sm text-neutral-500 hover:text-white">← All styles</Link>
      </div>
    </div>
  )
}