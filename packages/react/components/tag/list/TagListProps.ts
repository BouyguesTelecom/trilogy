import { View } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable";
import { Dev } from "@/interfaces/Dev";
import { Marginless } from "@/interfaces/Marginless";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Tag list Interface
 */
export interface TagListProps extends Marginless, CommonProps, Dev {
  align?: AlignableProps['align']
  children?: React.ReactNode
}

export type TagListRef = HTMLDivElement
export type TagListNativeRef = View
