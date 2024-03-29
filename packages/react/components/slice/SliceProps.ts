import { Accessibility, Clickable } from '../../objects'

export interface SliceProps extends Clickable, Accessibility {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  longCta?: boolean
  selectable?: boolean
}
