import { Accessibility, Dev, TrilogyColor, TrilogyColorValues } from '@/objects/facets'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev {
  children?: React.ReactNode
  className?: string
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
