'use client'
import React, { useState } from 'react'
import { DefaultInput } from '../types'

export const Input = ({
  type,
  label,
  valueName,
  pattern,
  title,
  error,
  setValue,
  ...props
}: DefaultInput) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputValue(e.target.value)
    if (setValue) {
      setValue(valueName, e.target.value)
    }
  }

  if (type === 'message') {
    return (
      <>
        <span className="relative flex flex-col">
          <label
            htmlFor={label}
            className={`${
              isFocused || inputValue
                ? '-translate-x-2 -translate-y-[35px] text-sm '
                : 'text-gray-500 '
            } pointer-events-none absolute left-3 top-[10px]  text-gray transition-all duration-300`}
          >
            {label}
          </label>
          <textarea
            {...props}
            aria-labelledby={label}
            id={label}
            name={label}
            className={`w-full rounded-lg border bg-white p-3 text-sm outline-none dark:border-active dark:bg-dark  dark:text-white  ${
              isFocused || inputValue
                ? 'focus:ring-2 focus:ring-gray dark:focus:ring-active'
                : ''
            }
          ${error ? 'ring-2 ring-red-500' : ''}
          `}
            required
            rows={4}
            value={inputValue}
            onFocus={handleFocus}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </span>
        <p className="text-sm">{error}</p>
      </>
    )
  }

  return (
    <div>
      <span className="relative flex flex-col">
        <label
          htmlFor={label}
          className={`${
            isFocused || inputValue
              ? '-translate-x-2 -translate-y-[40px] text-sm  '
              : 'text-gray-500 '
          } pointer-events-none absolute bottom-2 left-3 text-gray transition-all duration-300`}
        >
          {label}
        </label>
        <input
          {...props}
          aria-labelledby={label}
          className={`w-full rounded-lg border bg-white p-3 text-sm outline-none dark:border-active dark:bg-dark dark:text-white  ${
            isFocused
              ? 'focus:ring-2 focus:ring-gray dark:focus:ring-active'
              : ''
          }
        ${error ? 'ring-2 ring-red-500' : ''}
        `}
          required
          id={label}
          name={label}
          title={title}
          pattern={pattern}
          type={type}
          value={inputValue}
          onFocus={handleFocus}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      </span>
      <p className="text-sm">{error}</p>
    </div>
  )
}
