import React, { useCallback, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { IconName } from '../icon'
import { Input } from '../input'
import { Modal } from '../modal'
import { SelectProps, SelectedValue } from './SelectProps'
import SelectOption from './option'

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
  nullable,
  ...others
}: SelectProps): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<SelectedValue>(selected)
  const [selectedNames, setSelectedNames] = React.useState<string[]>([])
  const [display, setDisplay] = useState<boolean>(false)
  const reactId = React.useId()

  useEffect(() => {
    const labelSelected = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return false
      const label = child.props.children || child.props.label
      switch (true) {
        case (Array.isArray(selected) && (selected as (number | string)[]).includes(child.props.value)) ||
          (!Array.isArray(selected) && child.props.value === selected):
          return label
        default:
          return false
      }
    })?.filter((item) => item)
    labelSelected && setSelectedNames(labelSelected)
    setSelectedValues(selected)
  }, [selected])

  const handleOpenCloseModal = useCallback(() => {
    setDisplay((prev) => !prev)
  }, [])

  const isChecked = useCallback(
    (value: string) =>
      multiple && selectedValues && typeof selectedValues !== 'string' && typeof selectedValues !== 'number'
        ? selectedValues?.includes(value)
        : selectedValues === value,
    [multiple, selectedValues],
  )

  const setNewSelectedValues = useCallback(
    ({ isChecked, children, label, value }: { isChecked: boolean; children: string; label: string; value: any }) => {
      const selectedOptions: string[] = []
      if (isChecked) {
        setSelectedValues((prev) => {
          switch (true) {
            case Array.isArray(prev) && nullable:
              setSelectedNames((prev) => prev.filter((txt) => ![children, label].includes(txt)))
              const opts = (prev as string[]).filter((item: string | number) => item !== value)
              selectedOptions.push(...opts)
              return opts
            case Array.isArray(prev) && !nullable:
              selectedOptions.push(...(prev as string[]))
              return prev
            case !Array.isArray(prev) && !nullable:
              selectedOptions.push(value)
              setDisplay(false)
              return prev
            case !Array.isArray(prev) && nullable:
              setDisplay(false)
              setSelectedNames([])
              return undefined
            default:
              return value
          }
        })
      }
      if (!isChecked) {
        setSelectedValues((prev) => {
          if (Array.isArray(prev)) {
            const opts = [...prev, value]
            selectedOptions.push(...opts)
            return opts
          }
          selectedOptions.push(value)
          return value
        })
        setSelectedNames((prev) => {
          if (multiple) return [...prev, children || label]
          setDisplay(false)
          return [children || label]
        })
      }
      return selectedOptions
    },
    [multiple, nullable],
  )

  const options = React.useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return null
      const clickEventValue = (v: string) => {
        switch (true) {
          case (nullable && multiple && (selectedValues as (number | string)[])?.includes(child.props.value)) ||
            (nullable && !multiple && selectedValues === child.props.value):
            return undefined
          default:
            return v
        }
      }
      const props = {
        ...child.props,
        checked: isChecked(child.props.value),
        onClick: () => {
          if (child.props.disabled) return
          const opts = setNewSelectedValues({
            children: child.props.children,
            label: child.props.label,
            value: child.props.value,
            isChecked: isChecked(child.props.value),
          })
          onChange &&
            onChange({
              selectValue: clickEventValue(child.props.value),
              selectName: clickEventValue(child.props.children || child.props.label),
              selectId: clickEventValue(child.props.id),
              name: clickEventValue(child.props.children || child.props.label),
              selectedOptions: opts,
            })
          if (child.props.onClick) child.props.onClick()
        },
      }
      return <SelectOption {...props} key={`${reactId}_${index}`} />
    })
  }, [multiple, nullable, selectedValues, children])

  return (
    <TouchableOpacity onPress={handleOpenCloseModal}>
      <Input
        placeholder={label}
        hasIcon={!!iconName}
        customIconLeft={iconName}
        value={selectedNames.join(', ')}
        defaultValue={selectedNames.join(', ')}
        customIconRight={display ? 'tri-arrow-up' : 'tri-arrow-down'}
        {...{ editable: false, onPressIn: handleOpenCloseModal }}
        {...others}
      />
      <Modal active={display} onClose={handleOpenCloseModal} swipable={false} bottom={false}>
        {options}
      </Modal>
    </TouchableOpacity>
  )
}

Select.displayName = ComponentName.Select
export default Select
