import { Clickable } from '@/objects'

export interface TableTdProps extends Clickable {
  children: React.ReactNode
  rowSpan?: number
  colSpan?: number
  className?: string
}
