import clsx from 'clsx'
import * as React from 'react'

import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import { Icon, IconSize } from '@/components/icon'
import { ParamEventSelectFocus, SelectProps } from '@/components/select/SelectProps'
import { SelectOption } from '@/components/select'
import { useTrilogyContext } from '@/context/index'

const SelectNative = ({
  onChange,
  nullable,
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
  const { styled } = useTrilogyContext()
  const selectClasses = React.useMemo(() => hashClass(styled, clsx('select', className)), [styled, className, iconName])
  const [focused, setIsFocused] = React.useState<boolean>(false)
  const [selectedValues, setSelectedValues] = React.useState(selected)

  React.useEffect(() => {
    setSelectedValues(selected)
  }, [selected])

  const classes = React.useMemo(
    () => ({
      input: hashClass(
        styled,
        clsx('input', disabled && is('disabled'), 'select-native', multiple && 'multiple', className),
      ),
      control: hashClass(
        styled,
        clsx('control', has('dynamic-placeholder'), iconName && 'has-icons-left', iconName && 'has-icons-right'),
      ),
    }),
    [styled, disabled, iconName, className, multiple],
  )

  const handleFocus = React.useCallback((e: ParamEventSelectFocus) => {
    setIsFocused(true)
    onFocus && onFocus(e)
  }, [])

  const handleBlur = React.useCallback((e: ParamEventSelectFocus) => {
    setIsFocused(false)
    onBlur && onBlur(e)
  }, [])

  return (
    <div className={selectClasses}>
      <div className={hashClass(styled, clsx('field', focused && 'focus'))}>
        <div className={classes.control}>
          <div className={classes.input}>
            <select
              multiple={multiple}
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
                  })
                }
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              id={id ? String(id) : undefined}
              name={name}
              disabled={disabled}
              {...others}
              role='listbox'
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
          </div>
          {label && !multiple && <label htmlFor={id}>{label}</label>}
          {iconName && (
            <div>
              <Icon name={iconName} size='small' />
            </div>
          )}
          {!multiple && (
            <div>
              <Icon className='icon-right' name={focused ? 'tri-arrow-up' : 'tri-arrow-down'} size={IconSize.SMALL} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SelectNative
