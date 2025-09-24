import { Icon, IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { is } from '@/services/index'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { FabProps, FabRef } from './FabProps'

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
const Fab = React.forwardRef<FabRef, FabProps>(
  (
    {
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
      ...others
    },
    ref,
  ): JSX.Element => {
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
  },
)

Fab.displayName = ComponentName.Fab
export default Fab
