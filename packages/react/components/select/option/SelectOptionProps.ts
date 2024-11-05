import { ClickEvent } from '@/events/OnClickEvent'
import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility, Dev } from '@/objects'

/**
 * Select Option Interface
 */
export interface SelectOptionProps<T extends string | number = string> extends Accessibility, Dev {
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
