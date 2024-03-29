import { Small } from '../../objects/facets/Small'
import { Accessibility, AlertProps, VariantProps } from '../../objects/facets'
import { Hat } from '../../objects/facets/Hat'
import { ContentSize } from './SliderEnum'
import { IconSize, IconSizeValues } from '../icon'

export interface SliderProps extends Small, VariantProps, AlertProps, Hat, Accessibility {
  children?: React.ReactNode | number
  stretched?: boolean
  className?: string
  doted?: boolean
  invertedDoted?: boolean
  iconClassName?: string
  motionLess?: boolean
  showNextSlide?: boolean
  contentSize?: ContentSize
  autoSlideDelay?: number
  /* @deprecated */
  progressBar?: boolean
  bars?: boolean
  arrowsOut?: boolean
  arrowSize?: IconSize | IconSizeValues

  isBarsOut?: boolean
}
