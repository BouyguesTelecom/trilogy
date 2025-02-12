import { Icon, IconSize } from '@/components/icon'
import { RadioTileProps } from '@/components/radio/tiles/tile/RadioTileProps'
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
  children,
  ...others
}: RadioTileProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const Tag = horizontal ? 'div' : 'span'

  return (
    <div className={hashClass(styled, clsx('radio-tile', horizontal && is('horizontal'), className))}>
      <input
        type='radio'
        readOnly={readonly}
        id={id}
        disabled={disabled}
        name={name}
        value={value}
        checked={checked}
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
        <Tag>
          <span className={hashClass(styled, clsx('radio-title'))}>{label ?? children}</span>
          {description && <span className={hashClass(styled, clsx('radio-description'))}>{description}</span>}
        </Tag>
      </label>
    </div>
  )
}

export default RadioTile
