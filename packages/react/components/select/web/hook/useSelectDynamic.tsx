import clsx from 'clsx'
import React from 'react'

import type { InputKeyboardEvent } from '@/components/input/InputProps'
import SelectOption from '@/components/select/option/SelectOption'
import { SelectProps, SelectedValue } from '@/components/select/SelectProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

export const useSelectDynamic = ({
  onChange,
  nullable,
  children,
  selected,
  multiple,
}: React.PropsWithChildren<SelectProps>) => {
  try {
    const [focused, setIsFocused] = React.useState<boolean>(false)
    const [selectedValues, setSelectedValues] = React.useState<SelectedValue>(selected)
    const [selectedName, setSelectedName] = React.useState<string[]>([])
    const reactId = React.useId()
    const [focusedIndex, setFocusedIndex] = React.useState<number>(-1)

    const onClickInput = React.useCallback(() => {
      setIsFocused((prev) => !prev)
    }, [])

    const onKeyUp = React.useCallback(
      (event: InputKeyboardEvent) => {
        if (event.inputKeyCode === 13) {
          setIsFocused((prev) => {
            if (multiple && !prev) return true
            if (multiple && prev) return prev
            return !prev
          })
        }
      },
      [multiple],
    )

    const onKeyPress = React.useCallback((event: InputKeyboardEvent) => {
      event.preventDefault()
    }, [])

    const isChecked = React.useCallback(
      (value: string) =>
        multiple && selectedValues && typeof selectedValues !== 'string' && typeof selectedValues !== 'number'
          ? selectedValues?.includes(value)
          : selectedValues === value,
      [multiple, selectedValues],
    )

    const setNewSelectedValues = React.useCallback(
      ({
        isChecked,
        children,
        label,
        value,
      }: {
        isChecked: boolean
        children: string
        label: string
        value: string
      }) => {
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
      [multiple, nullable, children],
    )

    const clickEventValue = React.useCallback(
      (v: string, child: React.ReactElement) => {
        switch (true) {
          case (nullable && multiple && (selectedValues as (number | string)[])?.includes(child.props.value)) ||
            (nullable && !multiple && selectedValues === child.props.value):
            return undefined
          default:
            return v
        }
      },
      [nullable, multiple, selectedValues],
    )

    const options = React.useMemo(() => {
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null

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
                selectValue: clickEventValue(child.props.value, child),
                selectName: clickEventValue(child.props.children || child.props.label, child),
                selectId: clickEventValue(child.props.id, child),
                name: clickEventValue(child.props.children || child.props.label, child),
                selectedOptions: opts,
              })
            if (child.props.onClick) child.props.onClick()
            if (!multiple) setIsFocused(false)
          },
        }
        return <SelectOption {...props} key={`${reactId}_${index}`} />
      })
    }, [multiple, nullable, selectedValues, focusedIndex, children])

    React.useEffect(() => {
      const labelSelected = getSelectedName(children, selected)
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
            const opts = setNewSelectedValues({
              children: child.props.children,
              label: child.props.label,
              value: child.props.value,
              isChecked: isCheckedOption,
            })

            onChange &&
              onChange({
                selectValue: clickEventValue(child.props.value, child),
                selectName: clickEventValue(child.props.children || child.props.label, child),
                selectId: clickEventValue(child.props.id, child),
                name: clickEventValue(child.props.children || child.props.label, child),
                selectedOptions: opts,
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
    }, [focused, focusedIndex, children, isChecked, options, onChange])

    const modal = React.useMemo(
      () => (
        <div
          role='presentation'
          className={hashClass(clsx('select-trilogy_modal_open'))}
          onClick={() => {
            setIsFocused(false)
          }}
        />
      ),
      [],
    )

    return {
      selectedName,
      onClickInput,
      focused,
      modal,
      options,
      onKeyUp,
      onKeyPress,
    }
  } catch {
    const optionIsChecked = (value: string, selectedValues: SelectedValue, multiple?: boolean) =>
      multiple && selectedValues && typeof selectedValues !== 'string' && typeof selectedValues !== 'number'
        ? selectedValues?.includes(value)
        : selectedValues === value

    const createOptions = (
      children: React.ReactNode,
      selectedValues: SelectedValue,
      focusedIndex: number,
      multiple?: boolean,
    ) =>
      React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null

        const props = {
          ...child.props,
          checked: optionIsChecked(child.props.value, selectedValues, multiple),
          focused: focusedIndex === index ? 'true' : undefined,
        }
        return <SelectOption {...props} />
      })

    return {
      selectedName: getSelectedName(children, selected),
      options: createOptions(children, selected, -1),
    }
  }
}

const getSelectedName = (children: React.ReactNode, selected: SelectedValue) => {
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
  return labelSelected
}
