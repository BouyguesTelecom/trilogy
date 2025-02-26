import { type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Modal Footer Interface
 */
export interface ModalFooterProps extends CommonProps {
  children: React.ReactNode
}

export type ModalFooterRef = HTMLDivElement
export type ModalFooterNativeRef = View
