import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps } from '@/components/radio/tiles/tile/RadioTileProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

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
  return (
    <div className={hashClass(clsx('radio-tile', horizontal && is('horizontal'), className))}>
      <input
        type='radio'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
        onChange={
          onChange && !disabled && !readonly
            ? (e) => {
                onChange({
                  radioId: e.target.id,
                  radioValue: e.target.value,
                  radioName: e.target.name,
                  radioChecked: e.target.checked,
                })
              }
            : undefined
        }
        {...others}
      />
      <label htmlFor={id} className={hashClass(clsx('radio-label'))}>
        {icon && <Icon name={icon} size={IconSize.MEDIUM} />}
        {horizontal ? (
          <span>
            <span className={hashClass(clsx('radio-title'))}>{label}</span>
            {description && <span className={hashClass(clsx('radio-description'))}>{description}</span>}
          </span>
        ) : (
          <>
            <span className={hashClass(clsx('radio-title'))}>{label}</span>
            {description && <span className={hashClass(clsx('radio-description'))}>{description}</span>}
          </>
        )}
      </label>
    </div>
  )
}

export default RadioTile
