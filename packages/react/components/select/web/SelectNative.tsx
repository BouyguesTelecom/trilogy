import clsx from 'clsx'
import * as React from 'react'

import { hashClass } from '../../../helpers'
import { has, is } from '../../../services'
import { Icon } from '../../icon'
import { ParamEventSelectFocus, SelectProps } from '../SelectProps'
import SelectOption from '../option'
import { useTrilogyContext } from './../../../context'

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
  const selectClasses = React.useMemo(() => hashClass(styled, clsx('select', className)), [styled, className])
  const [focused, setIsFocused] = React.useState<boolean>(false)

  const controlClasses = React.useMemo(
    () =>
      hashClass(
        styled,
        clsx('control', has('dynamic-placeholder'), iconName && 'has-icons-left', iconName && 'has-icons-right'),
      ),
    [styled],
  )
  const classes = React.useMemo(
    () => hashClass(styled, clsx('input', disabled && is('disabled'), 'select-native', className)),
    [styled, disabled, iconName, className],
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
        <div className={controlClasses}>
          <div className={classes}>
            <select
              className={hashClass(styled, clsx(!label && 'no-label'))}
              value={selected as string}
              aria-label={accessibilityLabel}
              data-testid={testId}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                if (onChange) {
                  onChange({
                    selectValue: e.target.value,
                    selectName: e.target.name,
                    selectId: e.target.id,
                    name: e.target.name,
                    selectedOptions: [e.target.value],
                  })
                }
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              id={id ? String(id) : undefined}
              name={name}
              disabled={disabled}
              {...others}
            >
              {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return null
                const props = {
                  ...child.props,
                }
                return <SelectOption {...props} native='true' />
              })}
            </select>
          </div>
          {label && <label htmlFor={id}>{label}</label>}
          {iconName && (
            <div>
              <Icon name={iconName} size='small' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SelectNative
