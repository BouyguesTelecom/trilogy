import { View } from 'react-native'
import { AlignableProps, Dev, Marginless } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { ReactNode } from 'react'

/**
 * Tag list Interface
 */
export interface TagListProps extends Marginless, CommonProps, Dev {
  align?: AlignableProps['align']
  children?: ReactNode
}

export type TagListRef = HTMLDivElement
export type TagListNativeRef = View
