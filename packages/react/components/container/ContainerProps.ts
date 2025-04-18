import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

export interface ContainerProps extends CommonProps {
  children?: React.ReactNode
  medium?: boolean
}

export type ContainerRef = HTMLDivElement
export type ContainerNativeRef = View
