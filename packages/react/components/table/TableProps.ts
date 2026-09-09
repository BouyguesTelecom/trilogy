import { View } from 'react-native'
import { Fullwidth } from "@/interfaces/Fullwidth";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export enum TableBorderEnum {
  ALL = 'all',
  INNER = 'inner',
  LINES = 'lines',
}

export interface TableProps extends Fullwidth, CommonProps, Dev {
  children: React.ReactNode
  border?: TableBorderEnum
  striped?: boolean
  compact?: boolean
}

export type TableRef = HTMLTableElement
export type TableNativeRef = View
