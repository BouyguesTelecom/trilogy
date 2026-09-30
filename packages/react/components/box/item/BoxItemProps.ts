import { View } from 'react-native'
import { BoxItemSize, BoxItemSizeValues } from '@/components/box/item/BoxItemEnum'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

export interface BoxItemProps extends CommonProps, Dev {
  children?: ReactNode
  size?: BoxItemSize | BoxItemSizeValues
}

export type BoxItemRef = HTMLDivElement
export type BoxItemNativeRef = View
