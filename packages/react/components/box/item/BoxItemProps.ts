import { View } from 'react-native'
import { BoxItemSize, BoxItemSizeValues } from '@/components/box/item/BoxItemEnum'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface BoxItemProps extends CommonProps, Dev {
  children?: React.ReactNode
  size?: BoxItemSize | BoxItemSizeValues
}

export type BoxItemRef = HTMLDivElement
export type BoxItemNativeRef = View
