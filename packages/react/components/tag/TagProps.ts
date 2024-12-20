import { IconName } from '../../components/icon'
import { Accessibility, Dev } from '../../objects'
import { TagVariant, TagVariantValues } from './TagEnum'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Tag Interface
 */
export interface TagProps extends Accessibility, Dev, CommonProps {
  label: string
  variant?: TagVariant | TagVariantValues
  inverted?: boolean
  iconName?: IconName
  small?: boolean
}
