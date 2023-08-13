import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required'
    })
    .min(3),
  email: z
    .string({
      required_error: 'E-mail is required'
    })
    .email({ message: 'Invalid e-mail adress' }),
  message: z
    .string({
      required_error: 'Message is required'
    })
    .min(10, { message: 'Must be 10 or more characters long' })
})

export type ContactType = z.infer<typeof contactSchema>
