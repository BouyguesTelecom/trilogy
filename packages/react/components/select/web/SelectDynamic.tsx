import { hashClass } from "../../../helpers"
import clsx from "clsx"
import { useUtils } from "../hooks/utils"
import { useAccessibility } from "../hooks/accessibility"
import React, { PropsWithChildren } from "react"
import { Icon } from "../../icon"
import SelectOption from "../option"
import { ICustomSelect } from "../SelectProps"
import { has } from "../../../services"

const SelectDynamic = ({
  styled,
  onChange,
  nullable,
  disabled,
  onFocus,
  onBlur,
  children,
  selected,
  name,
  id,
  testId,
  classNameOptions,
  selecteClasses,
  label,
  iconName,
  ...others
}: PropsWithChildren<ICustomSelect>): JSX.Element => {
  const {
    handleChangeSelect,
    handleFocusCurrentOption,
    handleFocusSelect,
    handleOpenSelect,
    isOpenSelect,
    setIsOpenSelect,
    optionRefs,
    selectRef,
    selectedOption,
  } = useUtils({
    onChange,
    nullable,
    disabled,
    onFocus,
    onBlur,
    children,
    selected,
    name,
    id,
  })

  const { handleKeyDown } = useAccessibility(
    isOpenSelect,
    handleChangeSelect,
    setIsOpenSelect,
    optionRefs,
    selectRef,
    handleFocusCurrentOption
  )

  const optionsClasses = React.useMemo(
    () => hashClass(styled, clsx("select-options", classNameOptions)),
    [classNameOptions, styled]
  )

  const selectedValueClasses = React.useMemo(
    () => hashClass(styled, clsx("select-value", !label && "no-label")),
    [styled]
  )

  const controlClasses = React.useMemo(
    () =>
      hashClass(
        styled,
        clsx("control", selectedOption?.value && has("dynamic-placeholder"))
      ),
    [styled, selectedOption?.value]
  )

  return (
    <div className={hashClass(styled, clsx("field"))}>
      <div className={controlClasses}>
        <div
          ref={selectRef}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          id={id}
          data-testid={testId}
          data-select-name={name}
          className={selecteClasses}
          onClick={handleOpenSelect}
          onFocus={handleFocusSelect}
          aria-haspopup='listbox'
          aria-label={label}
          aria-disabled={disabled}
          role='listbox'
          {...others}
        >
          {iconName && <Icon name={iconName} size='small' />}
          {label && <label>{label}</label>}
          {selectedOption?.name && (
            <span className={selectedValueClasses}>{selectedOption?.name}</span>
          )}
        </div>
        <div
          data-is-open-options={isOpenSelect}
          className={optionsClasses}
          aria-expanded={isOpenSelect}
          aria-hidden={!isOpenSelect}
        >
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              const props = {
                ...child.props,
                selected: child.props.value === selectedOption?.value,
                onClick: () => {
                  handleChangeSelect({
                    selectValue: child.props.value,
                    selectName: child.props.children || child.props.label,
                    selectId: child.props.id,
                    disabled: child.props.disabled,
                  })
                  if (child.props.onClick) child.props.onClick()
                },
              }
              return (
                <div
                  {...{ disabled: disabled }}
                  data-is-disabled={child.props.disabled}
                  className={hashClass(styled, clsx("option-container"))}
                  data-is-active={child.props.value === selectedOption?.value}
                  data-index={child.props.value}
                  data-id={child.props.id}
                  data-textcontent={child.props.children || child.props.label}
                  onKeyDown={(e) => handleKeyDown(e, child)}
                  ref={(element) => (optionRefs.current[index] = element)}
                  tabIndex={
                    child.props.value === selectedOption?.value ? 0 : -1
                  }
                  onMouseEnter={() => optionRefs.current[index]?.focus()}
                  onMouseLeave={() => optionRefs.current[index]?.blur()}
                >
                  <SelectOption {...props} />
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectDynamic
