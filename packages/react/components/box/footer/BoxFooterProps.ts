import { Accessibility } from '@/objects/facets/Accessibility'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { Dev } from '@/objects/facets/Dev'
import { type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type BoxFooterRef = HTMLDivElement
export type BoxFooterNativeRef = View
