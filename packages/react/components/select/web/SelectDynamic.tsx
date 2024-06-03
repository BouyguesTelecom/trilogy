import clsx from 'clsx'
import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

import { hashClass } from '../../../helpers'
import { Input } from '../../input'
import { SelectProps, SelectedValue } from '../SelectProps'
import SelectOption from '../option'
import { useTrilogyContext } from './../../../context'

const SelectDynamic = ({
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
}: PropsWithChildren<SelectProps>): JSX.Element => {
  const { styled } = useTrilogyContext()
  const [focused, setIsFocused] = React.useState<boolean>(false)
  const [selectedValues, setSelectedValues] = React.useState<SelectedValue>(selected)
  const [selectedName, setSelectedName] = React.useState<string[]>([])
  const reactId = React.useId()
  const selectClasses = React.useMemo(() => hashClass(styled, clsx('select', className)), [styled, className])
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const onClickInput = React.useCallback(() => {
    setIsFocused((prev) => !prev)
  }, [])

  const onKeyPressInput = React.useCallback((keyCode: number) => {
    keyCode === 0 && setIsFocused((prev) => !prev)
  }, [])

  const isChecked = useCallback(
    (value: string) => (multiple ? (selectedValues as (number | string)[])?.includes(value) : selectedValues === value),
    [multiple, selectedValues],
  )

  const setNewSelectedValues = useCallback(
    ({ isChecked, children, label, value }: { isChecked: boolean; children: string; label: string; value: any }) => {
      const selectedOptions: (string | number)[] = []
      if (isChecked) {
        setSelectedValues((prev) => {
          switch (true) {
            case Array.isArray(prev) && nullable:
              setSelectedName((prev) => prev.filter((txt) => ![children, label].includes(txt)))
              const opts = (prev as (number | string)[]).filter((item: string | number) => item !== value)
              selectedOptions.push(...opts)
              return opts
            case Array.isArray(prev) && !nullable:
              selectedOptions.push(...prev)
              return prev
            case !Array.isArray(prev) && !nullable:
              selectedOptions.push(value)
              setIsFocused(false)
              return prev
            case !Array.isArray(prev) && nullable:
              setIsFocused(false)
              setSelectedName([])
              return undefined
            default:
              return value
          }
        })
      }
      if (!isChecked) {
        setSelectedValues((prev) => {
          if (Array.isArray(prev)) {
            const opts = [...prev, value]
            selectedOptions.push(...opts)
            return opts
          }
          selectedOptions.push(value)
          return value
        })

        if (multiple) setSelectedName((prev) => [...prev, children || label])

        if (!multiple) {
          setSelectedName([children || label])
          setIsFocused(false)
        }
      }
      return selectedOptions
    },
    [multiple, nullable],
  )

  React.useEffect(() => {
    const setInputValue = () => {
      const labelSelected = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return false
        const label = child.props.children || child.props.label
        switch (true) {
          case (Array.isArray(selected) && (selected as (number | string)[]).includes(child.props.value)) ||
            (!Array.isArray(selected) && child.props.value === selected):
            return label
          default:
            return false
        }
      })?.filter((item) => item)
      labelSelected && setSelectedName(labelSelected)
    }
    setInputValue()
    setSelectedValues(selected)
  }, [selected])

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) e.preventDefault()
      switch (true) {
        case e.key === 'ArrowDown':
          options && setFocusedIndex((prev) => (prev + 1) % options.length)
          break
        case e.key === 'ArrowUp' && focusedIndex !== -1:
          options && setFocusedIndex((prev) => (prev - 1 + options.length) % options.length)
          break
        case e.key === 'ArrowUp' && focusedIndex === -1:
          options && setFocusedIndex(() => options.length - 1)
          break
        case e.key === 'Enter' && focusedIndex !== -1:
          const childs = (children as React.ReactElement[])[focusedIndex]
          setNewSelectedValues({
            children: childs.props.children,
            label: childs.props.label,
            value: childs.props.value,
            isChecked: isChecked(childs.props.value),
          })
          break
      }
    }
    focused && document.addEventListener('keydown', onKeyDown)
    !focused && setFocusedIndex(-1)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [focused, focusedIndex])

  const modal = useMemo(() => {
    return <div role='presentation' className='select-trilogy_modal_open' onClick={() => setIsFocused(false)}></div>
  }, [])

  const options = React.useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return null

      const clickEventValue = (v: string) => {
        switch (true) {
          case (nullable && multiple && (selectedValues as (number | string)[])?.includes(child.props.value)) ||
            (nullable && !multiple && selectedValues === child.props.value):
            return undefined
          default:
            return v
        }
      }

      const props = {
        ...child.props,
        checked: isChecked(child.props.value),
        focused: focusedIndex === index,
        onClick: () => {
          const opts = setNewSelectedValues({
            children: child.props.children,
            label: child.props.label,
            value: child.props.value,
            isChecked: isChecked(child.props.value),
          })
          onChange &&
            onChange({
              selectValue: clickEventValue(child.props.value),
              selectName: clickEventValue(child.props.children || child.props.label),
              selectId: clickEventValue(child.props.id),
              name: clickEventValue(child.props.children || child.props.label),
              selectedOptions: opts,
            })
          if (child.props.onClick) child.props.onClick()
        },
      }
      return <SelectOption {...props} key={`${reactId}_${index}`} />
    })
  }, [multiple, nullable, selectedValues, focusedIndex])

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
        onClick={onClickInput}
        className={hashClass(styled, clsx(focused && 'focus'))}
        onKeyPress={(e) => onKeyPressInput(e.inputKeyCode)}
        {...{ readOnly: true, id }}
      />
      {focused && <div className={hashClass(styled, clsx('select-options'))}>{options}</div>}
      {focused && ReactDOM.createPortal(modal, document.body)}
    </div>
  )
}
export default SelectDynamic
