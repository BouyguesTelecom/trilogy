import { IconStatus, IconStatusPosition, IconStatusPositionValues, IconStatusValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility } from '@/objects'

export interface StatusIconProps extends Accessibility {
  color?: string
  name: IconName | IconNameValues
  size: number
  status?: IconStatus | IconStatusValues
  statusPosition?: IconStatusPosition | IconStatusPositionValues
  stretched?: string | React.ReactNode
}
