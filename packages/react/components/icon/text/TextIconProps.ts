import { IconPosition, IconPositionValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Stacked } from '@/objects/facets/Stacked'
import { Accessibility, AlignableProps } from '@/objects'

export interface TextIconProps extends Stacked, AlignableProps, Accessibility {
  color?: string
  content?: string | React.ReactNode
  name: IconName | IconNameValues
  size: number
  position?: IconPosition | IconPositionValues
  stretched?: string | React.ReactNode
}
