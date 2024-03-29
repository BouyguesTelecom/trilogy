import { Item } from "../AutoCompleteProps"

export interface AutoCompleteItemProps<T extends string | Item<unknown> = string> {
  children?: string | React.ReactNode
  suggestionSelected?: (value: T) => void
  key?: number
  active?:boolean
  testId?: string
  item: T
  onSelect?: () => void
}
