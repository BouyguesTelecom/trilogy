import { Clickable } from '@/objects/facets'
import { BackgroundProps } from '@/objects/atoms/Background'

/**
 * Hero Interface
 */
export interface HeroProps extends Clickable, BackgroundProps {
  children?: React.ReactNode
  className?: string
  overlap?: React.ReactNode[] | boolean
}
