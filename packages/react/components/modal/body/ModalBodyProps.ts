import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Modal Footer Interface
 */
export interface ModalBodyProps extends CommonProps {
  children: React.ReactNode
}

export type ModalBodyRef = HTMLDivElement
export type ModalBodyNativeRef = View
