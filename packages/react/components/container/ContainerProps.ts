import type {
  Fullwidth,
  Layout,
  Paddingless,
  Position,
  VerticalPaddingless,
  BackgroundProps,
  StickyPositionValues,
  StickyPosition,
} from '@/objects'

/**
 * Container Interface
 */

export interface ContainerProps {
  children?: React.ReactNode
  className?: string
  medium?: boolean
}
