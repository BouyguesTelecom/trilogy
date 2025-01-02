import { BadgePositionEnum, BadgePositionValues } from '@/components/badge/BadgeEnum'
import { Accessibility, Dev, StatusState, StatusStateValues, VariantProps } from '@/objects'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Invertable } from '@/objects/facets/Invertable'

/**
 * Badge Interface
 */
export interface BadgeProps extends Clickable, Accessibility, Invertable, Dev, CommonProps, VariantProps {
  children?: React.ReactNode
  label?: string | number
  position?: BadgePositionEnum | BadgePositionValues
  status?: StatusState | StatusStateValues
}
