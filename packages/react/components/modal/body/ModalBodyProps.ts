import { View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Modal Footer Interface
 */
export interface ModalBodyProps extends CommonProps, Dev {
  children: ReactNode
}

export type ModalBodyRef = HTMLDivElement
export type ModalBodyNativeRef = View
