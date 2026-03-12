import { View } from 'react-native'
import { AlignableProps, Dev, Marginless } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Tag list Interface
 */
export interface TagListProps extends Marginless, CommonProps, Dev {
  align?: AlignableProps['align']
  children?: React.ReactNode
}

export type TagListRef = HTMLDivElement
export type TagListNativeRef = View
