import { Accessibility, Dev } from '@/objects'
import { Clickable } from '@/objects/facets/Clickable'
import { Invertable } from '@/objects/facets/Invertable'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Badge Interface
 */
export interface BadgeProps extends Clickable, Accessibility, Invertable, Dev, CommonProps {
  children?: React.ReactNode
  content?: string | number
  textContent?: string
  reversed?: boolean
}
