import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface PromptToolbarProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}

export type PromptToolbarRef = HTMLDivElement
export type PromptToolbarNativeRef = View
