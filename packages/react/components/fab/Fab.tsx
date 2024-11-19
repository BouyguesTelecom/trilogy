import clsx from 'clsx'
import React from 'react'

import { FabProps } from '@/components/fab/FabProps'
import { Icon, IconName } from '@/components/icon'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Fab Component - Floating Button Action
 * @param children {ReactNode} Text for fab button
 * @param extended {boolean} extend fab button
 * @param iconName {IconName | IconNameValues} name of icon
 * @param accessibilityLabel {string} Accessibility label
 * @param onClick {ClickEvent} onClick Event
 * @param className {string} Additional CSS Classes (only web)
 * @param fixed {boolean} position fixed,true by dyfault
 * @param top {number} position top
 * @param left {number} position left
 * @param bottom {number} position bottom
 * @param right {number} position right
 * @param disabled {boolean} disabled button
 * @param testId {string} Test Id for Test Integration
 **/

const Fab = (
  {
    children,
    extended,
    iconName,
    accessibilityLabel,
    onClick,
    className,
    fixed = true,
    top,
    bottom,
    left,
    right,
    testId,
    disabled,
    ...others
  }: FabProps,
  ref: React.Ref<HTMLButtonElement>,
): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const positionStyle: React.CSSProperties | any =
    top || bottom || left || right
      ? {
          position: fixed ? 'fixed' : 'absolute',
          top: top ?? 'auto',
          bottom: bottom ?? 'auto',
          left: left ?? 'auto',
          right: right ?? 'auto',
        }
      : {
          position: 'relative',
        }

  const _className = hashClass(clsx('fab', extended && is('extended'), className))

  return (
    <button
      ref={ref}
      disabled={disabled}
      data-testid={testId}
      aria-label={accessibilityLabel}
      onClick={onClick && onClick}
      style={{ ...positionStyle }}
      className={_className}
      {...others}
    >
      <Icon name={iconName as IconName} />
      {children}
    </button>
  )
}

export default React.forwardRef(Fab)
