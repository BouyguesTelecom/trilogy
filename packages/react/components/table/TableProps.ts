import { Fullwidth } from '@/objects/facets/Fullwidth'
import { CommonProps } from '@/objects/facets/CommonProps'

export enum TableBorderEnum {
  ALL = 'all',
  INNER = 'inner',
  LINES = 'lines',
}

export interface TableProps extends Fullwidth, CommonProps {
  children: React.ReactNode
  border?: TableBorderEnum
  striped?: boolean
  compact?: boolean
}
