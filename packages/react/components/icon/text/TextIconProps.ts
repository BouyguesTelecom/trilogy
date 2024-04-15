import { IconPosition, IconPositionValues } from '../IconEnum'
import { IconName, IconNameValues } from '../IconNameEnum'
import { Stacked } from '../../../objects/facets/Stacked'
import { AlignableProps } from '../../../objects/facets/Alignable'

export interface TextIconProps extends Stacked, AlignableProps {
  color?: string
  content?: string | React.ReactNode
  name: IconName | IconNameValues
  size: number
  position?: IconPosition | IconPositionValues
  stretched?: string | React.ReactNode
}
