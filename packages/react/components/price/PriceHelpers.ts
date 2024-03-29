export const checkCents = (text: string): string => {
  let result = text
  if (text === '') return '00'
  if (text.length === 1) {
    result += '0'
  }
  return result
}
