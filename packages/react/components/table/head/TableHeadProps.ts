import { TrilogyColor, TrilogyColorValues } from '@/objects'

export interface TableHeadProps {
  children: React.ReactNode
  className?: string
  color?: TrilogyColor | TrilogyColorValues
  backgroundColor?: TrilogyColor | TrilogyColorValues
}
