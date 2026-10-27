import Link from 'next/link'

export default function MakerProcess() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/styles/maker" className="text-sm text-amber-700 hover:underline">← Back to home</Link>
      <h1 className="text-3xl font-bold mt-2 mb-8">How We Build</h1>

      <div className="space-y-10">
        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h3 className="font-semibold text-lg">You tell us what you need</h3>
            <p className="text-stone-600 mt-1">Send photos, measurements or just describe the piece. We discuss materials and budget.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h3 className="font-semibold text-lg">We design & confirm</h3>
            <p className="text-stone-600 mt-1">Simple sketch or reference photos. You approve before we start cutting wood.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h3 className="font-semibold text-lg">We build in the workshop</h3>
            <p className="text-stone-600 mt-1">Solid construction, proper finishing. We can send progress photos if you want.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h3 className="font-semibold text-lg">Delivery & setup</h3>
            <p className="text-stone-600 mt-1">We deliver within Aba and to other states. Installation available on request.</p>
          </div>
        </div>
      </div>

      <div className="mt-14 text-center">
        <Link href="/styles/maker/contact" className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-900">
          Start Your Order
        </Link>
      </div>
    </div>
  )
}