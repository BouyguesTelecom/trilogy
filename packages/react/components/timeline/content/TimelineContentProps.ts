/**
 * Timeline Content Interface
 */
import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

export interface TimelineContentProps extends Dev {
  children?: ReactNode
  heading?: string
  content?: string
  linkTo?: string
  linkLabel?: string
}

/**
 * Timeline Content Web Interface
 */
export interface TimelineContentWebProps extends TimelineContentProps, CommonProps {}

export type TimelineContentRef = HTMLDivElement
export type TimelineContentNativeRef = View
