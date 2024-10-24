import { Clickable } from '@/objects/facets/Clickable'
import { Invertable } from '@/objects/facets/Invertable'
import { BadgeColor, BadgeColorValues } from './BadgeEnum'
import { Accessibility } from '@/objects'

/**
 * Badge Interface
 */
export interface BadgeProps extends Clickable, Accessibility, Invertable {
  children?: React.ReactNode
  content?: string | number
  textContent?: string
  reversed?:boolean
  className?: string
}
