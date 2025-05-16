import { View } from 'react-native'
import { AlignableProps, Marginless } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Tag list Interface
 */
export interface TagListProps extends Omit<AlignableProps, 'verticalAlign'>, Marginless, CommonProps {
  children?: React.ReactNode
}

export type TagListRef = HTMLDivElement
export type TagListNativeRef = View
