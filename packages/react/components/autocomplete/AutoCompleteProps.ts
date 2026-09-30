import { BaseSyntheticEvent, FocusEventHandler, ReactNode } from 'react'
import { View } from 'react-native'
import {
  InputChangeEventNative,
  InputChangeEventWeb,
  InputClickEvent,
  InputProps,
} from '@/components/input/InputProps'
import { CommonProps } from "@/interfaces/CommonProps"

/**
 * AutoComplete Interface
 */
export interface AutoCompletePropsWeb<T = string> extends InputProps, CommonProps {
  children?: (item: T) => ReactNode
  defaultValue?: string
  value?: string
  data: T[]
  classNameMenu?: string
  absoluteMenu?: boolean
  fullwidthMenu?: boolean
  matching?: (data: T[], value: string) => T[]
  onChange?: (event: InputChangeEventWeb) => void
  onItemSelected?: (event: ItemSelectedEvent<T | null>) => void
  displayMenu?: boolean
  onIconClick?: (event: InputClickEvent) => void
  getSuggestions?: (search: string) => Promise<T[]>
  debounceSuggestionsTimeout?: number
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export interface AutoCompletePropsNative<T = string> extends InputProps {
  children?: (item: T) => ReactNode
  defaultValue?: string
  value?: string
  data: T[]
  classNameMenu?: string
  absoluteMenu?: boolean
  fullwidthMenu?: boolean
  matching?: (data: T[], value: string) => T[]
  onChange?: (event: InputChangeEventNative) => void
  onItemSelected?: (event: ItemSelectedEvent<T | null>) => void
  displayMenu?: boolean
  onIconClick?: (event: InputClickEvent) => void
  getSuggestions?: (search: string) => Promise<T[]>
  debounceSuggestionsTimeout?: number
  onFocus?: (event: BaseSyntheticEvent) => void
  onBlur?: (event: unknown) => void
}

export interface Item<T = string> {
  label: string
  data: T
}

export interface ItemSelectedEvent<T> {
  value: T
  index: number
}

export type AutocompleteRef = HTMLInputElement
export type AutocompleteNativeRef = View
