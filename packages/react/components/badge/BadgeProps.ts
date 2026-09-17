import { BadgePositionEnum, BadgePositionValues } from '@/components/badge/BadgeEnum'
import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { StatusState, StatusStateValues } from "@/interfaces/Status";
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Invertable } from "@/interfaces/Invertable";

export interface BadgeProps extends Clickable, Accessibility, Invertable, Dev, CommonProps {
  children?: React.ReactNode
  label?: string | number
  position?: BadgePositionEnum | BadgePositionValues
  status?: StatusState | StatusStateValues
  variant?: BadgeVariant | BadgeVariantValues
}

export type BadgeRef = HTMLSpanElement
export type BadgeNativeRef = View

export enum BadgeVariant {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  MAIN = 'MAIN',
  ACCENT = 'ACCENT',
}

export type BadgeVariantValues = `${BadgeVariant}`
