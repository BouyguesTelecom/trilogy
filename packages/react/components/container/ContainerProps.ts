import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

export interface ContainerProps extends CommonProps, Dev {
  children?: React.ReactNode
  medium?: boolean
}

export type ContainerRef = HTMLDivElement
export type ContainerNativeRef = View
