import { Marginless } from '../../../objects'

/**
 * Tag list Interface
 */
export interface TagListProps extends Marginless {
  centered?: boolean
  gapless?: boolean
  children?: React.ReactNode
  className?: string
}
