// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEnumNames = (e: enumType): any[] => getEnumObjValues(e).filter((v) => typeof v === 'string') as string[]

const getEnumObjValues = (e: enumType): (number | string)[] => Object.keys(e).map((k) => e[k])

type enumType = {
  [key: string]: string | number
}
