import React, { FocusEvent } from 'react'
import { ISelectOption, SelectChangeEvent, SelectChangeEventHandler } from '../SelectProps'

interface IProps {
  name?: string
  nullable?: boolean
  onChange?: SelectChangeEventHandler<SelectChangeEvent>
  onFocus?: (event: React.FocusEvent | React.BaseSyntheticEvent) => void
  onBlur?: (event: React.FocusEvent | React.BaseSyntheticEvent | MouseEvent) => void
  children?: React.ReactNode
  disabled?: boolean
  selected?: string | number
  id?: string
}

export const useUtils = ({ onChange, nullable, disabled, onFocus, onBlur, children, selected, name, id }: IProps) => {
  const [isOpenSelect, setIsOpenSelect] = React.useState<boolean>(false)
  const [selectedOption, setSelectedOption] = React.useState<ISelectOption>()
  const selectRef = React.useRef<HTMLDivElement | null>(null)
  const optionRefs = React.useRef<Array<HTMLDivElement | null>>([])

  const handleFocusCurrentOption = React.useCallback(() => {
    setTimeout(() => {
      let currentIndex = optionRefs.current.findIndex((ref) => ref?.dataset.isActive == 'true')
      if (currentIndex === -1) currentIndex = 0
      optionRefs.current[currentIndex]?.focus()
    }, 10)
  }, [optionRefs])

  const handleChangeSelect = React.useCallback(
    ({
      selectValue,
      selectName,
      selectId,
      disabled,
    }: {
      selectValue: string
      selectName: string
      selectId: string
      disabled: boolean
    }) => {
      if (!disabled) {
        if (onChange) {
          onChange({
            selectValue: nullable && selectedOption?.value === selectValue ? undefined : selectValue,
            selectName: nullable && selectedOption?.value === selectValue ? undefined : name,
            selectId: nullable && selectedOption?.value === selectValue ? undefined : id,
            name: name,
          })
        }
        setSelectedOption((prev) => {
          return {
            value: nullable && prev?.value === selectValue ? undefined : selectValue,
            name: nullable && prev?.value === selectValue ? undefined : selectName,
            id: nullable && prev?.value === selectValue ? undefined : selectId,
          }
        })
      }
    },
    [name, nullable, selectedOption, id],
  )

  const handleFocusSelect = React.useCallback(
    (e: FocusEvent<HTMLInputElement>) => !disabled && onFocus && onFocus(e),
    [disabled, onFocus],
  )

  const handleOpenSelect = React.useCallback(
    (e: React.MouseEvent) => {
      if (!disabled) {
        setIsOpenSelect((prev) => {
          if (prev && onBlur) onBlur(e)
          return !prev
        })
        handleFocusCurrentOption()
      }
    },
    [disabled, optionRefs, selectRef],
  )

  React.useEffect(() => {
    const selectedChild = React.Children.toArray(children).find((child) => {
      return React.isValidElement(child) && (child.props.value === selected || child.props.selected === true)
    })
    if (React.isValidElement(selectedChild)) {
      setSelectedOption({
        value: selectedChild.props.value,
        name: selectedChild.props.children || selectedChild.props.label,
        id: selectedChild.props.id,
      })
    } else {
      setSelectedOption({
        value: undefined,
        name: undefined,
        id: undefined,
      })
    }
  }, [children, selected])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpenSelect && !selectRef.current?.contains(event.target as Node)) {
        if (onBlur) onBlur(event)
        setIsOpenSelect(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpenSelect, selectRef, onBlur])

  React.useEffect(() => {
    optionRefs.current = optionRefs.current.slice(0, React.Children.toArray(children).length)
  }, [optionRefs])

  return {
    handleChangeSelect,
    handleFocusCurrentOption,
    handleFocusSelect,
    handleOpenSelect,
    isOpenSelect,
    setIsOpenSelect,
    optionRefs,
    selectRef,
    selectedOption,
  }
}
