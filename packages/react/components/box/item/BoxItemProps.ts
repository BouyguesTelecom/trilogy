import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { BoxItemSize, BoxItemSizeValues } from './BoxItemEnum'
import { Dev } from '@/objects/facets/Dev'

export interface BoxItemProps extends CommonProps, Dev {
  children?: React.ReactNode
  size?: BoxItemSize | BoxItemSizeValues
}

export type BoxItemRef = HTMLDivElement
export type BoxItemNativeRef = View
