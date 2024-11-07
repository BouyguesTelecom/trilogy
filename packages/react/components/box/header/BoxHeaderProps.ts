/**
 * Box Header Interface
 */
import { Accessibility, AlignableProps, TrilogyColor, TrilogyColorValues } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface BoxHeaderProps extends AlignableProps, Accessibility, CommonProps {
  children?: React.ReactNode
  variant?: TrilogyColor | TrilogyColorValues
}
