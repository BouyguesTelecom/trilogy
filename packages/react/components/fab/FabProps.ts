import { IconName, IconNameValues } from '@/components/icon'
import { DimensionValue, type TouchableOpacity } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Fab Interface
 */
export interface FabProps extends Accessibility, Clickable, Dev, CommonProps {
  children: string | React.ReactNode
  extended?: boolean
  iconName: IconName | IconNameValues
  fixed?: boolean
  top?: DimensionValue | number | undefined
  bottom?: DimensionValue | number | undefined
  left?: DimensionValue | number | undefined
  right?: DimensionValue | number | undefined
  disabled?: boolean
}

export type FabRef = HTMLButtonElement
export type FabNativeRef = TouchableOpacity
