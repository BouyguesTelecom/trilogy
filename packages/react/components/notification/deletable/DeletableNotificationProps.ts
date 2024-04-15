import { ClickEvent } from '../../../events/OnClickEvent'
import { AlertProps } from '../../../objects/facets/Alert'
import { IconName, IconNameValues } from '../../icon/IconNameEnum'

/**
 * Deletable Notification Interface
 */
export interface DeletableNotificationProps extends AlertProps {
  iconName?: IconName | IconNameValues
  title?: string | React.ReactNode
  deletable: ClickEvent | boolean
  read?: boolean
}
