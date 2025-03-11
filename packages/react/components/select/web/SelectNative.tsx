import clsx from 'clsx'
import * as React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { SelectOption } from '@/components/select'
import { ParamEventSelectFocus, SelectProps, SelectRef } from '@/components/select/SelectProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'

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
      multiple,
      className,
      accessibilityLabel,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const [focused, setIsFocused] = React.useState<boolean>(false)
    const [selectedValues, setSelectedValues] = React.useState(selected)
    const selectClasses = hashClass(styled, clsx('select', className))
    const controlClass = hashClass(styled, clsx('control', has('dynamic-placeholder'), iconName && 'has-icons-left'))

    const handleFocus = React.useCallback((e: ParamEventSelectFocus) => {
      setIsFocused(true)
      onFocus && onFocus(e)
    }, [])

    const handleBlur = React.useCallback((e: React.FocusEvent<HTMLSelectElement, Element>) => {
      setIsFocused(false)
      onBlur && onBlur(e)
    }, [])

    React.useEffect(() => {
      setSelectedValues(selected)
    }, [selected])

    return (
      <div className={selectClasses}>
        <div className={hashClass(styled, clsx('field', focused && 'focus'))}>
          <div className={controlClass}>
            <select
              ref={ref as React.RefObject<HTMLSelectElement>}
              className={hashClass(styled, clsx(!label && 'no-label'))}
              value={selectedValues}
              aria-label={accessibilityLabel}
              data-testid={testId}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const selectedV = Array.from(e.target.selectedOptions).map((select) => select.value)
                setSelectedValues(selectedV)
                if (onChange) {
                  onChange({
                    selectValue: e.target.value,
                    selectName: e.target.name,
                    selectId: e.target.id,
                    name: e.target.name,
                    selectedOptions: selectedV,
                    target: e.target,
                  })
                }
              }}
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
