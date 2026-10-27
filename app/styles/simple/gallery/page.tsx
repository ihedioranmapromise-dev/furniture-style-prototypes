import Link from 'next/link'
import { img } from '@/lib/images'

const gallery = [img.sofa, img.bed, img.dining, img.desk, img.wardrobe, img.console, img.chair, img.living2]

export default function SimpleGallery() {
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <Link href="/styles/simple" className="text-sm text-stone-500">← Back</Link>
      <h1 className="text-2xl font-bold mt-2 mb-6">Gallery</h1>
      <div className="grid grid-cols-2 gap-3">
        {gallery.map((src, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden">
            <img src={src} alt="Furniture piece" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <Link href="/styles/simple/contact" className="mt-8 block text-center bg-emerald-600 text-white py-3 rounded-xl font-medium">
        Order on WhatsApp
      </Link>
    </div>
  )
}