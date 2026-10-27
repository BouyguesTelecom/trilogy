import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'
import { BackgroundColor, BackgroundColorValues, TextColor, TextColorValues } from '@/interfaces/colors'

export interface TableBodyProps extends CommonProps, Dev {
  children: ReactNode
  color?: TextColor | TextColorValues
  backgroundColor?: BackgroundColor | BackgroundColorValues
}

export type TableBodyRef = HTMLTableSectionElement
export type TableBodyNativeRef = View
