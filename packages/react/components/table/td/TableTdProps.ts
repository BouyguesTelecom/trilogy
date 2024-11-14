import { Clickable } from '@/objects/facets/Clickable'

export interface TableTdProps extends Clickable {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
  className?: string
}
