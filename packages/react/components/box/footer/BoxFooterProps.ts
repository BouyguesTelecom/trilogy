import { Accessibility, Dev, TrilogyColor, TrilogyColorValues } from '@/objects'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev {
  children?: React.ReactNode
  className?: string
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
