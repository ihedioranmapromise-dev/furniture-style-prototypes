import Link from 'next/link'

type StyleGuideProps = {
  why: string
  how: string[]
  features: string[]
  accent?: string
}

export function StyleGuide({ why, how, features, accent = 'amber' }: StyleGuideProps) {
  const border = accent === 'dark' ? 'border-neutral-700' : accent === 'emerald' ? 'border-emerald-200' : accent === 'stone' ? 'border-stone-200' : 'border-amber-200'
  const bg = accent === 'dark' ? 'bg-neutral-900 text-neutral-100' : 'bg-white text-stone-800'
  const title = accent === 'dark' ? 'text-white' : 'text-stone-900'
  const muted = accent === 'dark' ? 'text-neutral-400' : 'text-stone-600'
  const chip = accent === 'dark' ? 'bg-neutral-800 text-neutral-200' : accent === 'emerald' ? 'bg-emerald-50 text-emerald-900' : accent === 'stone' ? 'bg-stone-100 text-stone-800' : 'bg-amber-50 text-amber-900'

  return (
    <section className={`border ${border} ${bg} rounded-2xl p-6 md:p-8 mb-10`}>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider ${muted} mb-2`}>Why this style</p>
          <p className={`${title} font-medium leading-relaxed`}>{why}</p>
        </div>
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider ${muted} mb-2`}>How it works</p>
          <ol className={`list-decimal list-inside space-y-1.5 text-sm ${muted}`}>
            {how.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider ${muted} mb-2`}>Key features</p>
          <ul className="flex flex-wrap gap-2">
            {features.map((f) => (
              <li key={f} className={`text-xs px-2.5 py-1 rounded-full ${chip}`}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className={`mt-6 text-xs ${muted}`}>
        This bar is for clients reviewing the prototype — so you understand what this style is for before you walk the pages.
      </p>
    </section>
  )
}

export function BackToStyles({ dark }: { dark?: boolean }) {
  return (
    <Link href="/" className={`text-xs ${dark ? 'text-neutral-400 hover:text-white' : 'text-stone-500 hover:text-stone-800'}`}>
      ← All styles
    </Link>
  )
}
