import React from 'react'
import clsx from 'clsx'
import { SliderProps } from './SliderProps'
import { Columns } from '../columns'
import { Icon, IconName, IconSize } from '../icon'
import { is, has } from '../../services/classify'
import { hashClass } from '../../helpers/hashClassesHelpers'
import { Spacer, SpacerSize } from '../spacer'
import { useTrilogyContext } from '../../context/index'

/**
 * Slider component
 * @param children {ReactNode} Slider child
 * @param doted {boolean} slide dot
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param iconClassName {string} Additionnal css classes for Icon
 * @param motionLess {boolean} Disable behaviour on desktop
 * @param autoSlideDelay {number} Auto-slide delay in MS
 * @param invertedDoted {boolean} Inverted dots color
 * @param progressBar {boolean} Show Progress bars
 * @param arrowsOut {boolean} Slider arrows outside
 * @param arrowSize {IconSize} Icon Arrows Sizes
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param showNextSlide {boolean} show next slide
 * @param contentSize {number} size of slide
 */
const Slider = ({
  className,
  iconClassName,
  children,
  motionLess,
  doted,
  autoSlideDelay,
  invertedDoted,
  progressBar,
  bars,
  isBarsOut,
  arrowsOut,
  arrowSize,
  ...others
}: SliderProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx(motionLess && is('motionless-desktop'), className))
  const iconSliderClasses = `${has('background-white')} ${has('text-secondary')} ${is('circled')} ${
    iconClassName && iconClassName
  }`

  return (
    <div className={classes} data-slider {...others}>
      <div data-slider-duration={autoSlideDelay || 0} />
      <Columns className={arrowsOut ? 'is-variable is-10' : ''} mobile data-slides-container>
        {!motionLess && (
          <Icon
            style={{ left: arrowsOut ? 0 : '3rem' }}
            data-slider-prev
            size={arrowSize || IconSize.MEDIUM}
            className={iconSliderClasses}
            name={IconName.ARROW_LEFT}
          />
        )}
        {children}
        {!motionLess && (
          <Icon
            style={{ right: arrowsOut ? 0 : '3rem' }}
            data-slider-next
            size={arrowSize || IconSize.MEDIUM}
            className={iconSliderClasses}
            name={IconName.ARROW_RIGHT}
          />
        )}
      </Columns>
      {doted && !progressBar && (
        <div data-slider-dots className={invertedDoted ? hashClass(styled, clsx(is('inverted'))) : ''} />
      )}
      {progressBar && !doted && <div data-progress-bar-container />}
      {bars && !doted && (
        <>
          <div data-slider-bars className={isBarsOut ? hashClass(styled, clsx('is-outside')) : ''} />
          <Spacer size={SpacerSize.HUGE} />
        </>
      )}
    </div>
  )
}

export default Slider
