import type {
  BackgroundProps,
  ChildrenWithNoText,
  Fullwidth,
  Layout,
  Paddingless,
  VerticalPaddingless,
} from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Section Interface
 */
export interface SectionProps
  extends Layout,
    Fullwidth,
    BackgroundProps,
    Paddingless,
    VerticalPaddingless,
    ChildrenWithNoText, CommonProps {
  skeleton?: boolean
}
