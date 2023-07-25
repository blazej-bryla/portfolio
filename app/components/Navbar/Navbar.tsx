'use client'
import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <nav className="bg-gray-800 py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-white">Logo</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Strona 1
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Strona 2
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                >
                  Strona 3
                </Link>
              </div>
            </div>

            <div className="-mr-2 mt-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden ${
          isMenuOpen ? 'flex' : 'hidden'
        } h-screen flex-col items-center justify-center bg-gray-800`}
      >
        <Link href="#" className="p-4 text-white hover:bg-gray-700">
          Strona 1
        </Link>
        <Link href="#" className="p-4 text-white hover:bg-gray-700">
          Strona 2
        </Link>
        <Link href="#" className="p-4 text-white hover:bg-gray-700">
          Strona 3
        </Link>
      </div>
    </div>
  )
}
