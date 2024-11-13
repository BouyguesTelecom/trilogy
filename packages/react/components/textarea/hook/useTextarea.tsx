import React from 'react'

import { TextareaChangeEventHandler } from '@/components/textarea/TextareaProps'

interface IParams {
  inputValue?: string
  onChange?: TextareaChangeEventHandler
}

export const useTextarea = ({ inputValue, onChange }: IParams) => {
  try {
    const [value, setValue] = React.useState(inputValue || '')

    const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value)
      if (onChange) {
        onChange({
          textareaName: e.target.name,
          textareaValue: e.target.value,
        })
      }
    }, [])

    React.useEffect(() => {
      setValue(inputValue || '')
    }, [inputValue])

    return { inputValue: value, handleChange }
  } catch {
    return { inputValue, handleChange: undefined }
  }
}
