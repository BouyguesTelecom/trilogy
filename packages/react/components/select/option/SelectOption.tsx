import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { useSelectOption } from '../hook/useSelectOption'
import { SelectOptionProps, SelectOptionRef } from './SelectOptionProps'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param children {React.ReactNode}
 * @param label {string} option name
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param testId {string} id for testing
 * @param iconName {IconName | IconNameValues} icon
 * @param disabled {boolean} disable option
 * @param onClick {function} onclick function
 * @param id {string} Select option custom id
 * @param others
 */
const SelectOption = React.forwardRef<SelectOptionRef, SelectOptionProps>(
  ({ id, className, value = '', disabled, children, onClick, label, iconName, testId, ...others }, ref) => {
    const { isChecked, handleClickOption, custom, multiple } = useSelectOption({ value, children, label, id })
    const selectClasses = hashClass(clsx('option', isChecked && 'focus', disabled && is('disabled'), className))

    if (custom || multiple) {
      return (
        <li
          ref={ref as React.RefObject<HTMLLIElement>}
          id={id}
          className={selectClasses}
          data-selected={isChecked}
          role='option'
          aria-selected={isChecked}
          data-value={value}
          onClick={!disabled ? handleClickOption : undefined}
          {...others}
        >
          {iconName && <Icon name={iconName} />}
          {label || children}
        </li>
      )
    }

    return (
      <option
        ref={ref as React.RefObject<HTMLOptionElement>}
        role='option'
        id={id}
        value={value}
        disabled={disabled}
        aria-label={label}
        data-testid={testId}
        onClick={onClick}
        {...others}
      >
        {children || label}
      </option>
    )
  },
)

SelectOption.displayName = ComponentName.SelectOption
export default SelectOption
