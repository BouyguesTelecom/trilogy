import { TrilogyColorValues, TrilogyColor, Accessibility } from '@/objects'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility {
  children?: React.ReactNode
  className?: string
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
