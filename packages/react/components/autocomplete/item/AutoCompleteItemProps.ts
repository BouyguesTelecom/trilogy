import { Item } from '@/components/autocomplete/AutoCompleteProps'
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

export interface AutoCompleteItemProps<T extends string | Item<unknown> = string> extends CommonProps {
  children?: string | ReactNode
  suggestionSelected?: (value: T) => void
  key?: number
  active?: boolean
  testId?: string
  item: T
  onSelect?: () => void
}
