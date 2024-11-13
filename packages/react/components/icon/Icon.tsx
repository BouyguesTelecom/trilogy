import clsx from 'clsx'
import React from 'react'

import CircleIcon from '@/components/icon/circle/index'
import { IconName } from '@/components/icon/IconNameEnum'
import { IconProps } from '@/components/icon/IconProps'
import StatusIcon from '@/components/icon/status/index'
import TextIcon from '@/components/icon/text/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { has, is } from '@/services/classify'

/**
 * Icon Component
 * @param size Size of Icon
 * @param name IconName
 * @param status SUCCESS|ERROR If CircleIcon or not
 * @param circled true-false if CircleIcon
 * @param content If TextIcon use it for text
 * @param position UP|DOWN|LEFT|RIGHT
 * @param stacked {boolean} Stacked icon
 * @param badgeContent {string} Icon with bage content
 * @param statusPosition {IconStatusPosition} Position for icon with status (TOP|BOTTOM)
 * @param stretched {boolean} Stretched icon
 * @param color {IconColor} Custom Icon Color
 * @param backgroundColor {TrilogyColor} Custom Background color only if circled
 * @param onClick {Function} onClick Event Icon
 * @param skeleton {boolean} Icon Skeleton
 * @param marginless {boolean} delete margin
 * @param align { Alignable | AlignableValues} align content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param textClassName {string} Text's className
 * @param className Additionnal css classes
 * @param markup {TextIconMarkup} Available markup for Icon DIV|P|SPAN|A
 * @param verticalAlign {Alignable | AlignableValues} align vertical content
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param style {object} Additional styles
 */

const Icon = (
  {
    className,
    textClassName,
    size,
    name,
    status,
    circled,
    content,
    position,
    markup,
    stacked,
    badgeContent,
    statusPosition,
    stretched,
    color,
    backgroundColor,
    onClick,
    align,
    skeleton,
    verticalAlign,
    testId,
    marginless,
    ...others
  }: IconProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const classes = hashClass(
    clsx(
      'icon',
      stretched && is('stretched'),
      size && is(size),
      stacked && is('stacked'),
      color && is(`${getColorClassName(color as TrilogyColorValues | TrilogyColor)}`),
      skeleton && is('loading'),
      badgeContent && is('stacked'),
      marginless && is('marginless'),
      className,
    ),
  )

  // TextIcon uses className instead of classes, verticalAlignment only affect TextIcon
  className = clsx(content && verticalAlign && is(`${getAlignClassName(verticalAlign)}`), className)

  const alignClasses = hashClass(
    clsx(
      (align && getAlignClassName(align) === 'aligned-start' && has('text-left')) ||
        (getAlignClassName(align) === 'aligned-center' && has('text-centered')) ||
        (getAlignClassName(align) === 'aligned-end' && has('text-right')),
    ),
  )

  // circled icons
  if (circled || (circled && status)) {
    if (align) {
      return (
        <div className={alignClasses} ref={ref}>
          <CircleIcon
            ref={ref}
            testId={testId}
            onClick={onClick && onClick}
            className={className}
            name={name as IconName}
            status={status}
            size={size}
            color={color}
            backgroundColor={backgroundColor}
            {...others}
          />
        </div>
      )
    }
    return (
      <CircleIcon
        ref={ref}
        testId={testId}
        onClick={onClick && onClick}
        className={className}
        name={name as IconName}
        status={status}
        size={size}
        color={color}
        backgroundColor={backgroundColor}
        {...others}
      />
    )
  }

  // status icons
  if (status) {
    if (align) {
      return (
        <div className={alignClasses} ref={ref}>
          <StatusIcon
            ref={ref}
            testId={testId}
            onClick={onClick && onClick}
            statusPosition={statusPosition}
            className={className}
            name={name as IconName}
            size={size}
            status={status}
            {...others}
          />
        </div>
      )
    }
    return (
      <StatusIcon
        ref={ref}
        testId={testId}
        onClick={onClick && onClick}
        statusPosition={statusPosition}
        className={className}
        name={name as IconName}
        size={size}
        status={status}
        {...others}
      />
    )
  }

  // Text icon
  if (content && !badgeContent) {
    if (align) {
      return (
        <div className={alignClasses} ref={ref}>
          <TextIcon
            ref={ref}
            testId={testId}
            onClick={onClick && onClick}
            className={className}
            name={name as IconName}
            content={content}
            position={position}
            textClassName={textClassName}
            size={size}
            markup={markup}
            status={status}
            color={color}
            {...others}
          />
        </div>
      )
    }
    return (
      <TextIcon
        ref={ref}
        onClick={onClick && onClick}
        className={className}
        name={name as IconName}
        content={content}
        position={position}
        textClassName={textClassName}
        size={size}
        markup={markup}
        status={status}
        color={color}
        {...others}
      />
    )
  }

  // Icon with badge + badge content
  if (badgeContent) {
    if (align) {
      return (
        <div className={alignClasses} ref={ref}>
          <span onClick={onClick && onClick} className={classes} {...others}>
            <i className={hashClass(clsx(name))} aria-hidden='true' />
            <span className={hashClass(clsx('badge', is('up')))}>{badgeContent}</span>
          </span>
          {content && <span className={hashClass(clsx(textClassName))}>{content}</span>}
        </div>
      )
    }
    return (
      <>
        <span onClick={onClick && onClick} className={classes} {...others} ref={ref}>
          <i className={hashClass(clsx(name))} aria-hidden='true' />
          <span className={hashClass(clsx('badge', is('up')))}>{badgeContent}</span>
        </span>
        {content && <span className={hashClass(clsx(textClassName))}>{content}</span>}
      </>
    )
  }

  // Stretched icon
  if (stretched) {
    if (align) {
      return (
        <div className={alignClasses} ref={ref}>
          <span onClick={onClick && onClick} className={classes} {...others}>
            <i className={hashClass(clsx(name))} aria-hidden='true' />
          </span>
        </div>
      )
    }
    return (
      <span onClick={onClick && onClick} className={classes} {...others} ref={ref}>
        <i className={hashClass(clsx(name))} aria-hidden='true' />
      </span>
    )
  }

  // Custom Colored Icon
  if (color) {
    if (align) {
      return (
        <div className={alignClasses} ref={ref}>
          <span onClick={onClick && onClick} className={classes} {...others}>
            <i className={hashClass(clsx(name))} aria-hidden='true' />
          </span>
        </div>
      )
    }
    return (
      <span onClick={onClick && onClick} className={classes} {...others} ref={ref}>
        <i className={hashClass(clsx(name))} aria-hidden='true' />
      </span>
    )
  }

  if (align) {
    return (
      <div className={alignClasses} ref={ref}>
        <span onClick={onClick && onClick} className={classes} {...others}>
          <i className={hashClass(clsx(name))} aria-hidden='true' />
        </span>
      </div>
    )
  }

  // Static default Icon
  return (
    <span data-testid={testId} onClick={onClick && onClick} className={classes} {...others} ref={ref}>
      <i className={hashClass(clsx(name))} aria-hidden='true' />
    </span>
  )
}

export default React.forwardRef(Icon)
