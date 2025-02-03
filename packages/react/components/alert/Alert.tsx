import { AlertProps, ToasterAlertPosition, ToasterStatusProps } from '@/components/alert/AlertProps'
import { useAlert, useToasterAlertProvider } from '@/components/alert/hooks/useAlert'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName, getStatusIconName } from '@/objects/facets/Status'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React, { CSSProperties } from 'react'

/**
 * Toaster Component
 * @param children {React.ReactNode} Custom Toast Content
 */
const ToasterAlert: React.FC<{ props: ToasterStatusProps }> = ({ props, ...others }) => {
  const { title, position, description, iconName, status, closable, onClick, className, id, offset, children } = props
  const displayed = Boolean(title)
  const { handleClick } = useAlert({ onClick })
  const classes = hashClass(clsx('toaster', status && is(getStatusClassName(status)), !alert && is('info'), className))

  const positionTop: CSSProperties = {
    top: offset || 0,
    position: 'fixed',
  }

  const positionBottom: CSSProperties = {
    bottom: offset || 0,
    position: 'fixed',
  }

  if (!displayed) {
    return null
  }

  if (children) {
    return (
      <div
        id={id}
        style={
          (position === ToasterAlertPosition.TOP && positionTop) ||
          (position === ToasterAlertPosition.BOTTOM && positionBottom) ||
          positionTop
        }
        onClick={handleClick}
        className={classes}
        {...others}
      >
        {children}
      </div>
    )
  }

  return title ? (
    <div
      style={
        (position === ToasterAlertPosition.TOP && positionTop) ||
        (position === ToasterAlertPosition.BOTTOM && positionBottom) ||
        positionTop
      }
      onClick={handleClick}
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

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Alertt description content
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all alert
 * @param display {Boolean} Display Alert component
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const Alert = ({
  banner,
  status,
  className,
  id,
  iconName,
  title,
  description,
  onClick,
  display = true,
  ...others
}: AlertProps): JSX.Element => {
  const { handleClick } = useAlert({ onClick })

  const classes = hashClass(
    clsx('alert', has('body'), status && is(getStatusClassName(status)), banner && is('banner'), className),
  )

  const iconAlert = React.useMemo(() => {
    if (iconName != null) return iconName
    else if (status) return getStatusIconName(status) ?? IconName.INFOS_CIRCLE
    else return IconName.INFOS_CIRCLE
  }, [iconName, status])

  if (display) {
    return (
      <div id={id} onClick={handleClick} className={classes} {...others}>
        <Icon name={iconAlert} />
        <div className={hashClass(clsx('body'))}>
          {title && typeof title.valueOf() === 'string' ? <Title level={TitleLevels.SIX}>{title}</Title> : title}
          {description && typeof description.valueOf() === 'string' ? (
            <Text level={TextLevels.TWO}>{description}</Text>
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
export const ToasterAlertProvider = ({ children }: ToasterStatusProps): JSX.Element => {
  const { toasterState, ToasterProvider } = useToasterAlertProvider()

  return (
    <ToasterProvider>
      {children}
      <ToasterAlert
        props={{
          title: toasterState?.title,
          id: toasterState?.id,
          description: toasterState?.description,
          position: toasterState?.position,
          iconName: toasterState?.iconName,
          status: toasterState?.status,
          onClick: toasterState?.onClick,
          onHide: toasterState?.onHide,
          closable: toasterState?.closable,
          offset: toasterState?.offset,
        }}
      />
    </ToasterProvider>
  )
}

export default Alert
