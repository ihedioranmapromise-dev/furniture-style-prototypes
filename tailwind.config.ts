import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf6f1',
          100: '#f0e6d8',
          200: '#e0ccb0',
          300: '#c9a87d',
          400: '#b08956',
          500: '#9a7140',
          600: '#825a35',
          700: '#6a472e',
          800: '#583b29',
          900: '#4a3324',
        }
      }
    },
  },
  plugins: [],
}
export default config