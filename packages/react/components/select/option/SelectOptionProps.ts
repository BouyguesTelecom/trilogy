import { IconName, IconNameValues } from '@/components/icon'
import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Select Option Interface
 */
export interface SelectOptionProps<T extends string | number = string> extends Accessibility, Dev, CommonProps {
  children?: string
  label?: string
  value?: T
  disabled?: boolean
  onClick?: ClickEvent
  iconName?: IconName | IconNameValues
}
