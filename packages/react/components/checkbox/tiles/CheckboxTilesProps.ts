import { View } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable";
import { CommonProps } from "@/interfaces/CommonProps";
import { GridItemSize, GridSize } from "@/interfaces/Grid";
import { Dev } from "@/interfaces/Dev";

export interface CheckboxTilesProps extends AlignableProps, CommonProps, Dev {
  children: React.ReactNode
  accessibilityLabelledBy?: string
  numberCols?: GridSize | GridItemSize
}

export type CheckboxTilesRef = HTMLDivElement
export type CheckboxTilesNativeRef = View
