'use client'

import clsx from 'clsx'
import React from 'react'

import { ToasterAlertPosition, ToasterStatusProps } from '@/components/alert/AlertProps'
import ToasterContext from '@/components/alert/context'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers'
import { getStatusClassName } from '@/objects/facets/Status'
import { is } from '@/services/classify'

/**
 * Toaster Alert Provider
 * @param children {React.ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param others
 */
export const ToasterAlertProvider = ({ children }: ToasterStatusProps): JSX.Element => {
  const [toasterState, setToasterState] = React.useState<ToasterStatusProps | null>(null)
  const [duration, setDuration] = React.useState(5000)
  const timeRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

  const showToast = (params: ToasterStatusProps) => {
    setToasterState(params)
    params.duration && params.duration > 0 && setDuration(params.duration)
    timeRef.current && clearTimeout(timeRef.current)
  }

  React.useEffect(() => {
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
          status: toasterState?.status,
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

/**
 * Toaster Component
 * @param children {React.ReactNode} Custom Toast Content
 */
const ToasterAlert: React.FC<{ props: ToasterStatusProps }> = ({ props, ...others }) => {
  const { title, position, description, iconName, status, closable, onClick, className, offset, children } = props
  const classes = hashClass(clsx('toaster', status && is(getStatusClassName(status)), !alert && is('info'), className))
  const displayed = Boolean(title)

  const positionTop: React.CSSProperties = {
    top: offset || 0,
    position: 'fixed',
  }

  const positionBottom: React.CSSProperties = {
    bottom: offset || 0,
    position: 'fixed',
  }

  if (!displayed) return null

  if (children) {
    return (
      <div
        data-testid={props.testId}
        style={
          (position === ToasterAlertPosition.TOP && positionTop) ||
          (position === ToasterAlertPosition.BOTTOM && positionBottom) ||
          positionTop
        }
        onClick={onClick && onClick}
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
      onClick={onClick && onClick}
      className={classes}
      {...others}
    >
      {iconName && <Icon name={iconName} size={IconSize.SMALL} />}
      <div className={hashClass(clsx('body'))}>
        {title && <Title level={TitleLevels.SIX}>{title}</Title>}
        {description && <Text>{description}</Text>}
      </div>
      {closable && <Icon onClick={closable} className={'toaster-close'} name={IconName.TIMES} size={IconSize.SMALL} />}
    </div>
  ) : null
}
