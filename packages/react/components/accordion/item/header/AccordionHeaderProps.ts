import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends CommonProps, Dev {
  children?: React.ReactNode
}

export type AccordionHeaderRef = HTMLSourceElement
export type AccordionHeaderNativeRef = View
