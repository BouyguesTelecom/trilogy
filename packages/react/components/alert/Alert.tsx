import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getStatusClassName, getStatusIconName } from '@/objects/facets/Status'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { AlertProps, AlertRef, ToasterAlertFloat, ToasterAlertPosition, ToasterStatusProps } from './AlertProps'
import ToasterContext from './context'

/**
 * Toaster Component
 *
 * Ce composant affiche un toast avec différentes options de personnalisation.
 *
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} [props.children] - Contenu personnalisé du toast
 * @param {React.ReactNode} [props.toasterChildren] - Contenu facultatif du toast
 * @param {string} [props.className] - Classes CSS supplémentaires
 * @param {IconName | IconNameValues} [props.iconName] - Nom de l'icône à afficher
 * @param {string | React.ReactNode} [props.title] - Titre du toast
 * @param {string | React.ReactNode} [props.description] - Description du toast
 * @param {ClickEvent} [props.closable] - Fonction pour la fermeture
 * @param {ToasterAlertPosition} [props.position] - Position du toast
 * @param {ToasterAlertFloat} [props.float] - Floating du toast
 * @param {number} [props.offset] - Offset par rapport à la position
 * @param {boolean} [props.display] - Indique si le toast doit être affiché
 * @param {string} [props.id] - Identifiant unique pour le toast
 * @param {string} [props.testId] - Identifiant de test pour l'intégration des tests
 * @param {string} [props.status] - Statut actuel du toast (INFO | SUCCESS | WARNING | ERROR)
 * @param {ClickEvent} [props.onClick] - Fonction appelée lors du clic sur le toast
 * @param {Object} [props.others] - Autres propriétés supplémentaires
 *
 * @returns {JSX.Element | null} Le composant toast à afficher
 *
 * @example
 * <ToasterAlert
 *   title="Notification"
 *   description="This is a test notification"
 *   status="INFO"
 *   position={ToasterAlertPosition.TOP}
 *   closable={() => console.log('Toast closed')}
 * />
 */
const ToasterAlert = ({
  title,
  position,
  float,
  description,
  iconName,
  status,
  closable,
  onClick,
  className,
  id,
  testId,
  offset,
  display,
  children,
  toasterChildren,
  ...others
}: ToasterStatusProps) => {
  const { styled } = useTrilogyContext()

  const positionStyles: CSSProperties = {
    position: 'fixed',
    ...(position === ToasterAlertPosition.BOTTOM ? { bottom: offset || 0 } : { top: offset || 0 }),
    ...(float === ToasterAlertFloat.RIGHT ? { right: offset || 0 } : { left: offset || 0 }),
  }

  const classes = hashClass(
    styled,
    clsx('toaster', status && is(getStatusClassName(status)), !status && is('info'), className),
  )

  return title && display !== false ? (
    <div
      id={id}
      style={positionStyles}
      onClick={(e) => {
        // eslint-disable-next-line no-unused-expressions
        onClick?.(e)
        e.stopPropagation()
      }}
      className={classes}
      data-testid={testId}
      {...others}
    >
      {children ? (
        children
      ) : (
        <>
          {iconName && <Icon name={iconName} size={IconSize.SMALL} />}
          <div className={hashClass(styled, clsx('body'))}>
            {title && <Title level={TitleLevels.SIX}>{title}</Title>}
            {description && <Text>{description}</Text>}
            {toasterChildren && toasterChildren}
          </div>
          {closable && (
            <Icon onClick={closable} className={'toaster-close'} name={IconName.TIMES} size={IconSize.SMALL} />
          )}
        </>
      )}
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
const Alert = React.forwardRef<AlertRef, AlertProps>(
  (
    { banner, status, className, id, iconName, title, description, onClick, display = true, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx('alert', has('body'), status && is(getStatusClassName(status)), banner && is('banner'), className),
    )

    const iconAlert = React.useMemo(() => {
      if (iconName != null) return iconName
      else if (status) return getStatusIconName(status) ?? IconName.INFOS_CIRCLE
      else return IconName.INFOS_CIRCLE
    }, [iconName, status])

    if (display) {
      return (
        <div
          ref={ref}
          id={id}
          onClick={(e) => {
            // eslint-disable-next-line no-unused-expressions
            onClick?.(e)
            e.stopPropagation()
          }}
          className={classes}
          {...others}
        >
          <Icon name={iconAlert} />
          <div className={hashClass(styled, clsx('body'))}>
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
  },
)

/**
 * Toaster Alert Provider
 * @param children {React.ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param onShow {() => void} Fonction appelée lors de l'affichage du toast
 * @param onHide {() => void} Fonction appelée lors de la fermeture du toast
 * @param others
 */
export const ToasterAlertProvider = ({ children }: ToasterStatusProps): JSX.Element => {
  const [toasterState, setToasterState] = useState<ToasterStatusProps | null>(null)
  const [duration, setDuration] = useState(5000)
  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const showToast = React.useCallback(
    (params: ToasterStatusProps) => {
      setToasterState(params)
      params.onShow?.()
      params.duration && params.duration > 0 && setDuration(params.duration)
      timeRef.current && clearTimeout(timeRef.current)
    },
    [timeRef],
  )

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      toasterState?.onHide?.()
      setToasterState(null)
    }, duration)
    return () => {
      timeRef.current && clearTimeout(timeRef.current)
    }
  }, [toasterState, toasterState?.title])

  return (
    <ToasterContext.Provider value={{ show: showToast, hide: () => null }}>
      {children}
      {toasterState && (
        <ToasterAlert
          title={toasterState.title}
          id={toasterState.id}
          testId={toasterState.testId}
          description={toasterState.description}
          position={toasterState.position}
          iconName={toasterState.iconName}
          status={toasterState.status}
          onClick={toasterState.onClick}
          closable={toasterState.closable}
          float={toasterState.float}
          offset={toasterState.offset}
          className={toasterState.className}
          toasterChildren={toasterState.toasterChildren}
          display={toasterState.display}
        />
      )}
    </ToasterContext.Provider>
  )
}

Alert.displayName = ComponentName.Alert
export default Alert
