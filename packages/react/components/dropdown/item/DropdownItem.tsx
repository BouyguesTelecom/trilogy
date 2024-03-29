import React, { useEffect, useState } from 'react'
import { DropdownItemWebProps } from './DropdownItemProps'
import { Checkbox } from '../../checkbox'
import shortid from 'shortid'
import clsx from 'clsx'
import { hashClass } from '../../../helpers'
import { useTrilogyContext } from '../../../context'

/**
 * Dropdown Item Component - Working like radio component
 * @param id {string} By default random id generated
 * @param className {string} Additionnal CSS Classes
 * @param label {string} Dropdown item label
 * @param disabled {boolean} Disabled dropdown item
 * @param readonly {boolean} Readonly dropdown item
 * @param name {string} Dropdown Item name
 * @param value {string} Dropdown Item name
 * @param children {React.ReactNode}
 * @param checked {boolean} If checked
 * @param onClick {clickEvent} OnClick
 * @param onChange {changeEvent} OnChange
 */
const DropdownItem = ({
  children,
  id = shortid.generate(),
  className,
  label,
  disabled,
  readonly,
  name,
  value,
  checked,
  onClick,
  onChange,
  ...others
}: DropdownItemWebProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('dropdown-item', className))

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  if (!children) {
    return (
      <div className={classes} {...others}>
        <Checkbox
          id={id}
          label={label || ''}
          disabled={disabled}
          readonly={readonly}
          name={name}
          value={value}
          checked={readonly ? checked : _checked}
          onClick={(e) => {
            if (!readonly && e.checkboxChecked !== undefined) {
              setChecked(e.checkboxChecked)
            }
            if (onClick) {
              onClick({
                itemId: e.checkboxId,
                itemValue: e.checkboxValue,
                itemChecked: e.checkboxChecked,
                itemLabel: label,
              })
            }
            if (onChange) {
              onChange({
                itemId: e.checkboxId,
                itemValue: e.checkboxValue,
                itemChecked: e.checkboxChecked,
                itemLabel: label,
              })
            }
          }}
        />
      </div>
    )
  }

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default DropdownItem
