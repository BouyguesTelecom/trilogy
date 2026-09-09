/**
 * Accordion Interface
 */
import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface AccordionProps extends CommonProps, Dev {
  children: React.ReactNode
}

export type AccordionRef = HTMLDivElement
export type AccordionNativeRef = View
