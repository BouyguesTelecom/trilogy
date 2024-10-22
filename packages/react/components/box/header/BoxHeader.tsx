import * as React from "react"
import { Text } from "@/components/text"
import { BoxHeaderProps } from "./BoxHeaderProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import { has } from "@/services"
import { getBackgroundClassName } from "@/objects"

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param help {string} Box Header Help Sticker
 * @param centered {boolean} Center content box header
 * @param pulledLeft {boolean} Pulled-left content box header
 * @param pulledRight {boolean} Pulled-right content box header
 * @param variant {TrilogyColor} Box Header backgroundColor
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */

const BoxHeader = ({
  children,
  className,
  help,
  centered,
  pulledLeft,
  pulledRight,
  variant,
  testId,
  ...others
}: BoxHeaderProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "box-header",
      className,
      centered && "has-text-centered",
      pulledRight && "has-text-right",
      pulledLeft && "has-text-left",
      variant && has(getBackgroundClassName(variant))
    )
  )

  return (
    <header data-testid={testId} className={classes} {...others}>
      {children && typeof children.valueOf() === "string" ? (
        <p>{children}</p>
      ) : (
        children
      )}
      {help && (
        <Text
          testId={testId && `${testId}-help`}
          className='box-header-help sticker is-small is-success'
        >
          {String(children)}
        </Text>
      )}
    </header>
  )
}

export default BoxHeader
