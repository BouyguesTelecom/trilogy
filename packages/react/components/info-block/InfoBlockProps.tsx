import { Accessibility, Clickable } from '../../objects'

export interface InfoBlockProps extends Clickable, Accessibility {
  children?: React.ReactNode
  boxed?: boolean
  className?: string
}
