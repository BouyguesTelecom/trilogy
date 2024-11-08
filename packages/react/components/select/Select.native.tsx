import React, { useCallback, useEffect, useState } from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { Input } from '@/components/input'
import { Modal } from '@/components/modal'
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
 * @param onChange {Function} onChange Event
 * @param disabled {boolean} disable Select
 * @param multiple {boolean} select multiple options
 * @param nullable {boolean} Unselect Select Option Item
 */
const Select = ({
  children,
  id,
  selected,
  label,
  iconName,
  onChange,
  disabled,
  multiple,
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
    !disabled && setDisplay((prev) => !prev)
  }, [disabled])

  const isChecked = useCallback(
    (value: string) =>
      (multiple && selectedValues && typeof selectedValues !== 'string' && typeof selectedValues !== 'number'
        ? selectedValues?.includes(value)
        : selectedValues === value),
    [multiple, selectedValues],
  )

  const setNewSelectedValues = useCallback(
    ({ isChecked, children, label, value }: { isChecked: boolean; children: string; label: string; value: string }) => {
      const selectedOptions: string[] = []
      if (isChecked) {
        setSelectedValues((prev) => {
          switch (true) {
            case Array.isArray(prev):
              setSelectedNames((prev) => prev.filter((txt) => ![children, label].includes(txt)))
              const opts = (prev as string[]).filter((item: string | number) => item !== value)
              selectedOptions.push(...opts)
              return opts
            case !Array.isArray(prev):
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
    [multiple],
  )

  const options = React.useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return null
      const clickEventValue = (v: string) => {
        switch (true) {
          case (multiple && (selectedValues as (number | string)[])?.includes(child.props.value)) ||
            (!multiple && selectedValues === child.props.value):
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
  }, [multiple, selectedValues, children])

  return (
    <>
      <Input
        onIconClick={handleOpenCloseModal}
        onClick={handleOpenCloseModal}
        disabled={disabled}
        placeholder={label}
        iconNameLeft={iconName}
        iconNameRight={display ? 'tri-arrow-up' : 'tri-arrow-down'}
        value={selectedNames.join(', ')}
        defaultValue={selectedNames.join(', ')}
        {...{ editable: false, onPressIn: handleOpenCloseModal, id }}
        {...others}
      />
      <Modal active={display} onClose={handleOpenCloseModal} swipable={false} bottom={false}>
        {options}
      </Modal>
    </>
  )
}

Select.displayName = ComponentName.Select
export default Select
