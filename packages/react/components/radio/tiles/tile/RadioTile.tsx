import * as React from 'react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { RadioTileProps } from './RadioTileProps'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { Icon, IconSize } from '@/components/icon'
import shortid from 'shortid'

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const RadioTile = ({
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
}: RadioTileProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  return (
    <div className={hashClass(styled, clsx('radio-tile', horizontal && is('horizontal'), className))}>
      <input
        type='radio'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        onChange={(e) => (onChange ? onChange : setChecked(e.target.checked))}
        {...others}
      />
      <label htmlFor={id} className={hashClass(styled, clsx('radio-label'))}>
        {icon && <Icon name={icon} size={IconSize.MEDIUM} />}
        {horizontal ? (
          <span>
            <span className={hashClass(styled, clsx('radio-title'))}>{label}</span>
            {description && <span className={hashClass(styled, clsx('radio-description'))}>{description}</span>}
          </span>
        ) : (
          <>
            <span className={hashClass(styled, clsx('radio-title'))}>{label}</span>
            {description && <span className={hashClass(styled, clsx('radio-description'))}>{description}</span>}
          </>
        )}
      </label>
    </div>
  )
}

export default RadioTile
