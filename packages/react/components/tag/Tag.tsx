import clsx from "clsx"
import React, { useState } from "react"
import { getColorClassName, TrilogyColor, TrilogyColorValues, } from "../../objects/facets/Color"
import { has, is } from "../../services/classify"
import { Icon } from "../icon"
import { TagProps } from "./TagProps"
import { hashClass } from "../../helpers"
import { useTrilogyContext } from "../../context"

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param deletable {boolean} Adding delete icon
 * @param inverted {boolean} Inverted tag
 * @param onClick {Function} OnClick Event
 * @param className {string} Additionnal CSS Classes
 **/
const Tag = ({
  children,
  className,
  variant,
  deletable,
  onClick,
  inverted,
  small,
  iconName,
  testId,
  ...others
}: TagProps): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(deletable || false)
  const { styled } = useTrilogyContext()

  const tagClassNames = hashClass(
    styled,
    clsx(
      "tag",
      !deletable &&
        variant &&
        is(getColorClassName(variant as TrilogyColor | TrilogyColorValues)),
      !deletable && inverted && is("inverted"),
      small && is("small"),
      !deletable && className,
      deletable && !display && is("hidden")
    )
  )

  const tagIconClassNames = hashClass(
    styled,
    clsx(
      variant &&
        is(getColorClassName(variant as TrilogyColor | TrilogyColorValues))
    )
  )

  const onClickHandle = (e: React.MouseEvent) => {
    setDisplay(false)
    if (onClick) {
      onClick(e)
    }
  }

  const deleteClasses = hashClass(
    styled,
    clsx(
      "tags",
      variant &&
        is(getColorClassName(variant as TrilogyColor | TrilogyColorValues)),
      deletable && [has("addons"), is("delete")],
      inverted && is("inverted"),
      small && is("small"),
      className
    )
  )

  // Deletable tag
  if (deletable && display) {
    return (
      <div data-testid={testId} className={deleteClasses}>
        <span className={tagClassNames}>{children}</span>
        <a
          data-testid={`${testId}_close_button`}
          onClick={onClickHandle}
          className={tagClassNames}
        />
      </div>
    )
  }

  // Default tag
  return (
    <span
      data-testid={testId}
      onClick={onClick && onClick}
      className={tagClassNames}
      {...others}
    >
      {iconName && <Icon className={tagIconClassNames} name={iconName} />}
      {children}
    </span>
  )
}

export default Tag
