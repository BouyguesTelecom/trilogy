export const checkCents = (text: string): string => {
  let result = text
  if (text.length === 1) {
    result += '0'
  }
  return result
}
