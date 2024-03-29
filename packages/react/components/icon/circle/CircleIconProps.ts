import { IconPosition, IconPositionValues } from '../IconEnum'
import { IconName, IconNameValues } from '../IconNameEnum'
import { Stacked } from '../../../objects/facets/Stacked'
import { TrilogyColor, TrilogyColorValues } from '../../../objects'

export interface CircleIconProps extends Stacked {
  name: IconName | IconNameValues
  size: number
  circledWidth: number
  content?: string | React.ReactNode
  position?: IconPosition | IconPositionValues
  color?: string
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
