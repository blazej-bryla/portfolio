export const validateEmail = ({ value }: { value: string }) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true
  }
  return false
}
