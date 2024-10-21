import * as React from "react"
import clsx from "clsx"
import { Text, TextMarkup } from "@/components/text"
import { LinkProps } from "./LinkProps"
import { has, is } from "@/services/classify"
import { Icon, IconSize } from "@/components/icon"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Link Component
 * @param children {React.ReactNode} Content children for Link
 * @param href {string} Link to open
 * @param to {string} use for router
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * @param typo {TypographyAlign} Typos align link
 * @param accessibilityLabel {string} Accessibility label
 * @param iconName {IconName} Adding Icon Link
 * @param testId {string} Test Id for Test Integration
 * @param inverted {boolean} Inverted link
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param href {string} Href link
 * @param removeLinkClass {boolean}
 * @param routerLink Custom Router Link as props
 * @param blank Link Target Blank
 * -------------------------- NATIVE PROPERTIES -------------------------------
 * @param inline {boolean} If link is inside paragraphe
 * @param level {TextLevels} if inline, size to match with Text
 * @param style {Object} Additional styles
 */

const Link = ({
  children,
  className,
  removeLinkClass,
  to,
  href,
  title,
  onClick,
  typo,
  testId,
  accessibilityLabel,
  routerLink,
  iconName,
  inverted,
  blank,
  ...others
}: LinkProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = clsx(
    iconName && has("icon"),
    typo,
    inverted && is("inverted"),
    className
  )

  if (routerLink && to) {
    const RouterLink = (routerLink ? routerLink : "a") as React.ElementType

    const RouterLinkTrilogy = (): JSX.Element => {
      return (
        <RouterLink
          data-testid={testId}
          aria-label={accessibilityLabel}
          onClick={onClick && onClick}
          className={hashClass(styled, clsx(classes))}
          to={to || ""}
          {...(blank && {
            target: "_blank",
          })}
          {...others}
        >
          {title || children}
        </RouterLink>
      )
    }

    if (typo) {
      return (
        <div className={hashClass(styled, clsx(typo))}>
          <RouterLinkTrilogy />
        </div>
      )
    }

    return <RouterLinkTrilogy />
  }

  const LinkTrilogy = (): JSX.Element => {
    return (
      <Text
        link
        data-testid={testId}
        aria-label={accessibilityLabel}
        onClick={onClick && onClick}
        title={title}
        markup={TextMarkup.A}
        className={classes}
        href={href}
        {...(blank && {
          target: "_blank",
        })}
        {...others}
      >
        {iconName ? (
          <>
            <Text markup='span'>{children}</Text>
            <Icon name={iconName} size={IconSize.SMALL} />
          </>
        ) : (
          children
        )}
      </Text>
    )
  }

  if (typo) {
    return (
      <div className={hashClass(styled, clsx(typo))}>
        <LinkTrilogy />
      </div>
    )
  }

  return <LinkTrilogy />
}

export default Link
