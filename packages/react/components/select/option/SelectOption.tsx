import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { SelectContext } from '../context'
import { SelectedValue } from '../SelectProps'
import { SelectOptionProps, SelectOptionRef } from './SelectOptionProps'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param children {React.ReactNode}
 * @param label {string} option name
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} id for testing
 * @param iconName {IconName | IconNameValues} icon
 * @param disabled {boolean} disable option
 * @param onClick {function} onclick function
 * @param id {string} Select option custom id
 * @param others
 */
const SelectOption = React.forwardRef<SelectOptionRef, SelectOptionProps>(
  ({ id, className, value = '', disabled, children, onClick, label, iconName, testId, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    const { custom, selectedOptionValues, setSelectedOptionValues, multiple, setIsVisibleOptions, onChange } =
      React.useContext(SelectContext)

    const isChecked = selectedOptionValues.includes(value)

    const selectClasses = hashClass(styled, clsx('option', isChecked && 'focus', disabled && is('disabled'), className))

    const handleClickOption = () => {
      setSelectedOptionValues((prev: SelectedValue[]) => {
        const isInclude = prev.includes(value)

        const newOptionsSelected =
          !multiple && isInclude
            ? []
            : !multiple && !isInclude
            ? [value]
            : isInclude
            ? prev.filter((opt) => opt !== value)
            : [...prev, value]

        if (onChange) {
          onChange({
            selectValue: isInclude ? undefined : value,
            selectName: isInclude ? undefined : children || label,
            selectId: isInclude ? undefined : id,
            name: isInclude ? undefined : children || label,
            selectedOptions: newOptionsSelected as string[],
            target: undefined as unknown as EventTarget & HTMLSelectElement,
          })
        }

        return newOptionsSelected
      })

      if (!multiple) setIsVisibleOptions(false)
    }

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
        {...others}
      >
        {children || label}
      </option>
    )
  },
)

SelectOption.displayName = ComponentName.SelectOption
export default SelectOption
