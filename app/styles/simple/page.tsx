import Link from 'next/link'
import { img } from '@/lib/images'
import { StyleGuide } from '@/components/StyleGuide'

const thumbs = [img.sofa, img.bed, img.chair, img.console]

export default function SimpleHome() {
  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <StyleGuide
        accent="emerald"
        why="For small makers who only need a clean online presence: show your work and let people WhatsApp you. No catalog complexity."
        how={[
          'Customer opens a fast, simple page on their phone',
          'They scroll photos of your real work',
          'They tap WhatsApp and message you',
          'You close the job in chat — no heavy website to manage',
        ]}
        features={['Photo gallery', 'One-page feel', 'Big WhatsApp button', 'Fast on mobile', 'Easy to update']}
      />

      <div className="text-center mt-2">
        <h1 className="text-3xl font-bold mb-3">Furniture made in Aba</h1>
        <p className="text-stone-600 mb-8">Custom pieces for home and office. Solid work, fair price.</p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {thumbs.map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden">
              <img src={src} alt="Furniture" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <Link href="/styles/simple/gallery" className="block w-full border border-stone-300 py-3 rounded-xl font-medium mb-3 hover:bg-stone-50">
          See more photos
        </Link>
        <Link href="/styles/simple/contact" className="block w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700">
          Chat on WhatsApp
        </Link>
      </div>
    </div>
  )
}
