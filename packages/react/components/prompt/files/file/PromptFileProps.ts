import { View } from 'react-native'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface PromptFileProps extends Accessibility, Dev, CommonProps {
  type?: 'image' | string
  name: string
  src: string | number
  onDelete?: ClickEvent
}

export type PromptFileRef = HTMLDivElement
export type PromptFileNativeRef = View
