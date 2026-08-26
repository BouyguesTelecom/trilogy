import { ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface PromptFilesProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type PromptFilesRef = HTMLDivElement
export type PromptFilesNativeRef = ScrollView
