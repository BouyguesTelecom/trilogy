import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ChangeEvent } from 'react'

export interface PromptInputFileProps extends Accessibility, Dev, CommonProps {
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  readOnly?: boolean
}
export type PromptInputFileRef = HTMLButtonElement
export type PromptInputFileNativeRef = View
