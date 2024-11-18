import { BackgroundProps } from '@/objects/atoms/Background'
import { ChildrenWithNoText } from '@/objects/facets/ChildrenWithNoText'
import { Fullwidth } from '@/objects/facets/Fullwidth'
import { Layout } from '@/objects/facets/Layout'
import { Paddingless } from '@/objects/facets/Paddingless'
import { VerticalPaddingless } from '@/objects/facets/VerticalPaddingless'
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
