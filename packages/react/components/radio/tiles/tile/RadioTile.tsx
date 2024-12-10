import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps } from '@/components/radio/tiles/tile/RadioTileProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

/**
 * radioTile Component
 * @param checked {boolean} Checked radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for radio
 * @param description {ReactNode} Description for radio
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 * @param icon {IconName} icon for radio
 * @param horizontal Horizontal radio
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 */
const RadioTile = ({
  checked,
  className,
  disabled,
  readonly,
  id = React.useId(),
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
