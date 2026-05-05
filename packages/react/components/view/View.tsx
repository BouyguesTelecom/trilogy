import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getAlignClassName, getBackgroundClassName, getJustifyClassName, getLoadingClassName } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ViewMarkup, ViewMarkupValues, ViewProps, ViewRef } from './ViewProps'

/**
 * View Component (DIV equivalent)
 * @param children {ReactNode} View child elements
 * @param onClick {Function} Click Event
 * @param backgroundColor {TrilogyColor} View background color
 * @param backgroundSrc {string} View background image source
 * @param fullwidth {boolean} Full width view (default: true)
 * @param justify {JustifyProps} Justify content alignment
 * @param align {AlignProps} Align items alignment
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param loading {Loading} Loading state
 * @param markup {ViewMarkup} HTML markup element
 * @param inverted {boolean} Inverted View Color
 * @param style {CSSProperties} Custom inline style
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param bottom {boolean} Bottom position
 */
const View = React.forwardRef<ViewRef, ViewProps>(
  (
    {
      children,
      style,
      className,
      loading,
      onClick,
      backgroundColor,
      backgroundSrc,
      inverted,
      fullwidth = true,
      markup,
      flexable,
      justify,
      align,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const isCorrectMarkup = (stringMarkup: ViewMarkup | ViewMarkupValues) => {
      if (stringMarkup in ViewMarkup || Object.values(ViewMarkup).includes(stringMarkup as ViewMarkup)) return true
    }

    const Tag: any = markup && isCorrectMarkup(markup) ? markup : 'div'

    const classes = hashClass(
      styled,
      clsx(
        typeof loading === 'string' && is(getLoadingClassName(loading)),
        typeof loading === 'boolean' ? is('loading') : is('loaded'),
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        backgroundSrc && has('background'),
        (inverted && is('inverted')) || is('base'),
        fullwidth && is('fullwidth'),
        flexable && is('flex'),
        typeof justify === 'string' && is(getJustifyClassName(justify)),
        typeof align === 'string' && is(getAlignClassName(align)),
        className,
      ),
    )

    return (
      <Tag
        ref={ref}
        onClick={onClick}
        style={style}
        className={classes}
        data-testid={testId}
        {...(backgroundSrc && {
          style: {
            backgroundImage: `url(${backgroundSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%',
          },
        })}
        {...others}
      >
        {children}
      </Tag>
    )
  },
)

export default View
