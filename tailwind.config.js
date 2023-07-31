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
      textColor: {
        gray: '#676D75'
      },
      fontFamily: {
        borel: ['Borel', 'cursive']
      },
      colors: {
        active: '#9E86FF'
      }
    }
  },
  darkMode: 'class'
}
