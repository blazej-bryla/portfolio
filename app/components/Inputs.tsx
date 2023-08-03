'use client'

import { DefaultInput } from '@/app/types'
import React, { ChangeEvent, useState } from 'react'

export const Input = ({ type, label }: DefaultInput) => {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false)
    }
  }
  if (type === 'message') {
    return (
      <span className="relative flex flex-col">
        <label
          className={`${
            isFocused || inputValue
              ? '-translate-x-2 -translate-y-[35px] text-sm '
              : 'text-gray-500 '
          } pointer-events-none absolute left-3 top-[10px]  text-gray transition-all duration-300`}
        >
          {label}
        </label>
        <textarea
          className={`dark:bordedr-0 block w-full rounded-lg border border-gray p-3 text-sm outline-none dark:bg-lightDark dark:text-white  ${
            isFocused ? 'focus:ring-2 focus:ring-active' : ''
          }`}
          rows={4}
          value={inputValue}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </span>
    )
  }

  return (
    <span className="relative flex flex-col">
      <label
        className={`${
          isFocused || inputValue
            ? '-translate-x-2 -translate-y-[40px] text-sm  '
            : 'text-gray-500 '
        } pointer-events-none absolute bottom-2 left-3 text-gray transition-all duration-300`}
      >
        {label}
      </label>
      <input
        className={`block w-full rounded-lg border border-gray p-3 text-sm outline-none dark:border-0 dark:bg-lightDark dark:text-white  ${
          isFocused ? 'focus:ring-2 focus:ring-active' : ''
        }`}
        type={type}
        value={inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </span>
  )
}
