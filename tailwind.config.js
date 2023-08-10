/** @type {import('tailwindcss').Config} */

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}'
]
export const theme = {
  extend: {
    fontFamily: {
      borel: ['var(--font-cursiveFont)', 'cursive']
    },
    colors: {
      active: '#9E86FF',
      gray: '#676D75',
      dark: '#131417',
      lightDark: '#1a1c4d',
      white: '#FAF9F6',
      darkerWhite: '#E0DED8'
    },
    maxWidth: {
      base: '1400px'
    },
    screens: {
      base: '1400px'
    }
  }
}
export const darkMode = 'class'
