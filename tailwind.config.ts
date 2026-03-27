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
        navy: {
          DEFAULT: '#0f1f3d',
          light: '#1a3560',
          dark: '#080f1e',
        },
        ocean: {
          DEFAULT: '#1e6fbf',
          light: '#3b8fd4',
          dark: '#155a9e',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e0b83a',
          dark: '#a8861f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
