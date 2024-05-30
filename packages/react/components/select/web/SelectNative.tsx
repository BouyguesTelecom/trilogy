import clsx from 'clsx'
import * as React from 'react'
import { hashClass } from '../../../helpers'
import { has } from '../../../services'
import { Icon } from '../../icon'
import { SelectProps } from '../SelectProps'
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
  ...others
}: SelectProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const controlClasses = React.useMemo(() => hashClass(styled, clsx('control', has('dynamic-placeholder'))), [styled])
  const selectClasses = React.useMemo(() => hashClass(styled, clsx('select', className)), [styled, className])

  return (
    <div className={hashClass(styled, clsx('field'))}>
      <div className={controlClasses}>
        <div className={className}>
          {iconName && <Icon name={iconName} size='small' />}
          <select
            className={hashClass(styled, clsx(!label && 'no-label'))}
            value={selected as string}
            aria-label={selectClasses}
            data-testid={testId}
            role='listbox'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              if (onChange) {
                onChange({
                  selectValue: e.target.value,
                  selectName: e.target.name,
                  selectId: e.target.id,
                  name: e.target.name,
                })
              }
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            id={id ? String(id) : undefined}
            name={name}
            disabled={disabled}
            {...others}
          >
            {children}
          </select>
          {label && <label htmlFor={id}>{label}</label>}
        </div>
      </div>
    </div>
  )
}

export default SelectNative
