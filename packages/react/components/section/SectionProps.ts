import type { BackgroundProps } from '../../objects/atoms/Background'
import type { Fullwidth } from '../../objects/facets/Fullwidth'
import type { Layout } from '../../objects/facets/Layout'
import type { Paddingless } from '../../objects/facets/Paddingless'
import type { Position } from '../../objects/facets/Position'
import type { VerticalPaddingless } from '../../objects/facets/VerticalPaddingless'
import type { ChildrenWithNoText } from '../../objects/facets/ChildrenWithNoText'

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
  backgroundSrc?: string
}
