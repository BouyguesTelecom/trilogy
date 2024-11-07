/**
 * Container Interface
 */
import { CommonProps } from '@/objects/facets/CommonProps'

export interface ContainerProps extends CommonProps {
  children?: React.ReactNode
  medium?: boolean
}
