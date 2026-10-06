import { Dev } from '@/objects'
import { View } from 'react-native'
import { CommonProps } from '../../../../objects/facets/CommonProps'
import { ReactNode } from 'react'

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Dev, CommonProps {
  children?: ReactNode
}

export type AccordionBodyRef = HTMLDivElement
export type AccordionBodyNativeRef = View
