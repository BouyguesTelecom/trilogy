import React from 'react'

import { CheckboxChangeEventHandler } from '@/components/checkbox/CheckboxProps'

interface IParams {
  checked?: boolean
  readonly?: boolean
  onChange?: CheckboxChangeEventHandler
  value?: string
  onClick?: CheckboxChangeEventHandler
}

export const useCheckbox = ({ checked, readonly, value, onChange, onClick }: IParams) => {
  try {
    const [_checked, setChecked] = React.useState<boolean>(checked || false)

    const handleClick = React.useCallback((e: React.MouseEvent) => {
      const target = e.target as HTMLInputElement
      if (!readonly && target.checked !== undefined) {
        setChecked(target.checked)
      }
      target.value = value || ''
      if (onChange) {
        onChange({
          checkboxId: target.id,
          checkboxValue: target.value,
          checkboxName: target.name,
          checkboxChecked: target.checked,
        })
      }
      if (onClick) {
        onClick({
          checkboxId: target.id,
          checkboxValue: target.value,
          checkboxName: target.name,
          checkboxChecked: target.checked,
        })
      }
    }, [])

    const handleChange = React.useCallback((e: React.ChangeEvent) => {
      return e
    }, [])

    React.useEffect(() => {
      if (!readonly) setChecked(checked || false)
    }, [checked, readonly])

    return {
      handleChange,
      handleClick,
      _checked,
    }
  } catch {
    return {
      _checked: checked,
    }
  }
}
