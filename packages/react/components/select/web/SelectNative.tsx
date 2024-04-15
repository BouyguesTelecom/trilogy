import React from 'react'
import { Icon } from '../../icon'
import { IAccessibleSelect } from '../SelectProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { has } from '../../../services/classify'

const SelectNative = ({
  selecteClasses,
  onChange,
  onFocus,
  onBlur,
  id,
  name,
  disabled,
  children,
  label,
  iconName,
  styled,
  testId,
  accessibilityLabel,
  selected,
  ...others
}: IAccessibleSelect): JSX.Element => {
  const controlClasses = React.useMemo(() => hashClass(styled, clsx('control', has('dynamic-placeholder'))), [styled])

  return (
    <div className={hashClass(styled, clsx('field'))}>
      <div className={controlClasses}>
        <div className={selecteClasses}>
          {iconName && <Icon name={iconName} size='small' />}
          <select
            className={hashClass(styled, clsx(!label && 'no-label'))}
            value={selected}
            aria-label={accessibilityLabel}
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
