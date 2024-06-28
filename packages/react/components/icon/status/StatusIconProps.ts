import { IconStatus, IconStatusPosition, IconStatusPositionValues, IconStatusValues } from '@/components/icon/IconEnum'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'

export interface StatusIconProps {
  color?: string
  name: IconName | IconNameValues
  size: number
  status?: IconStatus | IconStatusValues
  statusPosition?: IconStatusPosition | IconStatusPositionValues
  stretched?: string | React.ReactNode
}
