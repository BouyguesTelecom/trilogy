import { IconStatus, IconStatusPosition, IconStatusPositionValues, IconStatusValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility, Dev } from '@/objects'

export interface StatusIconProps extends Accessibility, Dev {
  color?: string
  name: IconName | IconNameValues
  size: number
  status?: IconStatus | IconStatusValues
  statusPosition?: IconStatusPosition | IconStatusPositionValues
  stretched?: string | React.ReactNode
}
