import type { BackgroundProps, ChildrenWithNoText, Paddingless } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Section Interface
 */
export interface SectionProps extends BackgroundProps, ChildrenWithNoText, CommonProps {
  skeleton?: boolean
}
