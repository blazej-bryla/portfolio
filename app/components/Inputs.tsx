'use client'
import React, { useState } from 'react'
import { DefaultInput } from '../types'

export const Input = ({
  type,
  label,
  value,
  pattern,
  title,
  error,
  onChange
}: DefaultInput) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <span className="relative flex flex-col">
      <label
        htmlFor={label}
        className={`${
          isFocused || value
            ? '-translate-x-2 -translate-y-[40px] text-sm  '
            : 'text-gray-500 '
        } pointer-events-none absolute bottom-2 left-3 text-gray transition-all duration-300`}
      >
        {label}
      </label>
      {type === 'message' ? (
        <textarea
          aria-labelledby={label}
          id={label}
          name={label}
          className={`w-full rounded-lg border bg-white p-3 text-sm outline-none ${
            isFocused ? 'focus:ring-2 focus:ring-gray' : ''
          } ${error ? 'focus:ring-red' : ''}`}
          required
          rows={4}
          value={value}
          onFocus={handleFocus}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <input
          aria-labelledby={label}
          className={`w-full rounded-lg border bg-white p-3 text-sm outline-none ${
            isFocused ? 'focus:ring-2 focus:ring-gray' : ''
          } ${error ? 'border-red-500' : ''}`}
          required
          id={label}
          name={label}
          title={title}
          pattern={pattern}
          type={type}
          value={value}
          onFocus={handleFocus}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
        />
      )}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </span>
  )
}
