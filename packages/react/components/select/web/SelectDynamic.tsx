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
    {
      onChange,
      disabled,
      onFocus,
      onBlur,
      children,
      selected,
      name,
      id,
      label,
      iconName,
      multiple,
      className,
      status,
      placeholder,
      required,
      custom,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { onKeyUp, labelsSelected, onClickInput, onCloseOptions, isVisibleOptions } = useSelectDynamic({
      children,
      selected,
    })

    const selectClasses = hashClass(clsx('select', className))
    const optionsClasses = hashClass(clsx('select-options'))
    const portalClasses = hashClass('select-trilogy_modal_open')

    return (
      <div className={selectClasses} {...others}>
        <Input
          required={required}
          status={status}
          ref={ref as React.RefObject<HTMLInputElement>}
          value={labelsSelected?.join(', ')}
          name={name}
          disabled={disabled}
          label={label}
          placeholder={placeholder}
          onFocus={onFocus}
          iconNameLeft={iconName}
          onBlur={onBlur as (event: unknown) => void}
          onClick={onClickInput}
          className={isVisibleOptions ? 'focus' : undefined}
          onKeyPress={(e) => {
            e.preventDefault()
          }}
          onKeyUp={onKeyUp}
          {...{ readOnly: true, id, role: 'combobox' }}
        />
        <ul role='listbox' className={optionsClasses} style={{ display: isVisibleOptions ? 'block' : 'none' }}>
          {children}
        </ul>
        {isVisibleOptions &&
          ReactDOM.createPortal(
            <div role='presentation' className={portalClasses} onClick={onCloseOptions} />,
            document.body,
          )}
      </div>
    )
  },
)

SelectDynamic.displayName = ComponentName.Select
export default SelectDynamic
