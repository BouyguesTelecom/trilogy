import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Rows Interface
 */
export interface RowProps extends CommonProps, Dev {
  children?: React.ReactNode
  narrow?: boolean
}

export type RowRef = HTMLDivElement
export type RowNativeRef = View
