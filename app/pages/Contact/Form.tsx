'use client'
import { Input } from '@/app/components'
import { ContactType } from '@/app/types'
import { contactSchema } from '@/app/types/schema/form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = async (data: ContactType) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Email was sent!')
      } else {
        alert('Email sending failed')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <form
      className="grid grid-cols-1 gap-10 pt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Input
          valueName="name"
          type="text"
          label="Name"
          error={errors.name?.message}
          {...register('name')}
          setValue={setValue}
        />
        <Input
          valueName="email"
          title="example@email.co"
          type="email"
          label="E-mail"
          error={errors.email?.message}
          {...register('email')}
          setValue={setValue}
        />
      </span>
      <Input
        valueName="message"
        error={errors.message?.message}
        type="message"
        label="Message"
        {...register('message')}
        setValue={setValue}
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
