import { Accessibility, Clickable, Fullheight, Dev, Loadable } from '../../objects'
import { BackgroundProps } from '../../objects/atoms/Background'
import { TrilogyColor, TrilogyColorValues } from '../../objects/facets/Color'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility, Dev, CommonProps, Loadable {
  children?: React.ReactNode
  href?: string
  highlighted?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  backgroundSrc?: string
  headerOffset?: boolean
  flat?: boolean
  active?: boolean
  inverted?: boolean
}
