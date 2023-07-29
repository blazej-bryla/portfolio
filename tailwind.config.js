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
        dark: '#131417'
      },
      textColor: {
        active: '#9E86FF',
        gray: '#676D75'
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif']
      }
    }
  },
  darkMode: 'class'
}
