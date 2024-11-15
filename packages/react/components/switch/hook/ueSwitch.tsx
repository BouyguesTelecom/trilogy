import React, { useCallback } from 'react'

import { SwitchEventHandler } from '@/components/switch/SwitchProps'

interface IParams {
  checked?: boolean
  readonly?: boolean
  onChange?: SwitchEventHandler
  onClick?: SwitchEventHandler
}
export const useSwitch = ({ checked, readonly, onChange, onClick }: IParams) => {
  try {
    const [_checked, setChecked] = React.useState<boolean>(checked || false)

    React.useEffect(() => {
      if (!readonly) setChecked(checked || false)
    }, [checked, readonly])

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!readonly) setChecked((prev) => !prev)

        if (onChange) {
          onChange({
            switchState: e.target.checked,
            switchName: e.target.name,
          })
        }
      },
      [readonly, onChange],
    )

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLInputElement>) => {
        if (onClick) {
          onClick({
            switchState: (e.target as HTMLInputElement).checked,
            switchName: (e.target as HTMLInputElement).name,
          })
        }
      },
      [readonly, onClick],
    )

    return { _checked, handleChange, handleClick }
  } catch {
    return { _checked: checked, handleChange: undefined, handleClick: undefined }
  }
}
