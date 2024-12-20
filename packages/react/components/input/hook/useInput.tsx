import clsx from 'clsx'
import React from 'react'

import { Icon, IconName, IconSize } from '@/components/icon'
import { IconColor } from '@/components/icon/IconEnum'
import { IconNameValues } from '@/components/icon/IconNameEnum'
import { InputStatus, InputStatusValues, InputType, InputTypeValues } from '@/components/input/InputEnum'
import {
  InputChangeEventHandlerWeb,
  InputClickEventHandler,
  InputKeyboardEventHandler,
} from '@/components/input/InputProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

interface IconWrapper {
  className?: string
  name: IconName | IconNameValues
  color?: IconColor
  onClick?: React.MouseEventHandler<HTMLDivElement>
  closeIconSearch?: boolean
  type?: InputType | InputTypeValues
  _value?: string
  onClickCloseIconSearch?: () => void
  onPress?: () => void
}

interface IParams {
  defaultValue?: string
  focused?: boolean
  status?: InputStatus | InputStatusValues
  type: InputType | InputTypeValues
  value?: string
  validator?: ((value: string) => InputStatus | InputStatusValues) | undefined
  onStatusChange?: (status: InputStatus | InputStatusValues) => void
  onChange?: InputChangeEventHandlerWeb
  onKeyUp?: InputKeyboardEventHandler
  onKeyPress?: InputKeyboardEventHandler
  onIconClick?: InputClickEventHandler
  onClick?: InputClickEventHandler
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onMouseEnter?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  forceControl?: boolean
}

export const useInput = ({
  defaultValue,
  focused,
  status,
  type,
  value,
  validator,
  onStatusChange,
  onKeyUp,
  onKeyPress,
  onMouseEnter,
  onMouseLeave,
  onClick,
  forceControl,
  onChange,
  onFocus,
  onBlur,
  onIconClick,
}: IParams) => {
  try {
    const [_value, setValue] = React.useState<string>(defaultValue ?? '')
    const [isFocused, setIsFocused] = React.useState<boolean>(focused ?? false)
    const [isDirty, setIsDirty] = React.useState<boolean>(false)
    const [isTouched, setIsTouched] = React.useState<boolean>(false)
    const [localStatus, setLocalStatus] = React.useState<InputStatus | InputStatusValues>(status || InputStatus.DEFAULT)
    const [inputType, setInputType] = React.useState<InputType | InputTypeValues>(type)
    const [isShowPwd, setIsShowPwd] = React.useState<boolean>(false)

    const onPressKey = React.useCallback((e: React.KeyboardEvent) => {
      const target = e.target as HTMLFormElement
      return {
        inputName: target.name,
        inputValue: target.value,
        inputKeyCode: e.keyCode,
        target,
        preventDefault: () => e.preventDefault(),
      }
    }, [])

    const IconWrapper = React.useCallback(
      ({ className, name, color, closeIconSearch, onPress }: IconWrapper) => {
        return (
          <CreateIconWrapper
            className={className}
            name={name}
            color={color}
            closeIconSearch={closeIconSearch}
            onClick={(e) => {
              onPress && onPress()
              if (onIconClick) {
                onIconClick({ inputName: name ?? '', inputValue: _value, target: e.target })
              }
            }}
            type={type}
            _value={_value}
            onClickCloseIconSearch={() => setValue('')}
          />
        )
      },
      [_value, onIconClick, type],
    )

    const handleKeyUp = React.useCallback((e: React.KeyboardEvent) => onKeyUp && onKeyUp(onPressKey(e)), [onKeyUp])

    const handleMouseEnter = React.useCallback(
      (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => onMouseEnter?.(e),
      [onMouseEnter],
    )

    const handleMouseLeave = React.useCallback(
      (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => onMouseLeave?.(e),
      [onMouseLeave],
    )

    const handleKeyPress = React.useCallback(
      (e: React.KeyboardEvent) => onKeyPress && onKeyPress(onPressKey(e)),
      [onKeyPress],
    )

    const handleClick = React.useCallback(
      (e: React.MouseEvent<Element>) => {
        const target = e.target as HTMLFormElement
        if (onClick) {
          onClick({
            inputName: target.name,
            inputValue: target.value,
            target: target,
          })
        }
      },
      [onClick],
    )

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // --- solution to prevent cursor jump ---
        if (
          inputType !== InputType.DATE &&
          inputType !== InputType.DATETIME_LOCAL &&
          inputType !== InputType.NUMBER &&
          inputType !== InputType.EMAIL
        ) {
          const caret = e.target.selectionStart
          const element = e.target
          window.requestAnimationFrame(() => {
            element.selectionStart = caret
            element.selectionEnd = caret
          })
        }
        if (!forceControl) setValue(e.target.value)
        if (onChange) {
          onChange({
            inputName: e.target.name,
            inputValue: e.target.value,
            inputSelectionStart: e.target.selectionStart,
            target: e.target,
          })
        }
      },
      [forceControl, onChange, inputType],
    )

    const handleFocus = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement, Element>) => {
        onFocus?.(e)
        setIsFocused(true)
      },
      [onFocus],
    )

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement, Element>) => {
        onBlur?.(e)
        setIsFocused(false)
      },
      [onBlur],
    )

    const handlePressIconPwd = React.useCallback(() => {
      if (inputType === 'password') {
        setInputType('text')
        setIsShowPwd(true)
      } else {
        setInputType('password')
        setIsShowPwd(false)
      }
    }, [inputType])

    React.useEffect(() => {
      setValue(value ?? defaultValue ?? '')
    }, [value, defaultValue])

    React.useEffect(() => {
      setIsFocused(focused ?? false)
    }, [focused])

    React.useEffect(() => {
      if (isFocused) setIsDirty(true)
      else if (isDirty) setIsTouched(true)
    }, [isFocused, isDirty])

    React.useEffect(() => {
      if (!validator || !isTouched) return
      setLocalStatus(validator(_value))
    }, [isFocused, isTouched, validator])

    React.useEffect(() => {
      setLocalStatus(status || InputStatus.DEFAULT)
    }, [status])

    React.useEffect(() => {
      if (onStatusChange) onStatusChange(localStatus)
    }, [localStatus, onStatusChange])

    return {
      localStatus,
      inputType,
      _value,
      isShowPwd,
      handleBlur,
      handleChange,
      handleClick,
      handleFocus,
      handleKeyPress,
      handleKeyUp,
      handleMouseEnter,
      handleMouseLeave,
      IconWrapper,
      handlePressIconPwd,
    }
  } catch {
    return {
      localStatus: status || InputStatus.DEFAULT,
      inputType: type,
      _value: defaultValue ?? undefined,
      isShowPwd: false,
      IconWrapper: CreateIconWrapper,
    }
  }
}

const CreateIconWrapper = ({
  className,
  name,
  color,
  closeIconSearch,
  onClick,
  type,
  _value,
  onClickCloseIconSearch,
}: IconWrapper) => {
  return (
    <div {...(type === 'password' && { 'data-show-pwd': true })} onClick={onClick}>
      <Icon className={className} name={name} size={IconSize.SMALL} color={color} />
      {_value && _value.length > 0 && closeIconSearch && (
        <Icon
          onClick={onClickCloseIconSearch}
          className={hashClass(clsx(is('justified-self')))}
          name={IconName.TIMES_CIRCLE}
          size={IconSize.SMALL}
        />
      )}
    </div>
  )
}
