import { TrilogyColor } from "@/interfaces/Color"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

export interface ProgressRadialItemProps extends CommonProps {
  children?: ReactNode
  percent: number
  color: 'secondary' | 'warning' | 'empty' | 'tertiary' | TrilogyColor
}
