import clsx from 'clsx'
import React from 'react'

import { CheckboxProps } from '@/components/checkbox/CheckboxProps'
import { useCheckbox } from '@/components/checkbox/hook/useCheckbox'
import { Icon, IconSize } from '@/components/icon'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Checkbox Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param children {React.ReactNode}
 * @param tile {boolean} Checbox Tile
 * @param description {string} Description for Checkbox tile
 * @param iconTile {IconName} Name of icon for checkbox tile
 * @param testId {string} Test Id for Test Integration
 * @param horizontalTile {boolean} display horizontal Checkbox tile
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param value {string} Value for checkbox
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 */
const Checkbox = (
  {
    checked,
    className,
    disabled,
    readonly,
    id = React.useId(),
    label,
    onChange,
    onClick,
    name,
    value,
    tile,
    description,
    iconTile,
    horizontalTile,
    testId,
    ...others
  }: CheckboxProps,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element => {
  const { handleChange, handleClick, _checked } = useCheckbox({ checked, readonly, value, onChange, onClick })

  return (
    <div
      className={hashClass(clsx(tile ? 'checkbox-tile' : 'checkbox', horizontalTile && is('horizontal'), className))}
      tabIndex={0}
    >
      <input
        ref={ref}
        aria-checked={checked}
        type='checkbox'
        readOnly={readonly}
        id={id}
        data-testid={testId}
        disabled={disabled}
        name={name}
        value={value}
        checked={readonly ? checked : _checked}
        onChange={handleChange}
        onClick={handleClick}
        {...others}
      />
      <label htmlFor={id} className={hashClass(clsx('checkbox-label'))}>
        {iconTile && <Icon name={iconTile} size={IconSize.MEDIUM} />}
        {horizontalTile ? (
          <span>
            {tile ? <span className={hashClass(clsx('checkbox-title'))}>{label}</span> : label}
            {tile && description && <span className={hashClass(clsx('checkbox-description'))}>{description}</span>}
          </span>
        ) : (
          <>
            {tile ? <span className={hashClass(clsx('checkbox-title'))}>{label}</span> : label}
            {tile && description && <span className={hashClass(clsx('checkbox-description'))}>{description}</span>}
          </>
        )}
      </label>
    </div>
  )
}

export default React.forwardRef(Checkbox)
