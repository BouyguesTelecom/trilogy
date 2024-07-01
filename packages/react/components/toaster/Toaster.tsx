import clsx from 'clsx'
import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { getAlertClassName } from '@/objects/facets/Alert'
import { Icon } from '@/components/icon'
import { Text } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { ToasterPosition, ToasterProps } from './ToasterProps'
import { is } from '@/services/classify'
import ToasterContext from './context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { useTrilogyContext } from '@/context'
import { IconSize } from '@/components/icon/IconEnum'
import { IconName } from '@/components/icon/IconNameEnum'

/**
 * Toaster Component
 * @param children {React.ReactNode} Custom Toast Content
 */
const Toaster: React.FC<{ props: ToasterProps }> = ({ props, ...others }) => {
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
          (position === ToasterPosition.TOP && positionTop) ||
          (position === ToasterPosition.BOTTOM && positionBottom) ||
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
        (position === ToasterPosition.TOP && positionTop) ||
        (position === ToasterPosition.BOTTOM && positionBottom) ||
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
        {title && <Title level={TitleLevels.ONE}>{title}</Title>}
        {description && <Text>{description}</Text>}
      </div>
      {closable && <Icon onClick={closable} className={'toaster-close'} name={IconName.TIMES} size={IconSize.SMALL} />}
    </div>
  ) : null
}

/**
 * Toaster provider
 * @param children {React.ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param others
 */
const ToasterProvider = ({ children }: ToasterProps): JSX.Element => {
  const [toasterState, setToasterState] = useState<ToasterProps | null>(null)
  const [duration, setDuration] = useState(5000)
  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const showToast = (params: ToasterProps) => {
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
      <Toaster
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

export default ToasterProvider
