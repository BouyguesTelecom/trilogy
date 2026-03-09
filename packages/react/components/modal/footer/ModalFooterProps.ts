import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Modal Footer Interface
 */
export interface ModalFooterProps extends CommonProps, Dev {
  children: React.ReactNode
}

export type ModalFooterRef = HTMLDivElement
export type ModalFooterNativeRef = View
