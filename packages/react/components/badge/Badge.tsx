import * as React from "react"
import { BadgeProps } from "./BadgeProps"
import { Text, TextMarkup } from "@/components/text"
import { BadgeTextDirection } from "./BadgeEnum"
import { has } from "@/services"
import { getColorClassName, TrilogyColor, TrilogyColorValues, } from "@/objects/facets"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Badge Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param textContent {string} Content text for badge with text, if textContent props, it will display badge with text
 * @param content {string|number} Badge content text
 * @param direction {BadgeTextDirection} Text direction for Badge (LEFT|RIGHT)
 * @param onClick {Function} onClick Event for Badge
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Badge = ({
  children,
  className,
  textContent,
  content,
  direction,
  onClick,
  testId,
  ...others
}: BadgeProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(textContent ? "badge-and-text" : "badge", className)
  )

  if (textContent) {
    return (
      <div
        data-testid={testId}
        onClick={(e) => {
          onClick?.(e)
          e.stopPropagation()
        }}
        className={classes}
        {...others}
      >
        {(!direction || direction === BadgeTextDirection.LEFT) && (
          <Text markup={TextMarkup.P}>{textContent}</Text>
        )}
        <span
          className={hashClass(
            styled,
            clsx("badge is-level")
          )}
        >
          {content || children}
        </span>
        {direction === BadgeTextDirection.RIGHT && (
          <Text markup={TextMarkup.P}>{textContent}</Text>
        )}
      </div>
    )
  }

  return (
    <div
      data-testid={testId}
      onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}
    >
      <Text
        className={clsx(
          textContent ? "badge-and-text" : "badge",
          className
        )}
        markup={TextMarkup.SPAN}
        {...others}
      >
        {content || children}
      </Text>
    </div>
  )
}

export default Badge
