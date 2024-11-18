import React from 'react'

import { ParamEventSelectFocus, SelectChangeEventHandler, SelectedValue } from '@/components/select/SelectProps'

interface IParams {
  selected?: SelectedValue
  onFocus?: (event: ParamEventSelectFocus) => void
  onBlur?: (event: unknown) => void
  onChange?: SelectChangeEventHandler
}

export const useSelectNative = ({ selected, onFocus, onBlur, onChange }: IParams) => {
  try {
    const [focused, setIsFocused] = React.useState<boolean>(false)
    const [selectedValues, setSelectedValues] = React.useState(selected)

    const handleFocus = React.useCallback(
      (e: ParamEventSelectFocus) => {
        setIsFocused(true)
        onFocus && onFocus(e)
      },
      [onFocus],
    )

    const handleBlur = React.useCallback(
      (e: ParamEventSelectFocus) => {
        setIsFocused(false)
        onBlur && onBlur(e)
      },
      [onBlur],
    )

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
