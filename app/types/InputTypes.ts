export type DefaultInput = {
  type: 'text' | 'email' | 'message'
  label: string
  value: string
  pattern?: string
  title?: string
  error: string
  onChange: (value: string) => void
}
