import { InfoBlockStatus, InfoBlockStatusValues } from '../InfoBlockEnum'
import { IconName, IconNameValues } from '../../icon'

export interface InfoBlockHeaderProps {
  children?: string
  className?: string
  status?: InfoBlockStatus | InfoBlockStatusValues
  customIcon?: JSX.Element | IconName | IconNameValues
}
