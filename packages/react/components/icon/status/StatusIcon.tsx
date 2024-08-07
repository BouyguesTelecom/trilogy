import * as React from "react"
import { IconProps } from "@/components/icon/IconProps"
import { IconName } from "@/components/icon/IconNameEnum"
import { IconStatus } from "@/components/icon/IconEnum"
import { has, is } from "@/services/index"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

const StatusIcon = ({
  className,
  name,
  status,
  statusPosition,
  size,
  testId,
}: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const ancestorClasses = hashClass(
    styled,
    clsx(
      "icon",
      size && is(`${size}`),
      is("ancestor"),
      has("status"),
      className
    )
  )
  const descendantClasses = hashClass(
    styled,
    clsx(
      "icon is-circled is-descendant",
      status && is(`${status.toLowerCase()}`),
      statusPosition && is(`${statusPosition}`)
    )
  )
  const descendantIcon = hashClass(
    styled,
    clsx(status === IconStatus.SUCCESS ? IconName.CHECK_CIRCLE : IconName.TIMES)
  )

  return (
    <span className={ancestorClasses} aria-hidden='true' data-testid={testId}>
      <span className={hashClass(styled, clsx(name))}></span>
      <span className={descendantClasses}>
        <i className={descendantIcon} />
      </span>
    </span>
  )
}

export default StatusIcon
