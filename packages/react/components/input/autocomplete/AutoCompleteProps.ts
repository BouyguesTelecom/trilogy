import { InputChangeEvent, InputClickEvent, InputProps } from '@/components/input/InputProps'

/**
 * AutoComplete Interface
 */
export interface AutoCompleteProps<T = string> extends InputProps {
  children?: (item: T) => React.ReactNode
  defaultValue?: string
  value?: string
  data: T[]
  classNameMenu?: string
  absoluteMenu?: boolean
  fullwidthMenu?: boolean
  matching?: (data: T[], value: string) => T[]
  onChange?: (event: InputChangeEvent) => void
  onItemSelected?: (event: ItemSelectedEvent<T | null>) => void
  displayMenu?: boolean
  onIconClick?: (event: InputClickEvent) => void
  getSuggestions?: (search: string) => Promise<T[]>
  debounceSuggestionsTimeout?: number
}

export interface Item<T = string> {
  label: string
  data: T
}

export interface ItemSelectedEvent<T> {
  value: T
  index: number
}
