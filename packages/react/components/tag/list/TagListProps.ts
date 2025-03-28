import { View } from 'react-native'
import { Alignable, AlignableValues, Marginless } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Tag list Interface
 */
export interface TagListProps extends Marginless, CommonProps {
  align?: Alignable | AlignableValues
  children?: React.ReactNode
}

export type TagListRef = HTMLDivElement
export type TagListNativeRef = View
