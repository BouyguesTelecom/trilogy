import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { SelectOption } from '@/components/select'
import { SelectProps, SelectRef } from '@/components/select/SelectProps'
import { useSelectNative } from '@/components/select/web/hooks/useSelectNative'
import { Text, TextMarkup } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography/TypographyColor'
import clsx from 'clsx'
import React from 'react'

const SelectNative = React.forwardRef<SelectRef, SelectProps>(
  (
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
      className,
      accessibilityLabel,
      required,
      ...others
    },
    ref,
  ): JSX.Element => {
    const selectClasses = hashClass(clsx('select', className))
    const controlClass = hashClass(clsx('control', iconName && 'has-icons-left'))

    const { focused, selectedValues, handleFocus, handleBlur, handleChange } = useSelectNative({
      onBlur,
      onChange,
      onFocus,
      selected,
    })

    return (
      <div className={selectClasses}>
        <div className={hashClass(clsx('field', focused && 'focus'))}>
          {label && (
            <label className={hashClass('input-label')} htmlFor={id}>
              {label}{' '}
              {required && (
                <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
                  *
                </Text>
              )}
            </label>
          )}
          <div className={controlClass}>
            <select
              ref={ref as React.RefObject<HTMLSelectElement>}
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
            {iconName && <Icon name={iconName} size='small' />}
          </div>
        </div>
      </div>
    )
  },
)

SelectNative.displayName = ComponentName.Select
export default SelectNative
