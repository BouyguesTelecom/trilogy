import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

import { Input } from '@/components/input'
import { SelectProps } from '@/components/select/SelectProps'
import { useSelectDynamic } from '@/components/select/web/hooks/useSelectDynamic'
import { hashClass } from '@/helpers'

const SelectDynamic = (
  {
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
  }: PropsWithChildren<SelectProps>,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element => {
  const { selectedName, onClickInput, focused, modal, options, onKeyUp, onKeyPress } = useSelectDynamic({
    onChange,
    nullable,
    children,
    selected,
    multiple,
  })

  return (
    <div className={hashClass(clsx('select', className))}>
      <Input
        ref={ref}
        value={selectedName && selectedName.join(', ')}
        testId={testId}
        name={name}
        disabled={disabled}
        placeholder={label}
        onFocus={onFocus}
        customIconLeft={iconName}
        onBlur={onBlur}
        onClick={onClickInput}
        className={hashClass(clsx(focused && 'focus'))}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        {...{ readOnly: true, id, role: 'listbox' }}
      />
      {focused && <div className={hashClass(clsx('select-options'))}>{options}</div>}
      {focused && ReactDOM.createPortal(modal, document.body)}
    </div>
  )
}
export default React.forwardRef(SelectDynamic)
