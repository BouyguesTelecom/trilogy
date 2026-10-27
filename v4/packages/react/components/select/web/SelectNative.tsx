import clsx from 'clsx'
import { ChangeEvent, Children, FocusEvent as ReactFocusEvent, RefObject, forwardRef, isValidElement, useCallback, useEffect, useId, useState } from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { SelectOption } from '@/components/select'
import { ParamEventSelectFocus, SelectProps, SelectRef } from '@/components/select/SelectProps'
import { Text, TextLevels, TextMarkup } from '@/components/text'
import { useTrilogyContext } from '@/context/TrilogyContext'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects/Typography/TypographyColor'
import { is } from '@/services/classify'

const SelectNative = forwardRef<SelectRef, SelectProps>(
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
      status,
      required,
      sample,
      help,
      readOnly,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const idHelp = useId()
    const idSample = useId()

    const [focused, setIsFocused] = useState<boolean>(false)
    const [selectedValues, setSelectedValues] = useState(selected)
    const selectClasses = hashClass(styled, clsx('select', className))
    const controlClass = hashClass(styled, clsx('control', iconName && 'has-icons-left'))
    const helpClasses = clsx('help', status && is(status))

    const handleFocus = useCallback((e: ParamEventSelectFocus) => {
      setIsFocused(true)
      onFocus && onFocus(e)
    }, [])

    const handleBlur = useCallback((e: ReactFocusEvent<HTMLSelectElement, Element>) => {
      setIsFocused(false)
      onBlur && onBlur(e)
    }, [])

    useEffect(() => {
      setSelectedValues(selected)
    }, [selected])

    return (
      <div className={selectClasses}>
        <div className={hashClass(styled, clsx('field', focused && 'focus'))}>
          {label && (
            <label className={hashClass(styled, 'input-label')} htmlFor={id}>
              {label}{' '}
              {required && (
                <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
                  *
                </Text>
              )}
            </label>
          )}
          {sample && (
            <Text className='input-sample' level={TextLevels.TWO} id={idSample}>
              {sample}
            </Text>
          )}
          <div className={controlClass}>
            <select
              ref={ref as RefObject<HTMLSelectElement>}
              className={hashClass(styled, clsx(!label && 'no-label', status && is(status)))}
              value={selectedValues}
              aria-label={accessibilityLabel}
              data-testid={testId}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
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
              {Children.map(children, (child) => {
                if (!isValidElement(child)) return null
                const props = {
                  ...child.props,
                  native: 'true',
                }
                return <SelectOption {...props} />
              })}
            </select>
            {iconName && <Icon name={iconName} size='small' />}
          </div>
          {help && (
            <Text className={helpClasses} id={idHelp}>
              {help}
            </Text>
          )}
        </div>
      </div>
    )
  },
)

SelectNative.displayName = ComponentName.Select
export default SelectNative
