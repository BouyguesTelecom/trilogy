import type {
  BackgroundProps,
  Fullwidth,
  Layout,
  Paddingless,
  Position,
  VerticalPaddingless,
  ChildrenWithNoText,
} from '../../objects'

/**
 * Section Interface
 */
export interface SectionProps
  extends Layout,
    Fullwidth,
    BackgroundProps,
    Position,
    Paddingless,
    VerticalPaddingless,
    ChildrenWithNoText {
  className?: string
  skeleton?: boolean
}
