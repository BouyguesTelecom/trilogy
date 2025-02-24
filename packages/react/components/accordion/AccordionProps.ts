/**
 * Accordion Interface
 */
import { type View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

export interface AccordionProps extends CommonProps {
  children: React.ReactNode
}

export type AccordionRef = HTMLDivElement
export type AccordionNativeRef = View
