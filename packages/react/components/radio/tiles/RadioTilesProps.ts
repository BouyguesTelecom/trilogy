import { type View } from 'react-native'
import { AlignableProps } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Columns Item Interface
 */
export interface RadioTilesProps extends AlignableProps, CommonProps {
  children: React.ReactNode
}

export type RadioTilesRef = HTMLDivElement
export type RadioTilesNativeRef = View
