import React, { PropsWithChildren } from 'react'
import { SelectedValue, SelectProps } from '../SelectProps'
import { SelectContext } from '../context'

export const useSelect = ({ selected, ...props }: SelectProps) => {
  try {
    const [isVisibleOptions, setIsVisibleOptions] = React.useState<boolean>(false)
    const [selectedOptionValues, setSelectedOptionValues] = React.useState<SelectedValue[] | []>([])

    React.useEffect(() => {
      const value =
        typeof selected === 'string' || typeof selected === 'number'
          ? [selected]
          : !selected || selected === null
          ? []
          : selected

      setSelectedOptionValues(value)
    }, [selected])

    const SelectProvider = ({ children }: PropsWithChildren) => {
      return (
        <SelectContext.Provider
          value={{
            custom: props.custom || false,
            multiple: props.multiple || false,
            selectedOptionValues,
            isVisibleOptions,
            setSelectedOptionValues,
            setIsVisibleOptions,
            onChange: props.onChange,
          }}
        >
          {children}
        </SelectContext.Provider>
      )
    }

    return { SelectProvider, isClient: true }
  } catch {
    const SelectProvider = ({ children }: PropsWithChildren) => {
      return <>{children}</>
    }
    return { SelectProvider, isClient: false }
  }
}
