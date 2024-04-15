import React, { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { DropdownTriggerWebProps } from './DropdownTriggerProps'
import { has, is } from '../../../services/classify'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { useDrodownContext } from '../Dropdown'

/**
 * Dropdown Trigger Component
 * @param className {string} Additionnal CSS Classes
 * @param active {boolean} Active trigger
 * @param onClick {onClick} onClick event
 * @param label {string} Trigger label
 * @param placeholder {string} Trigger placeholder
 * @param children {React.ReactNode}
 */
const DropdownTrigger = ({
  className,
  active,
  onClick,
  label,
  placeholder,
  value,
  ...others
}: DropdownTriggerWebProps): JSX.Element => {
  const [triggered, setTriggered] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()
  const { displayDropdown } = useDrodownContext()
  const stringValue = useMemo(() => value?.join(','), [value])
  const classes = hashClass(styled, clsx('dropdown-trigger', displayDropdown && is('triggered'), className))

  useEffect(() => {
    setTriggered(active || false)
  }, [active])

  return (
    <div
      role={'button'}
      onClick={(e: React.MouseEvent) => {
        const target = e.target as HTMLFormElement
        setTriggered(!triggered)
        target.active = !triggered
        if (onClick) {
          onClick({
            active: target.active,
          })
        }
      }}
      className={classes}
      {...others}
    >
      <div className={hashClass(styled, clsx('field'))}>
        <div className={hashClass(styled, clsx('control', has('dynamic-placeholder')))}>
          <div className={hashClass(styled, clsx('select', displayDropdown && 'select-show-options'))}>
            <select
              style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}
              aria-label={placeholder}
            >
              <option>{stringValue}</option>
            </select>
            <label className={hashClass(styled, clsx('input-dynamic-placeholder'))}>{label}</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownTrigger
