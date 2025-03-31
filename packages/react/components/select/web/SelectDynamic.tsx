import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

import { ComponentName } from '@/components/enumsComponentsName'
import { Input } from '@/components/input'
import { SelectProps, SelectRef } from '@/components/select/SelectProps'
import { hashClass } from '@/helpers'
import { useSelectDynamic } from './hooks/useSelectDynamic'

const SelectDynamic = React.forwardRef<SelectRef, PropsWithChildren<SelectProps>>(
  (
    { onChange, disabled, onFocus, onBlur, children, selected, name, id, label, iconName, multiple, className },
    ref,
  ): JSX.Element => {
    const { selectedName, onClickInput, focused, modal, options, onKeyUp, onKeyPress } = useSelectDynamic({
      onChange,
      children,
      selected,
      multiple,
    })

    const selectClasses = hashClass(clsx('select', className))
    const optionsClasses = hashClass(clsx('select-options'))

    return (
      <div className={selectClasses}>
        <Input
          ref={ref as React.RefObject<HTMLInputElement>}
          defaultValue={selectedName && selectedName.join(', ')}
          value={selectedName && selectedName.join(', ')}
          name={name}
          disabled={disabled}
          placeholder={label}
          onFocus={onFocus}
          iconNameLeft={iconName}
          onBlur={onBlur}
          onClick={onClickInput}
          className={hashClass(clsx(focused && 'focus'))}
          {...{ readOnly: true, id, role: 'combobox' }}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
        />
        {focused && (
          <ul role='listbox' className={optionsClasses}>
            {options}
          </ul>
        )}
        {focused && ReactDOM.createPortal(modal, document.body)}
      </div>
    )
  },
)

SelectDynamic.displayName = ComponentName.Select
export default SelectDynamic
