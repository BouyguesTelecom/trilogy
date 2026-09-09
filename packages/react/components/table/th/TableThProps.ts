import { View } from 'react-native'
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

export interface TableThProps extends Clickable, CommonProps, Dev {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
}

export type TableThRef = HTMLTableCellElement
export type TableThNativeRef = View
