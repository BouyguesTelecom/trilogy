import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'
import { BackgroundColor, BackgroundColorValues, TextColor, TextColorValues } from '@/interfaces/colors'

export interface TableHeadProps extends CommonProps, Dev {
  children: ReactNode
  color?: TextColor | TextColorValues
  backgroundColor?: BackgroundColor | BackgroundColorValues
}

export type TableHeadRef = HTMLTableSectionElement
export type TableHeadNativeRef = View
