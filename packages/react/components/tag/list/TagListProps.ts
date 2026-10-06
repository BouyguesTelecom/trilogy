import { View } from 'react-native'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Dev } from '@/objects/facets/Dev'
import { Marginless } from '@/objects/facets/Marginless'
import { CommonProps } from '@/objects/facets/CommonProps'
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
