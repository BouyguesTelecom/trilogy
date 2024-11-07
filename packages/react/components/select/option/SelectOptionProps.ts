import { ClickEvent } from '@/events/OnClickEvent'
import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Select Option Interface
 */
export interface SelectOptionProps<T extends string | number = string> extends Accessibility, Dev, CommonProps {
  children?: string
  /** @deprecated use Select "selected" props instead */
  selected?: boolean
  label?: string
  value?: T
  disabled?: boolean
  onClick?: ClickEvent
  iconName?: IconName | IconNameValues
}
