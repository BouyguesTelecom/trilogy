import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface PromptMicrophoneProps extends Accessibility, Dev, CommonProps, Clickable {
  disabled?: boolean
  readOnly?: boolean
  isListening?: boolean
}

export type PromptMicrophoneRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptMicrophoneNativeRef = View
