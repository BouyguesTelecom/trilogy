import clsx from 'clsx'
import React from 'react'

import { AlertProps } from '@/components/alert/AlertProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getStatusClassName, getStatusIconName } from '@/objects/facets/Status'
import { has, is } from '@/services/classify'

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
const Alert = React.forwardRef(
  (
    { banner, status, className, iconName, title, description, onClick, display = true, testId, ...others }: AlertProps,
    ref: React.Ref<HTMLDivElement>,
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
        <div data-testid={testId} onClick={onClick && onClick} className={classes} ref={ref} {...others}>
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
    return <div ref={ref} />
  },
)

Alert.displayName = ComponentName.Alert
export default Alert
