import { IconPosition, IconPositionValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility, Dev, TrilogyColor, TrilogyColorValues } from '@/objects'
import { Stacked } from '@/objects/facets/Stacked'

export interface CircleIconProps extends Stacked, Accessibility, Dev {
  name: IconName | IconNameValues
  size: number
  circledWidth: number
  content?: string | React.ReactNode
  position?: IconPosition | IconPositionValues
  color?: string
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
