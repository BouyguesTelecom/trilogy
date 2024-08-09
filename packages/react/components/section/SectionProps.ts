import type {
  BackgroundProps,
  Fullwidth,
  Layout,
  Paddingless,
  VerticalPaddingless,
  ChildrenWithNoText,
} from '@/objects'

/**
 * Section Interface
 */
export interface SectionProps
  extends Layout,
    Fullwidth,
    BackgroundProps,
    Paddingless,
    VerticalPaddingless,
    ChildrenWithNoText {
  className?: string
  skeleton?: boolean
}
