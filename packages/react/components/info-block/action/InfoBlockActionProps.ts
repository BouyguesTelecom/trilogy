import { Accessibility, Clickable } from '../../../objects'

export interface InfoBlockActionProps extends Clickable, Accessibility {
  children?: React.ReactNode
  className?: string
}
