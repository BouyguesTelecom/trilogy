import { IconName } from '@/components/icon/IconNameEnum'
import { TagVariant, TagVariantValues } from '@/components/tag/TagEnum'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'

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
