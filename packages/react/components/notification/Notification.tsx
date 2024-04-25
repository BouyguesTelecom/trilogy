import * as React from "react"
import { AlertState, getAlertClassName, getAlertIconName, } from "../../objects/facets/Alert"
import { has, is } from "../../services/classify"
import { Button } from "../button"
import { Icon, IconName, IconSize } from "../icon"
import { Text } from "../text"
import { Title, TitleLevels } from "../title"
import { NotificationProps } from "./NotificationProps"
import { hashClass } from "../../helpers"
import clsx from "clsx"
import { useTrilogyContext } from "../../context"

/**
 * Notification Component
 * @param hasIcon {boolean} Display icon, default true
 * @param iconName {IconName} Custom icon
 * @param title {string} Notification title content
 * @param description {string|ReactNode} Notification description content
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param buttonClick {ClickEvent} Click event for button
 * @param buttonContent {string} Button content
 * @param arrow {boolean} Notification with right arrow on right side (Uses only if not button content)
 * @param info (boolean) Small info notification use it without button and arrow
 * @param onClick {Function} onClick Event for all notification
 * @param children {React.ReactNode}
 * @param closable {Function} onClick Event on cross icon
 *  * - -------------------------- WEB PROPERTIES -------------------------------
 * @param banner {boolean} Banner notification
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal Icon CSS
 * @param buttonMarkup {ButtonMarkup} Custom markup for button
 *  * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param deletable {Function} onClick Event on delete icon or slide over ()
 * @param unread {boolean} only with notification deletable if notification is unread
 */
const Notification = ({
  className,
  hasIcon = true,
  iconClassname,
  iconName,
  title,
  description,
  alert,
  buttonContent,
  buttonClick,
  buttonMarkup,
  arrow,
  info,
  banner,
  onClick,
  closable,
  testId,
  ...others
}: NotificationProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "notification",
      has("body"),
      !buttonContent && !arrow && info != null && is("small"),
      banner &&
        !buttonContent &&
        !arrow &&
        !info && [is("banner"), !description && has("description")],
      description && has("description"),
      !!alert &&
        (!info || (alert !== AlertState.INFO && info)) &&
        is(getAlertClassName(alert)),
      className
    )
  )

  const _iconNotif = React.useMemo(() => {
    if (iconName != null) return iconName
    else if (info) return getAlertIconName(alert) ?? IconName.INFOS_CIRCLE
    else return IconName.BELL
  }, [iconName, info, alert])

  return (
    <div
      data-testid={testId}
      onClick={(e) => {
        // eslint-disable-next-line no-unused-expressions
        onClick?.(e)
        e.stopPropagation()
      }}
      className={classes}
      {...others}
    >
      {hasIcon && <Icon className={iconClassname} name={_iconNotif} />}
      <div className={hashClass(styled, clsx("body"))}>
        {title && typeof title.valueOf() === "string" ? (
          <Title level={TitleLevels.THREE}>{title}</Title>
        ) : (
          title
        )}
        {description && typeof description.valueOf() === "string" ? (
          <Text>{description}</Text>
        ) : (
          description
        )}
      </div>
      {buttonContent && !arrow && (
        <div className={hashClass(styled, clsx("call-to-action"))}>
          <Button
            variant={"PRIMARY"}
            markup={buttonMarkup}
            onClick={buttonClick}
          >
            {buttonContent}
          </Button>
        </div>
      )}
      {arrow && !buttonContent && (
        <div
          onClick={buttonClick}
          className={hashClass(styled, clsx("call-to-action"))}
        >
          <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} />
        </div>
      )}
      {closable && !buttonContent && (
        <div
          data-testid={`${testId}_close_button`}
          role={"button"}
          onClick={closable}
          className={hashClass(styled, clsx("call-to-action"))}
        >
          <Icon name={IconName.TIMES} size={IconSize.SMALL} />
        </div>
      )}
    </div>
  )
}

export default Notification
