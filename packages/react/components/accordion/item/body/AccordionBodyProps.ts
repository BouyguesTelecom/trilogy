import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

/**
 * Accordion Body Interface
 */
export interface AccordionBodyProps extends Dev, CommonProps {
  children?: ReactNode
}

export type AccordionBodyRef = HTMLDivElement
export type AccordionBodyNativeRef = View
