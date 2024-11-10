import { Accessibility, Dev, TrilogyColor, TrilogyColorValues } from '@/objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
