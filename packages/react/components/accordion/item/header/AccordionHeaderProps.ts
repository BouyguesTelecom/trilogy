import { View } from 'react-native'
import { CommonProps } from '../../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends CommonProps, Dev {
  children?: React.ReactNode
}

export type AccordionHeaderRef = HTMLSourceElement
export type AccordionHeaderNativeRef = View
