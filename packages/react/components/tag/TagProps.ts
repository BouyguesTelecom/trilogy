import { IconName } from '@/components/icon'
import { Accessibility, Dev } from '@/objects'
import { TagVariant, TagVariantValues } from './TagEnum'

type TagClickEventHandler = React.MouseEvent<Element> | unknown

export interface TagClickEvent {
  (e: TagClickEventHandler): void
}

/**
 * Tag Interface
 */
export interface TagProps extends Accessibility, Dev {
  children?: React.ReactNode
  variant?: TagVariant | TagVariantValues
  inverted?: boolean
  className?: string
  iconName?: IconName
  small?: boolean
}
