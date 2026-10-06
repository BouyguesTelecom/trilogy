import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { BoxItemSize, BoxItemSizeValues } from './BoxItemEnum'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

export interface BoxItemProps extends CommonProps, Dev {
  children?: ReactNode
  size?: BoxItemSize | BoxItemSizeValues
}

export type BoxItemRef = HTMLDivElement
export type BoxItemNativeRef = View
