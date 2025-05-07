import { InputKeyboardEvent } from '@/components/input'
import { SelectChangeEvent, SelectedValue } from '@/components/select/SelectProps'
import React from 'react'
import { SelectContext } from '../context'

interface IProps<T = SelectChangeEvent> {
  children?: React.ReactNode
  selected?: SelectedValue
}

export const useSelectDynamic = ({ children, selected }: IProps) => {
  try {
    const { setIsVisibleOptions, isVisibleOptions, selectedOptionValues } = React.useContext(SelectContext)
    const onClickInput = () => setIsVisibleOptions((prev) => !prev)
    const onCloseOptions = () => setIsVisibleOptions(false)

    const onKeyPressInput = (keyCode: number) => {
      setIsVisibleOptions((prev) => {
        if (keyCode === 27) return false
        if (keyCode === 13) return !prev
        return prev
      })
    }

    const options = React.useMemo(() => {
      return getOptions(children)
    }, [])

    const labelsSelected = React.useMemo(() => {
      return selectedOptionValues.map((selectedOption) => {
        const elm = options?.find((opt) => opt.value === selectedOption)
        return elm?.label
      })
    }, [selectedOptionValues, options])

    const onKeyUp = (e: InputKeyboardEvent) => {
      e.preventDefault()
      onKeyPressInput(e.inputKeyCode)
    }

    return {
      onKeyUp,
      labelsSelected,
      onClickInput,
      onCloseOptions,
      isVisibleOptions,
    }
  } catch {
    const labelsSelected = () => {
      const opts = getOptions(children)

      if (typeof selected === 'string' || typeof selected === 'number') {
        const elm = opts?.find((opt) => opt.value === selected)
        return [elm?.label]
      }

      return selected?.map((selectedOption) => {
        const elm = opts?.find((opt) => opt.value === selectedOption)
        return elm?.label
      })
    }

    return {
      labelsSelected: labelsSelected(),
      isVisibleOptions: false,
    }
  }
}

const getOptions = (children: React.ReactNode) => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return false
    return {
      label: child.props.children || child.props.label,
      value: child.props.value,
    }
  })?.filter((option) => option)
}
