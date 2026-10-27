import Link from 'next/link'

export default function LuxuryAbout() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/styles/luxury" className="text-sm text-neutral-500 hover:text-white">← Home</Link>
      <h1 className="text-4xl font-light mt-4 mb-8 tracking-wide">About</h1>
      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p>Atelier Aba is a furniture studio focused on refined, lasting pieces for modern Nigerian homes and workspaces.</p>
        <p>Every item is considered — proportion, material, and finish — so the final result feels intentional rather than ordinary.</p>
        <p>We work with clients who value quality and are willing to invest in furniture that becomes part of their space for years.</p>
      </div>
    </div>
  )
}