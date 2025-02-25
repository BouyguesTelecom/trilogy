import { type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { BoxItemSize, BoxItemSizeValues } from './BoxItemEnum'

export interface BoxItemProps extends CommonProps {
  children?: React.ReactNode
  size?: BoxItemSize | BoxItemSizeValues
}

export type BoxItemRef = HTMLDivElement
export type BoxItemNativeRef = View
