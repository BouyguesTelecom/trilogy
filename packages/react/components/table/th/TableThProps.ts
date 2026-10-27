import { View } from 'react-native'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'

export interface TableThProps extends Clickable, CommonProps, Dev {
  children: ReactNode
  rowSpan?: number
  colSpan?: number
}

export type TableThRef = HTMLTableCellElement
export type TableThNativeRef = View
