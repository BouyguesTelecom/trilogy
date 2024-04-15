import React, { useEffect, useState } from 'react'
import { useTrilogyContext } from '../../context/index'
import { FabProps } from './FabProps'
import { hashClass } from '../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { IconName } from '../icon/IconNameEnum'
import Icon from '../icon/Icon'
import { is } from '../../services/classify'

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
 **/

const Fab = ({
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
  ...others
}: FabProps): JSX.Element => {
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
}

export default Fab
