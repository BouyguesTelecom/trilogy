import { View } from 'react-native'
import { Clickable } from "@/interfaces/Clickable"
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

export interface TableThProps extends Clickable, CommonProps, Dev {
  children: ReactNode
  rowSpan?: number
  colSpan?: number
}

export type TableThRef = HTMLTableCellElement
export type TableThNativeRef = View
