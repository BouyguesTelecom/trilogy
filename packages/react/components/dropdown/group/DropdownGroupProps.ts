import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * DropdownGroup Interface
 */
export interface DropdownGroupProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  hideSeparator?: boolean
}

export type DropdownGroupRef = HTMLDivElement
export type DropdownGroupNativeRef = View
