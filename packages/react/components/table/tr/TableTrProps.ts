import { View } from 'react-native'
import { Clickable } from "@/interfaces/Clickable"
import { Dev } from "@/interfaces/Dev"
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

export interface TableTrPropsWeb extends Clickable, Dev {
  children: ReactNode
  expandable?: boolean
  expanded?: boolean | ReactNode | string
  className?: string
  expansion?: boolean
  color?: TrilogyColor | TrilogyColorValues
}

export type TableTrPropsNative = TableTrPropsWeb

export type TableTrProps = TableTrPropsWeb & CommonProps

export type TableTrRef = HTMLTableRowElement
export type TableTrNativeRef = View
