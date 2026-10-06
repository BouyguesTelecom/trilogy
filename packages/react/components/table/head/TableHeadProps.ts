import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'

export interface TableHeadProps extends CommonProps, Dev {
  children: ReactNode
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type TableHeadRef = HTMLTableSectionElement
export type TableHeadNativeRef = View
