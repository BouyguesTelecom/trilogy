// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends any[]>(func: (...params: T) => void, wait: number) => {
  let timeout: NodeJS.Timeout | null
  return async (...rest: T) => {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context: ThisParameterType<typeof self> = this
    const later = function () {
      timeout = null
      func.apply(context, rest)
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}
