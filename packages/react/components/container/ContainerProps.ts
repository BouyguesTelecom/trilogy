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

export interface ContainerProps extends Layout, Fullwidth, Paddingless, VerticalPaddingless, Position, BackgroundProps {
  children?: React.ReactNode
  className?: string
  centered?: boolean
  verticalCentered?: boolean
  medium?: boolean
  fullwidth?: boolean
  sticky?: StickyPosition | StickyPositionValues
  stickyOffSetTop?: number
  stickyOffSetBottom?: number
}
