import { Clickable } from '@/objects/facets/Clickable'
import { BadgeColor, BadgeColorValues, BadgeTextDirection, BadgeTextDirectionValues } from './BadgeEnum'
import { Accessibility } from '@/objects'

/**
 * Badge Interface
 */
export interface BadgeProps extends Clickable, Accessibility {
  children?: React.ReactNode
  content?: string | number
  textContent?: string
  direction?: BadgeTextDirection | BadgeTextDirectionValues
  className?: string

  color?: BadgeColor | BadgeColorValues
}
