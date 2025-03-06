import { BadgePositionEnum, BadgePositionValues } from '@/components/badge/BadgeEnum'
import { View } from 'react-native'
import { Accessibility, Dev, StatusState, StatusStateValues } from '../../objects'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Invertable } from '../../objects/facets/Invertable'

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
