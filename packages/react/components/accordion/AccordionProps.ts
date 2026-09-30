/**
 * Accordion Interface
 */
import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

export interface AccordionProps extends CommonProps, Dev {
  children: ReactNode
}

export type AccordionRef = HTMLDivElement
export type AccordionNativeRef = View
