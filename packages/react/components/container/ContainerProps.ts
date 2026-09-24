import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

export interface ContainerProps extends CommonProps, Dev {
  children?: React.ReactNode
  medium?: boolean
  size?: ContainerSizes | `${ContainerSizes}`
}

export type ContainerRef = HTMLDivElement
export type ContainerNativeRef = View

export enum ContainerSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
