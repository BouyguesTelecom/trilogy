import { Input } from '@/components/input'
import { SelectProps } from '@/components/select/SelectProps'
import { useSelectDynamic } from '@/components/select/web/hooks/useSelectDynamic'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

const SelectDynamic = ({
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
}: PropsWithChildren<SelectProps>): JSX.Element => {
  const selectClasses = hashClass(clsx('select', className))

  const { selectedName, onClickInput, focused, modal, options, onKeyUp, onKeyPress } = useSelectDynamic({
    onChange,
    children,
    selected,
    multiple,
  })

  return (
    <div className={selectClasses}>
      <Input
        value={selectedName && selectedName.join(', ')}
        name={name}
        disabled={disabled}
        placeholder={label}
        onFocus={onFocus}
        iconNameLeft={iconName}
        onBlur={onBlur}
        onClick={onClickInput}
        className={hashClass(clsx(focused && 'focus'))}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        {...{ readOnly: true, id, role: 'combobox' }}
      />
      {focused && (
        <ul role='listbox' className={hashClass(clsx('select-options'))}>
          {options}
        </ul>
      )}
      {focused && ReactDOM.createPortal(modal, document.body)}
    </div>
  )
}
export default SelectDynamic
