import { IconStatus, IconStatusPosition, IconStatusPositionValues, IconStatusValues } from '../IconEnum'
import { IconName, IconNameValues } from '../IconNameEnum'

export interface StatusIconProps {
  color?: string
  name: IconName | IconNameValues
  size: number
  status?: IconStatus | IconStatusValues
  statusPosition?: IconStatusPosition | IconStatusPositionValues
  stretched?: string | React.ReactNode
}
