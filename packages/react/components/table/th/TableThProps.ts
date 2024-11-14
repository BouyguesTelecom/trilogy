import { Clickable } from '@/objects/facets/Clickable'

export interface TableThProps extends Clickable {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
  className?: string
}
