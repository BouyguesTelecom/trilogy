import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Modal Footer Interface
 */
export interface ModalFooterProps extends CommonProps {
  children: React.ReactNode
}

export type ModalFooterRef = HTMLDivElement
export type ModalFooterNativeRef = View
