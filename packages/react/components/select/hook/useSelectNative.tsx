import { ParamEventSelectFocus, SelectChangeEventHandler, SelectedValue } from '@/components/select/SelectProps'
import React from 'react'

interface IParams {
  selected?: SelectedValue
  onFocus?: (event: ParamEventSelectFocus) => void
  onBlur?: React.FocusEventHandler<HTMLSelectElement | HTMLInputElement>
  onChange?: SelectChangeEventHandler
}

export const useSelectNative = ({ onBlur, onFocus, onChange, selected }: IParams) => {
  try {
    const [focused, setIsFocused] = React.useState<boolean>(false)
    const [selectedValues, setSelectedValues] = React.useState(selected)

    const handleFocus = React.useCallback((e: ParamEventSelectFocus) => {
      setIsFocused(true)
      onFocus && onFocus(e)
    }, [])

    const handleBlur: React.FocusEventHandler<HTMLSelectElement | HTMLInputElement> = React.useCallback((e) => {
      setIsFocused(false)
      onBlur && onBlur(e)
    }, [])

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedV = Array.from(e.target.selectedOptions).map((select) => select.value)
        setSelectedValues(selectedV)
        if (onChange) {
          onChange({
            selectValue: e.target.value,
            selectName: e.target.name,
            selectId: e.target.id,
            name: e.target.name,
            selectedOptions: selectedV,
            target: e.target,
          })
        }
      },
      [onChange],
    )

    React.useEffect(() => {
      setSelectedValues(selected)
    }, [selected])
    return { focused, selectedValues, handleFocus, handleBlur, handleChange }
  } catch {
    return { focused: false, selectedValues: selected }
  }
}
