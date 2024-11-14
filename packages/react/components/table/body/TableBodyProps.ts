import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'

export interface TableBodyProps {
  children: React.ReactNode
  className?: string
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
