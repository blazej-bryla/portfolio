import { FieldError, UseFormSetValue } from 'react-hook-form'
import { ContactType } from '.'

export type DefaultInput = {
  type: 'text' | 'email' | 'message'
  label: string
  valueName: 'email' | 'message' | 'name'
  pattern?: string
  title?: string
  error: FieldError['message']
  setValue: UseFormSetValue<ContactType>
}
