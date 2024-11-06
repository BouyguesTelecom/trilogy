import { IconPosition, IconPositionValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility, AlignableProps, Dev } from '@/objects'
import { Stacked } from '@/objects/facets/Stacked'

export interface TextIconProps extends Stacked, AlignableProps, Accessibility, Dev {
  color?: string
  content?: string | React.ReactNode
  name: IconName | IconNameValues
  size: number
  position?: IconPosition | IconPositionValues
  stretched?: string | React.ReactNode
}
