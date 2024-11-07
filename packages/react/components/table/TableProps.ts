import { Fullwidth } from '@/objects/facets/Fullwidth'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface TableProps extends Fullwidth, CommonProps {
  children: React.ReactNode
  bordered?: boolean
  comparative?: boolean
  striped?: boolean
  compact?: boolean
}
