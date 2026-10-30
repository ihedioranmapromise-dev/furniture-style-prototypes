import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

const thumbs = [img.sofa, img.bed, img.chair, img.console]

export default function SimpleHome() {
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <StyleGuide
        accent="emerald"
        forWho="Small makers who need a clean online presence and nothing heavy."
        notFor="Anyone who needs a full catalog, prices grid, or admin system."
        job="Show real work. One tap to WhatsApp."
        flow={[
          'Open fast page on phone',
          'Scroll photos',
          'Tap WhatsApp',
          'Deal closes in chat',
        ]}
        scope="Photos + short intro + WhatsApp. No catalog complexity."
      />

      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold mb-2 text-stone-900">Furniture made in Aba</h1>
        <p className="text-stone-600 text-sm mb-6">Custom pieces. Fair price. Message to order.</p>

        <div className="grid grid-cols-2 gap-2 mb-8">
          {thumbs.map((src, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <Link href="/styles/simple/gallery" className="block w-full border border-stone-300 py-2.5 rounded-lg text-sm font-medium mb-2 hover:bg-stone-50">
          More photos
        </Link>
        <Link href="/styles/simple/contact" className="block w-full bg-emerald-700 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-800">
          WhatsApp
        </Link>
      </div>
    </div>
  )
}
