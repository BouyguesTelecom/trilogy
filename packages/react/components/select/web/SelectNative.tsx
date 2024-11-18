import clsx from 'clsx'
import React from 'react'

import { Icon } from '@/components/icon'
import { SelectOption } from '@/components/select'
import { SelectProps } from '@/components/select/SelectProps'
import { useSelectNative } from '@/components/select/web/hooks/useSelectNative'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'

const SelectNative = (
  {
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
  }: SelectProps,
  ref: React.Ref<HTMLSelectElement>,
): JSX.Element => {
  const { focused, selectedValues, handleFocus, handleBlur, handleChange } = useSelectNative({
    onBlur,
    onChange,
    onFocus,
    selected,
  })

  const controlClass = hashClass(clsx('control', has('dynamic-placeholder'), iconName && 'has-icons-left'))

  return (
    <div className={hashClass(clsx('select', className))}>
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
            ref={ref}
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
}

export default React.forwardRef(SelectNative)
