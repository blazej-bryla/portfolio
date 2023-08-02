/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        borel: ['Borel', 'cursive']
      },
      colors: {
        active: '#9E86FF',
        gray: '#676D75',
        dark: '#131417',
        lightDark: '#1a1c4d'
      },
      maxWidth: {
        base: '1400px'
      },
      screens: {
        base: '1400px'
      }
    }
  },
  darkMode: 'class'
}
