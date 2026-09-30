import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

export interface PromptToolbarProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type PromptToolbarRef = HTMLDivElement
export type PromptToolbarNativeRef = View
