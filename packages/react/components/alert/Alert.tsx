import { useToasterAlertProvider } from '@/components/alert/hooks/useAlert'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName, getStatusIconName } from '@/objects/facets/Status'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { CSSProperties } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { AlertProps, AlertRef, ToasterAlertFloat, ToasterAlertPosition, ToasterStatusProps } from './AlertProps'

/**
 * Toaster Component
 *
 * This component displays a toast with various customization options.
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} [props.children] - Custom content of the toast
 * @param {React.ReactNode} [props.toasterChildren] - Optional content of the toast
 * @param {string} [props.className] - Additional CSS classes
 * @param {IconName | IconNameValues} [props.iconName] - Name of the icon to display
 * @param {string | React.ReactNode} [props.title] - Title of the toast
 * @param {string | React.ReactNode} [props.description] - Description of the toast
 * @param {ClickEvent} [props.closable] - Function for closing the toast
 * @param {ToasterAlertPosition} [props.position] - Position of the toast
 * @param {ToasterAlertFloat} [props.float] - Floating of the toast
 * @param {number} [props.offset] - Offset from the position
 * @param {boolean} [props.display] - Indicates whether the toast should be displayed
 * @param {string} [props.id] - Unique identifier for the toast
 * @param {string} [props.testId] - Test identifier for test integration
 * @param {string} [props.status] - Current status of the toast (INFO | SUCCESS | WARNING | ERROR)
 * @param {string} [props.markup] - Title markup (h2 | h3 | h4 | h5 | h6 | p)
 * @param {ClickEvent} [props.onClick] - Function called when clicking on the toast
 * @param {Object} [props.others] - Other additional properties
 *
 * @returns {JSX.Element | null} The toast component to display
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
  markup,
  ...others
}: ToasterStatusProps) => {
  const positionStyles: CSSProperties = {
    position: 'fixed',
    ...(position === ToasterAlertPosition.BOTTOM ? { bottom: offset || 0 } : { top: offset || 0 }),
    ...(float === ToasterAlertFloat.RIGHT ? { right: offset || 0 } : { left: offset || 0 }),
  }

  const classes = hashClass(clsx('toaster', status && is(getStatusClassName(status)), !status && is('info'), className))

  return title && display !== false ? (
    <div
      id={id}
      style={positionStyles}
      onClick={
        onClick
          ? (e) => {
              // eslint-disable-next-line no-unused-expressions
              onClick?.(e)
              e.stopPropagation()
            }
          : undefined
      }
      className={classes}
      data-testid={testId}
      {...others}
    >
      {children ? (
        children
      ) : (
        <>
          {iconName && <Icon name={iconName} size={IconSize.SMALL} />}
          <div className={hashClass(clsx('body'))}>
            {title && (
              <Title markup={markup} level={TitleLevels.SIX}>
                {title}
              </Title>
            )}
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
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param markup {string} Title markup (h2 | h3 | h4 | h5 | h6 | p)

 */
const Alert = React.forwardRef<AlertRef, AlertProps>(
  (
    { banner, status, className, id, iconName, title, description, onClick, display = true, markup, ...others },
    ref,
  ): JSX.Element => {
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
        <div
          ref={ref}
          id={id}
          onClick={
            onClick
              ? (e) => {
                  // eslint-disable-next-line no-unused-expressions
                  onClick?.(e)
                  e.stopPropagation()
                }
              : undefined
          }
          className={classes}
          {...others}
        >
          <Icon name={iconAlert} />
          <div className={hashClass(clsx('body'))}>
            {title && typeof title.valueOf() === 'string' ? (
              <Title markup={markup} level={TitleLevels.SIX}>
                {title}
              </Title>
            ) : (
              title
            )}
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
  const { ToasterProvider, toasterState } = useToasterAlertProvider()

  return (
    <ToasterProvider>
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
          markup={toasterState.markup}
        />
      )}
    </ToasterProvider>
  )
}

Alert.displayName = ComponentName.Alert
export default Alert
