/**
 * Box Header Interface
 */
import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface BoxHeaderProps extends AlignableProps, Accessibility, CommonProps {
  children?: React.ReactNode
  variant?: TrilogyColor | TrilogyColorValues
}

export type BoxHeaderRef = HTMLDivElement
export type BoxHeaderNativeRef = View
