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
    <div>
      {theme === 'dark' ? (
        <Icon
          icon="ph:moon"
          width="16"
          height="16"
          className="cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <Icon
          icon="ph:sun"
          width="16"
          height="16"
          className="cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}
