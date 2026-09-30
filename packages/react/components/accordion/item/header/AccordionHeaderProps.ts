import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps extends CommonProps, Dev {
  children?: ReactNode
}

export type AccordionHeaderRef = HTMLSourceElement
export type AccordionHeaderNativeRef = View
