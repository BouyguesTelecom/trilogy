import { Icon, IconColor, IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/helpers/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { BadgeProps, BadgeRef } from '@/components/badge/BadgeProps'
import { TrilogyColor } from "@/interfaces/Color";
import { StatusState } from "@/interfaces/Status";
import { getStatusClassName } from "@/helpers/status";
import { getVariantClassName } from "@/helpers/variant";

/**
 * Badge Component
 * @param children {React.ReactNode} Content inside the badge (e.g. Icon)
 * @param label {string|number} Badge content text
 * @param inverted {boolean} Inverted style for Badge
 * @param status {StatusState} Badge status variant (INFO|SUCCESS|WARNING|ERROR)
 * @param variant {BadgeVariant} Badge color variant (SUCCESS|INFO|WARNING|ERROR|MAIN|ACCENT)
 * @param position {BadgePositionEnum} Badge position relative to parent element
 * @param onClick {Function} onClick Event for Badge
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const Badge = React.forwardRef<BadgeRef, BadgeProps>(
  (
    { className, children, id, label, inverted, onClick, variant, position, status, testId, ...others },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
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
          testId={!children ? testId : undefined}
          ref={ref}
          name={iconName}
          className={clsx(position && is(position), 'badge-icon')}
          circled
          backgroundColor={TrilogyColor.BACKGROUND}
          color={iconColor}
          id={id}
          {...others}
        />
      ) : (
        <span
          data-testid={!children ? testId : undefined}
          ref={ref}
          id={id}
          className={classes}
          onClick={(e) => {
            onClick?.(e)
            e.stopPropagation()
          }}
          {...others}
        >
          {label}
        </span>
      )

    if (children) {
      return (
        <span className='badge-container' data-testid={testId}>
          {children}
          {simpleBadge}
        </span>
      )
    }

    return simpleBadge
  },
)

Badge.displayName = ComponentName.Badge
export default Badge
