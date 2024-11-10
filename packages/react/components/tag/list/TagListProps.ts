import { Marginless } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Tag list Interface
 */
export interface TagListProps extends Marginless, CommonProps {
  centered?: boolean
  gapless?: boolean
  children?: React.ReactNode
}
