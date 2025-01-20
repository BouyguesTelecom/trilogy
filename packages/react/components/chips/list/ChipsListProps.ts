/**
 * ChipsList Interface
 */
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface ChipsListProps extends CommonProps {
  children?: React.ReactNode
  multiple?: boolean
  scrollable?: boolean
}
