'use client'
import { Input } from '@/app/components'
import React, { useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })

      if (response.ok) {
        alert('Wiadomość została wysłana.')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="grid grid-cols-1 gap-10 pt-4" onSubmit={handleSubmit}>
      <span className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Input type="text" label="Name" value={name} onChange={setName} />
        <Input type="email" label="Email" value={email} onChange={setEmail} />
      </span>
      <Input
        type="message"
        label="Message"
        value={message}
        onChange={setMessage}
      />
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
