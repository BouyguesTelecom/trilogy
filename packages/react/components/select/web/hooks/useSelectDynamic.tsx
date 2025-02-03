import { InputKeyboardEvent } from '@/components/input'
import { SelectChangeEvent, SelectChangeEventHandler, SelectedValue } from '@/components/select/SelectProps'
import React from 'react'
import SelectOption from '../../option'

interface IProps<T = SelectChangeEvent> {
  selected?: SelectedValue
  multiple?: boolean
  children?: React.ReactNode
  onChange?: SelectChangeEventHandler<T>
}

export const useSelectDynamic = ({ selected, multiple, children, onChange }: IProps) => {
  try {
    const reactId = React.useId()
    const [focused, setIsFocused] = React.useState<boolean>(false)
    const [selectedValues, setSelectedValues] = React.useState<SelectedValue>(selected)
    const [selectedName, setSelectedName] = React.useState<string[]>([])
    const [focusedIndex, setFocusedIndex] = React.useState<number>(-1)

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

    const onClickInput = React.useCallback(() => setIsFocused((prev) => !prev), [])
    const onKeyUp = React.useCallback((event: InputKeyboardEvent) => onKeyPressInput(event.inputKeyCode), [multiple])
    const onKeyPress = React.useCallback((event: InputKeyboardEvent) => event.preventDefault(), [])

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
              case Array.isArray(prev):
                setSelectedName((prev) => prev.filter((txt) => ![children, label].includes(txt)))
                const opts = (prev as string[]).filter((item: string | number) => item !== value)
                selectedOptions.push(...opts)
                return opts
              case !Array.isArray(prev):
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
      [multiple],
    )

    const options = React.useMemo(() => {
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null
        const clickEventValue = (v: string) => {
          switch (true) {
            case (multiple && (selectedValues as (number | string)[])?.includes(child.props.value)) ||
              (!multiple && selectedValues === child.props.value):
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
            if (!multiple) setIsFocused(false)
          },
        }
        return <SelectOption {...props} key={`${reactId}_${index}`} />
      })
    }, [multiple, selectedValues, focusedIndex, children])

    const modal = React.useMemo(
      () => <div role='presentation' className='select-trilogy_modal_open' onClick={() => setIsFocused(false)} />,
      [],
    )

    React.useEffect(() => {
      const labelSelected = getSelectedName(children, selected)
      labelSelected && setSelectedName(labelSelected)
      setSelectedValues(selected)
    }, [selected])

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
