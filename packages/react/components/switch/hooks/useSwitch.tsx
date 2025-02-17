import { SwitchEventHandler } from '@/components/switch/SwitchProps'
import { isServer } from '@/helpers/isServer'
import React from 'react'

interface IParams {
  checked?: boolean
  readonly?: boolean
  onChange?: SwitchEventHandler
  onClick?: SwitchEventHandler
}

export const useSwitch = ({ checked, readonly, onChange, onClick }: IParams) => {
  if (isServer) {
    return {
      _checked: checked,
    }
  }

  const [_checked, setChecked] = React.useState<boolean>(checked || false)

  React.useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  React.useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!readonly) setChecked((prev) => !prev)

      if (onChange) {
        onChange({
          switchState: e.target.checked,
          switchName: e.target.name,
        })
      }
    },
    [onChange, readonly],
  )

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const event = e.target as HTMLInputElement

      if (onClick) {
        onClick({
          switchState: event.checked,
          switchName: event.name,
        })
      }
    },
    [onClick, readonly],
  )

  return {
    handleChange,
    handleClick,
    _checked,
  }
}
