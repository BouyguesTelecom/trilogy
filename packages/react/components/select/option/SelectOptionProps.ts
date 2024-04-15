import { ClickEvent } from '../../../events/OnClickEvent'
import { IconName, IconNameValues } from '../../icon/IconNameEnum'
import { Accessibility } from '../../../objects/facets/Accessibility'

/**
 * Select Option Interface
 */
export interface SelectOptionProps<T extends string | number = string> extends Accessibility {
  children?: string
  /** @deprecated use Select "selected" props instead */
  selected?: boolean
  label?: string
  value?: T
  className?: string
  id?: string
  disabled?: boolean
  onClick?: ClickEvent
  iconName?: IconName | IconNameValues
}
