import React, { useCallback } from 'react'

import { RadioChangeEventHandler, RadioClickEventHandler } from '@/components/radio/RadioProps'

interface IParams {
  checked?: boolean
  readonly?: boolean
  onChange?: RadioChangeEventHandler
  value?: string
  onClick?: RadioClickEventHandler
}

export const useRadio = ({ checked, readonly, onChange, value, onClick }: IParams) => {
  try {
    const [inputState, setInputState] = React.useState<{ checked: boolean }>({
      checked: checked || false,
    })

    const handleClick = (e: React.MouseEvent) => {
      const target = e.target as HTMLInputElement
      if (!readonly && target.checked) setInputState({ checked: target.checked })

      target.value = value || ''
      if (onChange) {
        onChange({
          radioId: target.id,
          radioValue: target.value,
          radioName: target.name,
          radioChecked: target.checked,
        })
      }
      if (onClick) {
        onClick({
          radioId: target.id,
          radioValue: target.value,
          radioName: target.name,
          radioChecked: target.checked,
        })
      }
    }
    const handleChange = useCallback((e: React.ChangeEvent) => {
      return e
    }, [])

    React.useEffect(() => {
      if (!readonly) setInputState({ checked: checked || false })
    }, [checked, readonly])

    return {
      handleClick,
      handleChange,
      inputState,
    }
  } catch {
    return {
      inputState: {
        checked: checked,
      },
    }
  }
}
