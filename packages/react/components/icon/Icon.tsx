import * as React from "react"
import clsx from "clsx"
import { IconProps } from "./IconProps"
import StatusIcon from "./status/index"
import CircleIcon from "./circle/index"
import TextIcon from "./text/index"
import { has, is } from "../../services/index"
import { getColorClassName } from "../../objects/facets/Color"
import { getAlignClassName } from "../../objects/facets/Alignable"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"
import { IconName } from "./IconNameEnum"

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
 * @param marginless {boolean}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param textClassName {string} Text's className
 * @param className Additionnal css classes
 * @param markup {TextIconMarkup} Available markup for Icon DIV|P|SPAN|A
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param style {object} Additional styles
 */

const Icon = ({
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
}: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "icon",
      stretched && is("stretched"),
      size && is(size),
      stacked && is("stacked"),
      color && is(`${getColorClassName(color)}`),
      skeleton && is("loading"),
      badgeContent && is("stacked"),
      marginless && is("marginless"),
      className
    )
  )

  // TextIcon uses className instead of classes, verticalAlignment only affect TextIcon
  className = clsx(
    content && verticalAlign && is(`${getAlignClassName(verticalAlign)}`),
    className
  )

  const alignClasses = hashClass(
    styled,
    clsx(
      (align &&
        getAlignClassName(align) === "aligned-start" &&
        has("text-left")) ||
        (getAlignClassName(align) === "aligned-center" &&
          has("text-centered")) ||
        (getAlignClassName(align) === "aligned-end" && has("text-right"))
    )
  )

  // circled icons
  if (circled || (circled && status)) {
    if (align) {
      return (
        <div className={alignClasses}>
          <CircleIcon
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
        <div className={alignClasses}>
          <StatusIcon
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
        <div className={alignClasses}>
          <TextIcon
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
        <div className={alignClasses}>
          <span onClick={onClick && onClick} className={classes} {...others}>
            <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
            <span className={hashClass(styled, clsx("badge", is("up")))}>
              {badgeContent}
            </span>
          </span>
          {content && (
            <span className={hashClass(styled, clsx(textClassName))}>
              {content}
            </span>
          )}
        </div>
      )
    }
    return (
      <>
        <span onClick={onClick && onClick} className={classes} {...others}>
          <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
          <span className={hashClass(styled, clsx("badge", is("up")))}>
            {badgeContent}
          </span>
        </span>
        {content && (
          <span className={hashClass(styled, clsx(textClassName))}>
            {content}
          </span>
        )}
      </>
    )
  }

  // Stretched icon
  if (stretched) {
    if (align) {
      return (
        <div className={alignClasses}>
          <span onClick={onClick && onClick} className={classes} {...others}>
            <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
          </span>
        </div>
      )
    }
    return (
      <span onClick={onClick && onClick} className={classes} {...others}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
      </span>
    )
  }

  // Custom Colored Icon
  if (color) {
    if (align) {
      return (
        <div className={alignClasses}>
          <span onClick={onClick && onClick} className={classes} {...others}>
            <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
          </span>
        </div>
      )
    }
    return (
      <span onClick={onClick && onClick} className={classes} {...others}>
        <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
      </span>
    )
  }

  if (align) {
    return (
      <div className={alignClasses}>
        <span onClick={onClick && onClick} className={classes} {...others}>
          <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
        </span>
      </div>
    )
  }

  // Static default Icon
  return (
    <span
      data-testid={testId}
      onClick={onClick && onClick}
      className={classes}
      {...others}
    >
      <i className={hashClass(styled, clsx(name))} aria-hidden='true' />
    </span>
  )
}

export default Icon
