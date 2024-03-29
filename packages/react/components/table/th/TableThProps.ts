import { Clickable } from '../../../objects'

export interface TableThProps extends Clickable {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
  className?: string
}
