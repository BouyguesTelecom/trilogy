import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Modal Footer Interface
 */
export interface ModalFooterProps extends CommonProps, Dev {
  children: React.ReactNode
}

export type ModalFooterRef = HTMLDivElement
export type ModalFooterNativeRef = View
