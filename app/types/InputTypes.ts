export type DefaultInput = {
  type: 'text' | 'email' | 'message'
  label: string
  value: string
  onChange: (value: string) => void
}
