import { View } from 'react-native'
import { CommonProps } from '../../../../objects/facets/CommonProps'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends CommonProps {
  children?: React.ReactNode
}

export type AccordionHeaderRef = HTMLSourceElement
export type AccordionHeaderNativeRef = View
