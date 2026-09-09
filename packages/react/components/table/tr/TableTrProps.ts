import { View } from 'react-native'
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";

export interface TableTrPropsWeb extends Clickable, Dev {
  children: React.ReactNode
  expandable?: boolean
  expanded?: boolean | React.ReactNode | string
  className?: string
  expansion?: boolean
  color?: TrilogyColor | TrilogyColorValues
}

export type TableTrPropsNative = TableTrPropsWeb

export type TableTrProps = TableTrPropsWeb & CommonProps

export type TableTrRef = HTMLTableRowElement
export type TableTrNativeRef = View
