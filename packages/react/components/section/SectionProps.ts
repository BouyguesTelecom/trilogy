import type { BackgroundProps, ChildrenWithNoText } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

/**
 * Section Interface
 */
export interface SectionProps extends BackgroundProps, ChildrenWithNoText, CommonProps {
  skeleton?: boolean
  style?: Styles
}
