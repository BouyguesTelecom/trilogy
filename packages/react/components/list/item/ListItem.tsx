import * as React from "react"
import clsx from "clsx"
import { ListItemProps } from "./ListItemProps"
import { Icon, IconSize } from "../../icon"
import { is } from "../../../services"
import { getColorClassName, TrilogyColor, TrilogyColorValues, } from "../../../objects"
import { hashClass } from "../../../helpers"
import { useTrilogyContext } from "../../../context"

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param customIcon {IconName} Icon name
 * @param status {ListIconStatus} Status success|error
 * @param title {string} List item title
 * @param description {string} List item description
 */
const ListItem = ({
  className,
  children,
  customIcon,
  status,
  title,
  description,
  testId,
}: ListItemProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = clsx(
    is(getColorClassName(status as TrilogyColor | TrilogyColorValues)),
    className
  )

  if (customIcon) {
    return (
      <li data-testid={testId} className={hashClass(styled, clsx(classes))}>
        <Icon className={classes} name={customIcon} size={IconSize.SMALL} />
        <span>{children}</span>
      </li>
    )
  }

  if (title || description) {
    return (
      <li className={hashClass(styled, clsx(classes))}>
        <b>{title}</b>
        <p>{children || description}</p>
        <br />
      </li>
    )
  }

  return <li className={hashClass(styled, clsx(classes))}>{children}</li>
}

export default ListItem
