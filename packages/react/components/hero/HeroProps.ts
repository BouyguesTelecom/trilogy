import { Clickable } from '@/objects/facets'
import { BackgroundProps } from '@/objects/atoms/Background'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Hero Interface
 */
export interface HeroProps extends Clickable, BackgroundProps, CommonProps {
  children?: React.ReactNode
  overlap?: React.ReactNode[] | boolean
}
