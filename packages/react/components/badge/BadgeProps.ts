import { BadgePositionEnum, BadgePositionValues } from '@/components/badge/BadgeEnum'
import { View } from 'react-native'
import { Accessibility, Dev, StatusState, StatusStateValues, VariantState } from '../../objects'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Invertable } from '../../objects/facets/Invertable'

export interface BadgeProps extends Clickable, Accessibility, Invertable, Dev, CommonProps {
  children?: React.ReactNode
  label?: string | number
  position?: BadgePositionEnum | BadgePositionValues
  status?: StatusState | StatusStateValues
  variant?: BadgeVariantType
}

export type BadgeRef = HTMLSpanElement
export type BadgeNativeRef = View
export type BadgeVariantType = keyof typeof BadgeVariant

export const BadgeVariant = {
  ...StatusState,
  ...VariantState,
}
