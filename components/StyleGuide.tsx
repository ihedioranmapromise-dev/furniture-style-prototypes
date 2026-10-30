type StyleGuideProps = {
  forWho: string
  notFor: string
  job: string
  flow: string[]
  scope: string
  accent?: 'amber' | 'stone' | 'dark' | 'emerald'
}

export function StyleGuide({
  forWho,
  notFor,
  job,
  flow,
  scope,
  accent = 'amber',
}: StyleGuideProps) {
  const isDark = accent === 'dark'
  const wrap = isDark
    ? 'border-neutral-700 bg-neutral-950 text-neutral-100'
    : 'border-stone-200 bg-stone-50 text-stone-900'
  const label = isDark ? 'text-neutral-500' : 'text-stone-500'
  const body = isDark ? 'text-neutral-200' : 'text-stone-800'
  const muted = isDark ? 'text-neutral-400' : 'text-stone-600'
  const chip = isDark ? 'bg-neutral-900 border-neutral-700' : 'bg-white border-stone-200'

  return (
    <section className={`border ${wrap} rounded-xl p-5 md:p-6 mb-8 text-sm`}>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className={`rounded-lg border p-3 ${chip}`}>
          <p className={`text-[10px] font-semibold uppercase tracking-wider ${label} mb-1`}>For</p>
          <p className={body}>{forWho}</p>
        </div>
        <div className={`rounded-lg border p-3 ${chip}`}>
          <p className={`text-[10px] font-semibold uppercase tracking-wider ${label} mb-1`}>Not for</p>
          <p className={muted}>{notFor}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className={`text-[10px] font-semibold uppercase tracking-wider ${label} mb-1`}>Job of this site</p>
        <p className={`font-medium ${body}`}>{job}</p>
      </div>
      <div className="mb-4">
        <p className={`text-[10px] font-semibold uppercase tracking-wider ${label} mb-1`}>Flow</p>
        <ol className={`list-decimal list-inside space-y-0.5 ${muted}`}>
          {flow.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
      <div>
        <p className={`text-[10px] font-semibold uppercase tracking-wider ${label} mb-1`}>Scope</p>
        <p className={muted}>{scope}</p>
      </div>
    </section>
  )
}
