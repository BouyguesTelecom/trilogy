import { Dev } from '@/objects/index'
import { View } from 'react-native'
import { CommonProps } from '../../../../objects/facets/CommonProps'

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Dev, CommonProps {
  children?: React.ReactNode
}

export type AccordionBodyRef = HTMLDivElement
export type AccordionBodyNativeRef = View
