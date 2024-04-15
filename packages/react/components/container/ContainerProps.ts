import type { Fullwidth } from '../../objects/facets/Fullwidth'
import type { Layout } from '../../objects/facets/Layout'
import type { Paddingless } from '../../objects/facets/Paddingless'
import type { Position } from '../../objects/facets/Position'
import type { VerticalPaddingless } from '../../objects/facets/VerticalPaddingless'
import type { BackgroundProps } from '../../objects/atoms/Background'
import type { StickyPosition, StickyPositionValues } from '../../objects/facets/Sticky'

/**
 * Container Interface
 */
export interface ContainerProps extends Layout, Fullwidth, Paddingless, VerticalPaddingless, Position, BackgroundProps {
  children?: React.ReactNode
  fluid?: boolean
  className?: string
  centered?: boolean
  verticalCentered?: boolean
  medium?: boolean
  fullwidth?: boolean
  sticky?: StickyPosition | StickyPositionValues
  stickyOffSetTop?: number
  stickyOffSetBottom?: number
}
