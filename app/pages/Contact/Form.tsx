import { Input } from '@/app/components/'
import React from 'react'

export const Form = () => {
  return (
    <form className="grid grid-cols-1 gap-10 pt-4">
      <span className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Input type="text" label="Name" />
        <Input type="email" label="Email" />
      </span>
      <Input type="message" label="Message" />
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="w-fit rounded-lg border border-gray px-6 py-2 transition duration-300 dark:border-active dark:text-active md:hover:bg-gray md:hover:text-white dark:md:hover:bg-active"
        >
          Send
        </button>
      </div>
    </form>
  )
}
