import React from 'react'

import { SelectContext } from '../context'
import { SelectedValue } from '../SelectProps'

interface UseSelectOptionProps {
  children?: string
  label?: string
  value?: string
  id?: string
}

export const useSelectOption = ({ value, children, label, id }: UseSelectOptionProps) => {
  try {
    const { custom, selectedOptionValues, setSelectedOptionValues, multiple, setIsVisibleOptions, onChange } =
      React.useContext(SelectContext)

    const isChecked = selectedOptionValues.includes(value)

    const handleClickOption = () => {
      setSelectedOptionValues((prev: SelectedValue[]) => {
        const isInclude = prev.includes(value)

        const newOptionsSelected =
          !multiple && isInclude
            ? []
            : !multiple && !isInclude
            ? [value]
            : isInclude
            ? prev.filter((opt) => opt !== value)
            : [...prev, value]

        if (onChange) {
          onChange({
            selectValue: isInclude ? undefined : value,
            selectName: isInclude ? undefined : children || label,
            selectId: isInclude ? undefined : id,
            name: isInclude ? undefined : children || label,
            selectedOptions: newOptionsSelected as string[],
            target: undefined as unknown as EventTarget & HTMLSelectElement,
          })
        }

        return newOptionsSelected
      })

      if (!multiple) setIsVisibleOptions(false)
    }

    return {
      isChecked,
      handleClickOption,
      custom,
      multiple,
    }
  } catch {
    return {
      isChecked: false,
      custom: false,
      multiple: false,
    }
  }
}
