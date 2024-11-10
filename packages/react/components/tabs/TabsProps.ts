import { Accessibility, AlignableProps, Clickable, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Tabs Interface
 */
export interface TabsProps extends AlignableProps, Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode | string
  activeIndex?: number
  fullwidth?: boolean
  inverted?: boolean
}
