'use client'
import { Input } from '@/app/components'
import React, { useState } from 'react'
import { z } from 'zod'

export const Form = () => {
  const schema = z.object({
    name: z
      .string()
      .min(2, { message: 'Name must have at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email format' }),
    message: z
      .string()
      .min(10, { message: 'Message must have at least 10 characters' })
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Tworzymy walidator
      schema.parse({
        name,
        email,
        message
      })

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
      if (error instanceof z.ZodError) {
        setErrors(error.formErrors.fieldErrors)
      }
      console.error(error)
    }
  }

  return (
    <form className="grid grid-cols-1 gap-10 pt-4" onSubmit={handleSubmit}>
      <span className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Input
          type="text"
          label="Name"
          value={name}
          onChange={setName}
          error={errors.name} // Dodaliśmy obsługę błędów dla pola 'name'
        />
        <Input
          type="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="example@email.co"
          label="E-mail"
          value={email}
          onChange={setEmail}
          error={errors.email} // Dodaliśmy obsługę błędów dla pola 'email'
        />
      </span>
      <Input
        type="message"
        label="Message"
        value={message}
        onChange={setMessage}
        error={errors.message} // Dodaliśmy obsługę błędów dla pola 'message'
      />
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="w-fit rounded-lg border border-dark px-6 py-2 transition duration-300 dark:border-active dark:text-white md:hover:bg-darkerWhite dark:md:hover:bg-lightDark"
        >
          Send
        </button>
      </div>
    </form>
  )
}
