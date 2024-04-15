import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'

export interface SliceProps extends Clickable, Accessibility {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  longCta?: boolean
  selectable?: boolean
}
