export const getEnumNamesAndValues = (e: enumType): objectType[] =>
  getEnumNames(e).map((n) => ({ name: n, value: e[n] }))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEnumNames = (e: enumType): any[] => getEnumObjValues(e).filter((v) => typeof v === 'string') as string[]

export const getEnumValues = (e: enumType): number[] =>
  getEnumObjValues(e).filter((v) => typeof v === 'number') as number[]

const getEnumObjValues = (e: enumType): (number | string)[] => Object.keys(e).map((k) => e[k])

type objectType = {
  name: string
  value: string | number
}

type enumType = {
  [key: string]: string | number
}
