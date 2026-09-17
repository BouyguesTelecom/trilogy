export function classify(prefix: Lowercase<string>): (classname: string) => string {
  return (classname: string) => (classname !== '' ? `${prefix}-${classname.toLowerCase()}` : '')
}

export const is = classify('is')
export const has = classify('has')
