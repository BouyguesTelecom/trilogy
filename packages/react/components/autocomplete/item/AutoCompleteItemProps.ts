import { Item } from '@/components/autocomplete/AutoCompleteProps'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface AutoCompleteItemProps<T extends string | Item<unknown> = string> extends CommonProps {
  children?: string | React.ReactNode
  suggestionSelected?: (value: T) => void
  key?: number
  active?: boolean
  testId?: string
  item: T
  onSelect?: () => void
}
