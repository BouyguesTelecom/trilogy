import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

export interface ContainerProps extends CommonProps, Dev {
  children?: ReactNode
  medium?: boolean
}

export type ContainerRef = HTMLDivElement
export type ContainerNativeRef = View
