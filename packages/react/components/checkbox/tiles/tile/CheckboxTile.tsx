import * as React from 'react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { CheckboxTileProps } from './CheckboxTileProps'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { Icon, IconSize } from '@/components/icon'
import shortid from 'shortid'

/**
 * CheckboxTile
 * @param id {string}
 * @param checked {Boolean}
 * @param disabled {Boolean}
 * @param readonly {Boolean}
 * @param label {string}
 * @param onChange {Function}
 * @param name {string}
 * @param value {string}
 * @param description {string}
 * @param icon {IconName}
 * @param horizontal {boolean}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const CheckboxTile = ({
  checked,
  className,
  disabled,
  readonly,
  id = shortid.generate(),
  label,
  onChange,
  name,
  value,
  description,
  icon,
  horizontal,
  ...others
}: CheckboxTileProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  return (
    <div className={hashClass(styled, clsx('checkbox-tile', horizontal && is('horizontal'), className))}>
      <input
        type='checkbox'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        onChange={(e) => (onChange ? onChange : setChecked(e.target.checked))}
        {...others}
      />
      <label htmlFor={id} className={hashClass(styled, clsx('checkbox-label'))}>
        {icon && <Icon name={icon} size={IconSize.MEDIUM} />}
        {horizontal ? (
          <span>
            <span className={hashClass(styled, clsx('checkbox-title'))}>{label}</span>
            {description && <span className={hashClass(styled, clsx('checkbox-description'))}>{description}</span>}
          </span>
        ) : (
          <>
            <span className={hashClass(styled, clsx('checkbox-title'))}>{label}</span>
            {description && <span className={hashClass(styled, clsx('checkbox-description'))}>{description}</span>}
          </>
        )}
      </label>
    </div>
  )
}

export default CheckboxTile
