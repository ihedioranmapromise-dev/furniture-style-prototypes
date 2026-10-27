import Link from 'next/link'

export default function MakerAbout() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/styles/maker" className="text-sm text-amber-700 hover:underline">← Back to home</Link>
      <h1 className="text-3xl font-bold mt-2 mb-6">About the Workshop</h1>
      
      <div className="prose prose-stone max-w-none space-y-4 text-stone-700">
        <p>
          We are a furniture workshop based in Aba, Abia State. We specialise in custom-made pieces for homes and offices.
        </p>
        <p>
          Most of our work is done by hand with solid materials. We believe furniture should last, look good, and fit the space it is made for.
        </p>
        <p>
          Whether you need a full living room set, a single custom bed, or office furniture for your business, we can build it.
        </p>
      </div>

      <div className="mt-10 p-6 bg-amber-50 rounded-xl border border-amber-100">
        <p className="font-medium text-amber-900">Location</p>
        <p className="text-stone-700 mt-1">Workshop in Aba, Abia State, Nigeria</p>
        <p className="text-sm text-stone-500 mt-3">Exact address shared when you order</p>
      </div>
    </div>
  )
}