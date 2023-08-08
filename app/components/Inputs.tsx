'use client'
import React, { useState } from 'react'
import { DefaultInput } from '../types'

export const Input = ({
  type,
  label,
  value,
  pattern,
  title,
  onChange
}: DefaultInput) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  if (type === 'message') {
    return (
      <span className="relative flex flex-col">
        <label
          htmlFor={label}
          className={`${
            isFocused || value
              ? '-translate-x-2 -translate-y-[35px] text-sm '
              : 'text-gray-500 '
          } pointer-events-none absolute left-3 top-[10px]  text-gray transition-all duration-300`}
        >
          {label}
        </label>
        <textarea
          aria-labelledby={label}
          id={label}
          name={label}
          className={`w-full rounded-lg border bg-white p-3 text-sm outline-none dark:border-active dark:bg-dark  dark:text-white  ${
            isFocused
              ? 'focus:ring-2 focus:ring-gray dark:focus:ring-active'
              : ''
          }`}
          required
          rows={4}
          value={value}
          onFocus={handleFocus}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
        />
      </span>
    )
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
      <input
        aria-labelledby={label}
        className={`w-full rounded-lg border bg-white p-3 text-sm outline-none dark:border-active dark:bg-dark dark:text-white  ${
          isFocused ? 'focus:ring-2 focus:ring-gray dark:focus:ring-active' : ''
        }`}
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
    </span>
  )
}
