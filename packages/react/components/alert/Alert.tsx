import clsx from "clsx"
import * as React from "react"
import { getAlertClassName, getAlertIconName } from "@/objects"
import { has, is } from "@/services/classify"
import { Icon, IconName, IconSize } from "@/components/icon"
import { Text } from "@/components/text"
import { Title, TitleLevels } from "@/components/title"
import { AlertProps, ToasterAlertPosition, ToasterAlertProps } from "./AlertProps"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import ToasterContext from './context'
import { CSSProperties, useEffect, useRef, useState } from "react"

/**
 * Toaster Component
 * @param children {React.ReactNode} Custom Toast Content
 */
const ToasterAlert: React.FC<{ props: ToasterAlertProps }> = ({ props, ...others }) => {
  const { styled } = useTrilogyContext()

  const { title, position, description, iconName, alert, closable, onClick, className, offset, children } = props
  const displayed = Boolean(title)

  const positionTop: CSSProperties = {
    top: offset || 0,
    position: 'fixed',
  }

  const positionBottom: CSSProperties = {
    bottom: offset || 0,
    position: 'fixed',
  }

  const classes = hashClass(
    styled,
    clsx('toaster', alert && is(getAlertClassName(alert)), !alert && is('info'), className),
  )

  if (!displayed) {
    return null
  }

  if (children) {
    return (
      <div
        data-testid={props.testId}
        style={
          (position === ToasterAlertPosition.TOP && positionTop) ||
          (position === ToasterAlertPosition.BOTTOM && positionBottom) ||
          positionTop
        }
        onClick={(e) => {
          // eslint-disable-next-line no-unused-expressions
          onClick?.(e)
          e.stopPropagation()
        }}
        className={classes}
        {...others}
      >
        {children}
      </div>
    )
  }

  return title ? (
    <div
      data-testid={props.testId}
      style={
        (position === ToasterAlertPosition.TOP && positionTop) ||
        (position === ToasterAlertPosition.BOTTOM && positionBottom) ||
        positionTop
      }
      onClick={(e) => {
        // eslint-disable-next-line no-unused-expressions
        onClick?.(e)
        e.stopPropagation()
      }}
      className={classes}
      {...others}
    >
      {iconName && <Icon name={iconName} size={IconSize.SMALL} />}
      <div className={hashClass(styled, clsx('body'))}>
        {title && <Title level={TitleLevels.SIX}>{title}</Title>}
        {description && <Text>{description}</Text>}
      </div>
      {closable && <Icon onClick={closable} className={'toaster-close'} name={IconName.TIMES} size={IconSize.SMALL} />}
    </div>
  ) : null
}

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Alertt description content
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all alert
 * @param className {string} Additionnal CSS Classes
 * @param iconClassname {string} Additionnal Icon CSS
 * @param display
 * @param others
 */
const Alert = ({
  alert,
  className,
  iconClassname,
  iconName,
  title,
  description,
  onClick,
  display,
  testId,
  toaster,
  ...others
}: AlertProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx("alert", has("body"), alert && is(getAlertClassName(alert)), className)
  )

  const iconAlert = React.useMemo(() => {
    if (iconName != null) return iconName
    else if (alert) return getAlertIconName(alert) ?? IconName.INFOS_CIRCLE
    else return IconName.INFOS_CIRCLE
  }, [iconName, alert])

  if (display) {
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
        <Icon className={iconClassname} name={iconAlert} />
        <div className={hashClass(styled, clsx("body"))}>
          {title && typeof title.valueOf() === "string" ? (
            <Title level={TitleLevels.SIX}>{title}</Title>
          ) : (
            title
          )}
          {description && typeof description.valueOf() === "string" ? (
            <Text>{description}</Text>
          ) : (
            description
          )}
        </div>
      </div>
    )
  }
  return <div />
}

/**
 * Toaster Alert Provider
 * @param children {React.ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param others
 */
export const ToasterAlertProvider = ({ children }: ToasterAlertProps): JSX.Element => {
  const [toasterState, setToasterState] = useState<ToasterAlertProps | null>(null)
  const [duration, setDuration] = useState(5000)
  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const showToast = (params: ToasterAlertProps) => {
    setToasterState(params)
    params.duration && params.duration > 0 && setDuration(params.duration)
    timeRef.current && clearTimeout(timeRef.current)
  }

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      setToasterState(null)
    }, duration)
  }, [toasterState, toasterState?.title])

  return (
    <ToasterContext.Provider value={{ show: showToast, hide: () => null }}>
      {children}
      <ToasterAlert
        props={{
          title: toasterState?.title,
          description: toasterState?.description,
          position: toasterState?.position,
          iconName: toasterState?.iconName,
          alert: toasterState?.alert,
          onClick: toasterState?.onClick,
          onHide: toasterState?.onHide,
          closable: toasterState?.closable,
          offset: toasterState?.offset,
          testId: toasterState?.testId,
        }}
      />
    </ToasterContext.Provider>
  )
}

export default Alert
