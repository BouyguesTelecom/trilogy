import React, { useCallback, useEffect, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { IconName } from '../icon'
import { Input } from '../input'
import { Modal } from '../modal'
import { SelectProps } from './SelectProps'

/**
 * Select Component
 * @param id {string} Select id
 * @param name {string} Select name
 * @param selected {string} Selected value
 * @param children {React.ReactNode} Children for Select
 * @param label {string} label for select
 * @param iconName {IconName} icon for left of selector
 * @param placeholder {string} Select Placeholder
 */
const Select = ({
  children,
  name,
  id,
  selected,
  label,
  iconName,
  onChange,
  placeholder,
  disabled,
  multiple,
  ...others
}: SelectProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | number>(selected as string)
  const [display, setDisplay] = useState<boolean>(false)

  useEffect(() => {
    setSelectedValue((selected as string) || '')
  }, [selected])

  const handleOpenCloseModal = useCallback(() => {
    setDisplay((prev) => !prev)
  }, [])

  return (
    <>
      <Input
        placeholder={label}
        hasIcon={!!iconName}
        customIconLeft={iconName}
        {...{ editable: false, onPressIn: handleOpenCloseModal }}
      />
      <Modal active={display} onClose={handleOpenCloseModal} closeIcon swipable={false}>
        {children}
      </Modal>
    </>
  )
}

Select.displayName = ComponentName.Select

export default Select
