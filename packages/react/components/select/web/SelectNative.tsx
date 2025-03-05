import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { SelectOption } from '@/components/select'
import { SelectProps, SelectRef } from '@/components/select/SelectProps'
import { useSelectNative } from '@/components/select/web/hooks/useSelectNative'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'

const SelectNative = React.forwardRef<SelectRef, SelectProps>(
  ({
    onChange,
    disabled,
    onFocus,
    onBlur,
    children,
    selected,
    name,
    id,
    testId,
    label,
    iconName,
    multiple,
    className,
    accessibilityLabel,
    ...others
  }: SelectProps): JSX.Element => {
    const selectClasses = hashClass(clsx('select', className))
    const controlClass = hashClass(clsx('control', has('dynamic-placeholder'), iconName && 'has-icons-left'))

    const { focused, selectedValues, handleFocus, handleBlur, handleChange } = useSelectNative({
      onBlur,
      onChange,
      onFocus,
      selected,
    })

    return (
      <div className={selectClasses}>
        <div className={hashClass(clsx('field', focused && 'focus'))}>
          <div className={controlClass}>
            <select
              className={hashClass(clsx(!label && 'no-label'))}
              value={selectedValues}
              aria-label={accessibilityLabel}
              data-testid={testId}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              id={id ? String(id) : undefined}
              name={name}
              disabled={disabled}
              role='listbox'
              {...others}
            >
              {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return null
                const props = {
                  ...child.props,
                  native: 'true',
                }
                return <SelectOption {...props} />
              })}
            </select>
            {label && !multiple && <label htmlFor={id}>{label}</label>}
            {iconName && <Icon name={iconName} size='small' />}
          </div>
        </div>
      </div>
    )
  },
)

SelectNative.displayName = ComponentName.Select
export default SelectNative
