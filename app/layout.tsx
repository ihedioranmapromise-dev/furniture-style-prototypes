import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Furniture Style Prototypes | Choose Your Look',
  description: '4 fully clickable furniture website styles for Aba makers and sellers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}