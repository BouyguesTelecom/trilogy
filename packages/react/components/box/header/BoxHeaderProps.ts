/**
 * Box Header Interface
 */
import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'
import { View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

export interface BoxHeaderProps extends AlignableProps, Accessibility, CommonProps, Dev {
  children?: ReactNode
  variant?: BackgroundColor | BackgroundColorValues
}

export type BoxHeaderRef = HTMLDivElement
export type BoxHeaderNativeRef = View
