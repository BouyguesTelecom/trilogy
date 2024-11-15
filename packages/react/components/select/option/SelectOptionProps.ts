import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'

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
