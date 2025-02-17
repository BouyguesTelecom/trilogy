import { ParamEventSelectFocus, SelectChangeEventHandler, SelectedValue } from '@/components/select/SelectProps'
import { isServer } from '@/helpers/isServer'
import React from 'react'

interface IParams {
  selected?: SelectedValue
  onFocus?: (event: ParamEventSelectFocus) => void
  onBlur?: (event: unknown) => void
  onChange?: SelectChangeEventHandler
}

export const useSelectNative = ({ onBlur, onFocus, onChange, selected }: IParams) => {
  if (isServer) {
    return { focused: false, selectedValues: selected }
  }

  const [focused, setIsFocused] = React.useState<boolean>(false)
  const [selectedValues, setSelectedValues] = React.useState(selected)

  const handleFocus = React.useCallback((e: ParamEventSelectFocus) => {
    setIsFocused(true)
    onFocus && onFocus(e)
  }, [])

  const handleBlur = React.useCallback((e: ParamEventSelectFocus) => {
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
        })
      }
    },
    [onChange],
  )

  React.useEffect(() => {
    setSelectedValues(selected)
  }, [selected])
  return { focused, selectedValues, handleFocus, handleBlur, handleChange }
}
