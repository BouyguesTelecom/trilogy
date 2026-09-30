import { View } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable"
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { GridItemSize, GridSize } from "@/interfaces/Grid"
import { ReactNode } from 'react'

export interface RadioTilesProps extends AlignableProps, CommonProps, Dev {
  children: ReactNode
  accessibilityLabelledBy?: string
  numberCols?: GridSize | GridItemSize
}

export type RadioTilesRef = HTMLDivElement
export type RadioTilesNativeRef = View
