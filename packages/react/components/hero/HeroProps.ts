import { Clickable, VariantProps } from '../../objects/facets'
import { AlignableProps } from '../../objects/facets/Alignable'
import { JustifiableProps } from '../../objects/facets/Justifiable'
import { BackgroundHeight } from './heroEnum'
import {BackgroundProps} from "../../objects/atoms/Background";

/**
 * Hero Interface
 */
export interface HeroProps extends VariantProps, AlignableProps, JustifiableProps, Clickable, BackgroundProps {
  children?: React.ReactNode

  className?: string
  overlap?: React.ReactNode[] | boolean
  backgroundHeight?: BackgroundHeight
}
