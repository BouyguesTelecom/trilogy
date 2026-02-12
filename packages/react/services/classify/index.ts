export function getStatusBackground(status: string, defaultBg: string): string {
  if (!status && !defaultBg) {
    return ''
  }

  if (defaultBg) {
    return has(`bg-${defaultBg}`)
  }

  return has(`bg-${status.toLowerCase()}`)
}

export function classify(prefix: Lowercase<string>): (classname: string) => string {
  return (classname: string) => (classname !== '' ? `${prefix}-${classname.toLowerCase()}` : '')
}

export const is = classify('is')
export const has = classify('has')
