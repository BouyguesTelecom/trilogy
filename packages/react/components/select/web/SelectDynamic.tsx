import clsx from 'clsx'
import React, { PropsWithChildren, useContext, useMemo } from 'react'
import ReactDOM from 'react-dom'

import { ComponentName } from '@/components/enumsComponentsName'
import { Input } from '@/components/input'
import { SelectProps, SelectRef } from '@/components/select/SelectProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { SelectContext } from '../context'

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
      help,
      sample,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const { setIsVisibleOptions, isVisibleOptions, selectedOptionValues } = useContext(SelectContext)

    const selectClasses = hashClass(styled, clsx('select', className))
    const optionsClasses = hashClass(styled, clsx('select-options'))
    const portalClasses = hashClass(styled, 'select-trilogy_modal_open')

    const onClickInput = () => setIsVisibleOptions((prev) => !prev)
    const onCloseOptions = () => setIsVisibleOptions(false)

    const onKeyPressInput = (keyCode: number) => {
      setIsVisibleOptions((prev) => {
        if (keyCode === 27) return false
        if (keyCode === 13) return !prev
        return prev
      })
    }

    const options = useMemo(() => {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return false
        return {
          label: child.props.children || child.props.label,
          value: child.props.value,
        }
      })?.filter((option) => option)
    }, [])

    const labelsSelected = useMemo(() => {
      return selectedOptionValues.map((selectedOption) => {
        const elm = options?.find((opt) => opt.value === selectedOption)
        return elm?.label
      })
    }, [selectedOptionValues, options])

    return (
      <div className={selectClasses} {...others}>
        <Input
          sample={sample}
          help={help}
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
          onKeyUp={(e) => {
            e.preventDefault()
            onKeyPressInput(e.inputKeyCode)
          }}
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
