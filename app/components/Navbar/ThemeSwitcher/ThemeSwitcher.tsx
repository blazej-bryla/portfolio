'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg border border-gray bg-white p-2 dark:border-active dark:bg-dark"
    >
      {theme === 'dark' ? (
        <Icon
          icon="ph:moon"
          width="25"
          height="25"
          className="cursor-pointer text-white"
        />
      ) : (
        <Icon
          icon="ph:sun"
          width="25"
          height="25"
          className="cursor-pointer text-dark"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}
