import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

export interface PromptProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  disabled?: boolean
  readOnly?: boolean
}

export type PromptRef = HTMLFormElement
export type PromptNativeRef = View

export enum PromptStatus {
  STREAMING_ON = 'streaming-on',
  STREAMING_OFF = 'streaming-off',
}
