import { Accessibility } from '../../../objects/facets/Accessibility'
import { Clickable } from '../../../objects/facets/Clickable'

export interface InfoBlockActionProps extends Clickable, Accessibility {
  children?: React.ReactNode
  className?: string
}
