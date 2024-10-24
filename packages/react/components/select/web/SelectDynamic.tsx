import clsx from 'clsx'
import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

import { Input } from '@/components/input'
import { SelectProps, SelectedValue } from '@/components/select/SelectProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers'
import { SelectOption } from '../'

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

  const onKeyPressInput = React.useCallback(
    (keyCode: number) => {
      if (keyCode === 13) {
        setIsFocused((prev) => {
          if (multiple && !prev) return true
          if (multiple && prev) return prev
          return !prev
        })
      }
    },
    [multiple],
  )

  const isChecked = useCallback(
    (value: string) =>
      multiple && selectedValues && typeof selectedValues !== 'string' && typeof selectedValues !== 'number'
        ? selectedValues?.includes(value)
        : selectedValues === value,
    [multiple, selectedValues],
  )

  const setNewSelectedValues = useCallback(
    ({ isChecked, children, label, value }: { isChecked: boolean; children: string; label: string; value: string }) => {
      const selectedOptions: string[] = []
      if (isChecked) {
        setSelectedValues((prev) => {
          switch (true) {
            case Array.isArray(prev) && nullable:
              setSelectedName((prev) => prev.filter((txt) => ![children, label].includes(txt)))
              const opts = (prev as string[]).filter((item: string | number) => item !== value)
              selectedOptions.push(...opts)
              return opts
            case Array.isArray(prev) && !nullable:
              selectedOptions.push(...(prev as string[]))
              return prev
            case !Array.isArray(prev) && !nullable:
              selectedOptions.push(value)
              return prev
            case !Array.isArray(prev) && nullable:
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
          setIsFocused(false)
          selectedOptions.push(value)
          return value
        })
        setSelectedName((prev) => {
          if (multiple) return [...prev, children || label]
          return [children || label]
        })
      }
      return selectedOptions
    },
    [multiple, nullable],
  )

  React.useEffect(() => {
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
    setSelectedValues(selected)
  }, [selected])

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const childs = children as React.ReactElement[]
      const child = childs[focusedIndex]
      e.preventDefault()
      switch (true) {
        case e.key === 'ArrowDown':
          options &&
            setFocusedIndex((prev) => {
              let nextIndex = (prev + 1) % options.length
              if (childs[nextIndex].props.disabled) nextIndex++
              return nextIndex % options.length
            })
          break
        case e.key === 'ArrowUp' && focusedIndex !== -1:
          options &&
            setFocusedIndex((prev) => {
              let nextIndex = (prev - 1 + options.length) % options.length
              if (childs[nextIndex].props.disabled) nextIndex--
              if (nextIndex === -1) nextIndex = options.length - 1
              return nextIndex % options.length
            })
          break
        case e.key === 'ArrowUp' && focusedIndex === -1:
          options &&
            setFocusedIndex(() => {
              let nextIndex = options.length - 1
              if (childs[nextIndex].props.disabled) nextIndex--
              return nextIndex
            })
          break
        case ['Enter'].includes(e.key) && focusedIndex !== -1 && !child.props.disabled:
          const isCheckedOption = isChecked(child.props.value)
          setNewSelectedValues({
            children: child.props.children,
            label: child.props.label,
            value: child.props.value,
            isChecked: isCheckedOption,
          })
          break
        case e.key === 'Escape':
          setFocusedIndex(-1)
          setIsFocused(false)
          break
        default:
          return
      }
    }
    focused && document.addEventListener('keydown', onKeyDown)
    !focused && setFocusedIndex(-1)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [focused, focusedIndex, children, isChecked])

  const modal = useMemo(
    () => <div role='presentation' className='select-trilogy_modal_open' onClick={() => setIsFocused(false)} />,
    [],
  )

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
        focused: focusedIndex === index ? 'true' : undefined,
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
  }, [multiple, nullable, selectedValues, focusedIndex, children])

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
        onKeyPress={(e) => {
          e.preventDefault()
        }}
        onKeyUp={(e) => {
          e.preventDefault()
          onKeyPressInput(e.inputKeyCode)
        }}
        {...{ readOnly: true, id, role: 'listbox' }}
      />
      {focused && <div className={hashClass(styled, clsx('select-options'))}>{options}</div>}
      {focused && ReactDOM.createPortal(modal, document.body)}
    </div>
  )
}
export default SelectDynamic
