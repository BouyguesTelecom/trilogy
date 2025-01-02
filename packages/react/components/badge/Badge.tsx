import { BadgeProps } from '@/components/badge/BadgeProps'
import { Icon, IconColor, IconName } from '@/components/icon'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TrilogyColor } from '@/objects/facets/Color'
import { getStatusClassName, StatusState } from '@/objects/facets/Status'
import { getVariantClassName } from '@/objects/facets/Variant'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

/**
 * Badge Component
 * @param children {React.ReactNode} If no content add children (Icon for example)
 * @param id
 * @param label {string|number} Badge content text
 * @param inverted {boolean} Inverted style for Badge
 * @param onClick {Function} onClick Event for Badge
 * @param variant
 * @param position
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)
 */
const Badge = ({
  className,
  children,
  id,
  label,
  inverted,
  onClick,
  variant,
  position,
  status,
  ...others
}: BadgeProps): JSX.Element => {
  const classes = hashClass(
    clsx(
      'badge',
      inverted && is('inverted'),
      variant && has(`background-${getVariantClassName(variant) || getStatusClassName(variant)}`),
      position && is(position),
      className,
    ),
  )

  let iconName: IconName | null = null
  let iconColor: IconColor | null = null

  switch (status) {
    case StatusState.SUCCESS:
      iconName = IconName.CHECK_CIRCLE
      iconColor = IconColor.SUCCESS
      break
    case StatusState.WARNING:
      iconName = IconName.EXCLAMATION_CIRCLE
      iconColor = IconColor.WARNING
      break
    case StatusState.ERROR:
      iconName = IconName.TIMES_CIRCLE
      iconColor = IconColor.ERROR
      break
    case StatusState.INFO:
      iconName = IconName.INFOS_CIRCLE
      iconColor = IconColor.INFO
      break
    default:
      break
  }

  const simpleBadge =
    status && iconName && iconColor ? (
      <Icon
        name={iconName}
        className={clsx(position && is(position), 'badge-icon')}
        circled
        backgroundColor={TrilogyColor.BACKGROUND}
        color={iconColor}
        id={id}
        {...others}
      />
    ) : (
      <span id={id} className={classes} onClick={onClick} {...others}>
        {label}
      </span>
    )

  if (children) {
    return (
      <span className='badge-container'>
        {children}
        {simpleBadge}
      </span>
    )
  }

  return simpleBadge
}

export default Badge
