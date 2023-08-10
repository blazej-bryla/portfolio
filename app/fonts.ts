import localFont from 'next/font/local'
import { Anek_Bangla } from 'next/font/google'

export const mainFont = Anek_Bangla({
  subsets: ['latin'],
  variable: '--font-anekBangla',
  display: 'swap'
})

export const cursiveFont = localFont({
  src: '../public/fonts/borel-regular.ttf',
  display: 'swap',
  variable: '--font-cursiveFont'
})
