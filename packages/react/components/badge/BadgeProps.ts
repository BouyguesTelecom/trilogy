import { Accessibility, Dev } from '@/objects'
import { Clickable } from '@/objects/facets/Clickable'
import { Invertable } from '@/objects/facets/Invertable'

/**
 * Badge Interface
 */
export interface BadgeProps extends Clickable, Accessibility, Invertable, Dev {
  children?: React.ReactNode
  content?: string | number
  textContent?: string
  reversed?: boolean
  className?: string
}
