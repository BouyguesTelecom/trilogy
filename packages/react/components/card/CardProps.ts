import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility, Clickable, Fullheight, Link } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Link, Accessibility, CommonProps {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  reversed?: boolean
  active?: boolean
}
