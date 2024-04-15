import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'

export interface InfoBlockProps extends Clickable, Accessibility {
  children?: React.ReactNode
  boxed?: boolean
  className?: string
}
