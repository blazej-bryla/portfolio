/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#131417',
        lightDark: '#131432'
      },
      fontFamily: {
        borel: ['Borel', 'cursive']
      },
      colors: {
        active: '#9E86FF',
        gray: '#676D75'
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
