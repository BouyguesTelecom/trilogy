import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

export interface PromptToolsProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type PromptToolsRef = HTMLDivElement
export type PromptToolsNativeRef = View
