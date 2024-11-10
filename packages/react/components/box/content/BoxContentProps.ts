import { Accessibility, Dev } from '../../../objects'
import { BackgroundProps } from '../../../objects/atoms/Background'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}
