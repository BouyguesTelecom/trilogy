import { IconName } from '@/components/icon'
import { TagVariant, TagVariantValues } from './TagEnum'
import { Accessibility } from '@/objects'

type TagClickEventHandler = React.MouseEvent<Element> | unknown

export interface TagClickEvent {
  (e: TagClickEventHandler): void
}

/**
 * Tag Interface
 */
export interface TagProps extends Accessibility {
  children?: React.ReactNode
  variant?: TagVariant | TagVariantValues
  /** @deprecated */
  deletable?: boolean
  /** @deprecated */
  onClick?: TagClickEvent
  inverted?: boolean
  className?: string
  iconName?: IconName
  small?: boolean
}
