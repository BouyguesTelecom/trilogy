import { Item } from '@/components/autocomplete/AutoCompleteProps'

export const getLabel = (data: string | Item<unknown>) => (typeof data === 'string' ? data : data['label'])
const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& signifie la chaîne correspondante entière
}

export const defaultMatching = <T extends string | Item<unknown>>(data: T[], value: string): T[] => {
  const escapedValue = escapeRegExp(value)
  const regex = new RegExp(`^${escapedValue}`, 'i')
  return data.filter((item) => regex.test(typeof item === 'string' ? item : item['label']))
}
