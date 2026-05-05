import React, { useEffect, useState } from 'react'
import { useTrilogyContext } from '@/context'
import { FabProps, FabRef } from './FabProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { Icon, IconName } from '@/components/icon'
import { is } from '@/services'
import { ComponentName } from '../enumsComponentsName'

/**
 * Fab Component - Floating Action Button
 * @param children {ReactNode} Text or content of the fab button
 * @param extended {boolean} Extended fab mode (shows text alongside icon)
 * @param iconName {IconName | IconNameValues} Icon to display inside the button
 * @param accessibilityLabel {string} Accessibility label
 * @param onClick {ClickEvent} Click event handler
 * @param top {number} Top position offset
 * @param bottom {number} Bottom position offset
 * @param left {number} Left position offset
 * @param right {number} Right position offset
 * @param disabled {boolean} Disabled state
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param fixed {boolean} Fixed positioning (true by default)
 */
const Fab = React.forwardRef<FabRef, FabProps>(({
  children,
  extended,
  iconName,
  accessibilityLabel,
  onClick,
  className,
  id,
  fixed = true,
  top,
  bottom,
  left,
  right,
  disabled,
  testId,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [isExtended, setIsExtended] = useState<boolean>(extended || false)

  useEffect(() => {
    setIsExtended(extended || false)
  }, [isExtended])

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

  const _className = hashClass(styled, clsx('fab', extended && is('extended'), className))

  return (
    <button
      data-testid={testId}
      ref={ref}
      id={id}
      disabled={disabled}
      aria-label={accessibilityLabel}
      onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}
      style={{ ...positionStyle }}
      {...others}
      className={_className}
    >
      <Icon name={iconName as IconName} />
      {children}
    </button>
  )
})

Fab.displayName = ComponentName.Fab
export default Fab
