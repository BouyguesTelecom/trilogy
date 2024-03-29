import { Clickable, VariantProps } from '../../objects/facets'
import { AlignableProps } from '../../objects/facets/Alignable'
import { JustifiableProps } from '../../objects/facets/Justifiable'
import { BackgroundHeight } from './heroEnum'

/**
 * Hero Interface
 */
export interface HeroProps extends VariantProps, AlignableProps, JustifiableProps, Clickable {
  children?: React.ReactNode

  backgroundSrc?: string | number
  className?: string
  overlap?: React.ReactNode[] | boolean
  backgroundHeight?: BackgroundHeight
}
