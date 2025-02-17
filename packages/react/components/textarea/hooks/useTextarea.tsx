import { isServer } from '@/helpers/isServer'
import React from 'react'
import { TextareaChangeEventHandler } from '../TextareaProps'

interface IParams {
  value?: string
  onChange?: TextareaChangeEventHandler
  defaultValue?: string
}

export const useTextarea = ({ onChange, defaultValue }: IParams) => {
  if (isServer) {
    return {
      value: defaultValue,
    }
  }

  const [value, setValue] = React.useState(defaultValue || '')

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value)
      if (onChange) {
        onChange({
          textareaName: e.target.name,
          textareaValue: e.target.value,
        })
      }
    },
    [onChange],
  )

  React.useEffect(() => {
    setValue(defaultValue || '')
  }, [defaultValue])

  return {
    value,
    handleChange,
  }
}
