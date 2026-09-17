import { TrilogyColor } from "@/interfaces/Color";
import { CommonProps } from "@/interfaces/CommonProps";

export interface ProgressRadialItemProps extends CommonProps {
  children?: React.ReactNode
  percent: number
  color: 'secondary' | 'warning' | 'empty' | 'tertiary' | TrilogyColor
}
