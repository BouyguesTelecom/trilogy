import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";
import { TrilogyColor, TrilogyColorValues } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";

export interface TableBodyProps extends CommonProps, Dev {
  children: React.ReactNode
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}

export type TableBodyRef = HTMLTableSectionElement
export type TableBodyNativeRef = View
