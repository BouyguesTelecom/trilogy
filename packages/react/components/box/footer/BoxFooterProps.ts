import { Accessibility } from '@/objects/facets/Accessibility'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { ReactNode } from 'react'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type BoxFooterRef = HTMLDivElement
export type BoxFooterNativeRef = View
