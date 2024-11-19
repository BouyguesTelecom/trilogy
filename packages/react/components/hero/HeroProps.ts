import { BackgroundHeight } from '@/components/hero/heroEnum'
import { BackgroundProps } from '@/objects/atoms/Background'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { JustifiableProps } from '@/objects/facets/Justifiable'

/**
 * Hero Interface
 */
export interface HeroProps extends AlignableProps, JustifiableProps, Clickable, BackgroundProps {
  children?: React.ReactNode
  className?: string
  overlap?: React.ReactNode[] | boolean
  backgroundHeight?: BackgroundHeight
}
