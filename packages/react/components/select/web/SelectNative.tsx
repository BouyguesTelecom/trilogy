import clsx from 'clsx'
import * as React from 'react'

import { hashClass } from '../../../helpers'
import { Input } from '../../input'
import { SelectProps } from '../SelectProps'
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
  ...others
}: SelectProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const selectClasses = React.useMemo(() => hashClass(styled, clsx('select-native', className)), [styled, className])
  const [focused, setIsFocused] = React.useState<boolean>(false)
  const [selectedName, setSelectedName] = React.useState<string[]>([])

  return (
    <div className={selectClasses}>
      <Input
        value={selectedName.join(', ')}
        testId={testId}
        name={name}
        disabled={disabled}
        placeholder={label}
        onFocus={onFocus}
        customIconLeft={iconName}
        customIconRight={focused ? 'tri-arrow-up' : 'tri-arrow-down'}
        onBlur={onBlur}
        {...{ readOnly: true, id }}
      />
      <select
        id='trilogy-input'
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
        //id={id}
        name={name}
        disabled={disabled}
        {...others}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return <SelectOption {...(child.props, { native: true } as any)} />
          }
          return null
        })}
      </select>
    </div>
  )
}

export default SelectNative
