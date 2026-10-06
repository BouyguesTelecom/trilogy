/**
 * Accordion Interface
 */
import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

export interface AccordionProps extends CommonProps, Dev {
  children: ReactNode
}

export type AccordionRef = HTMLDivElement
export type AccordionNativeRef = View
