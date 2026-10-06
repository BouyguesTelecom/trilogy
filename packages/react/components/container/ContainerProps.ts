import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { ReactNode } from 'react'

export interface ContainerProps extends CommonProps, Dev {
  children?: ReactNode
  /** @deprecated Use size="small" instead (same 960px max-width). */
  medium?: boolean
  size?: ContainerSizes | `${ContainerSizes}`
}

export type ContainerRef = HTMLDivElement
export type ContainerNativeRef = View

export enum ContainerSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
