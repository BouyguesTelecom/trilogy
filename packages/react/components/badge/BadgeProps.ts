import { Clickable } from '@/objects/facets/Clickable'
import { BadgeColor, BadgeColorValues } from './BadgeEnum'
import { Accessibility } from '@/objects'

/**
 * Badge Interface
 */
export interface BadgeProps extends Clickable, Accessibility {
  children?: React.ReactNode
  content?: string | number
  textContent?: string
  reversed?:boolean
  className?: string
}
