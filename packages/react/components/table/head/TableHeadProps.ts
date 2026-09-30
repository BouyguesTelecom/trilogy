import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev"
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

export interface TableHeadProps extends CommonProps, Dev {
  children: ReactNode
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type TableHeadRef = HTMLTableSectionElement
export type TableHeadNativeRef = View
