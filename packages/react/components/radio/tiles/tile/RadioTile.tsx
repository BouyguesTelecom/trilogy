import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps, RadioTileRef } from '@/components/radio/tiles/tile/RadioTileProps'
import { useTrilogyContext } from '@/context'
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
 * @param required {boolean} Required radio
 */
const RadioTile = React.forwardRef<RadioTileRef, RadioTileProps>(({
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
  required,
  ...others
}, ref): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div ref={ref} className={hashClass(styled, clsx('radio-tile', horizontal && is('horizontal'), className))}>
      <input
        type='radio'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
        required={required}
        onChange={(e) => {
          if (onChange && !disabled && !readonly) {
            onChange({
              radioId: e.target.id,
              radioValue: e.target.value,
              radioName: e.target.name,
              radioChecked: e.target.checked,
            })
          }
        }}
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
})

RadioTile.displayName = ComponentName.RadioTile
export default RadioTile
