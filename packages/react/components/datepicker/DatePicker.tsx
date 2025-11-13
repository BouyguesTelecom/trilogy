import clsx from 'clsx'
import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Text, TextLevels, TextMarkup } from '../../components/text'
import { useTrilogyContext } from '../../context'
import { hashClass } from '../../helpers'
import { TypographyColor } from '../../objects'
import { has, is } from '../../services'
import { Calendar, ChangeEventCalendar } from '../calendar'
import { Icon, IconName, IconSize } from '../icon'
import { DatePickerFormatEnum, DatePickerModeEnum, DatePickerVariantEnum } from './DatePickerEnum'
import { DatePickerProps, DatePickerRef } from './DatePickerProps'

/**
 * DatePicker Component
 * @param value {Date | null} Current date value
 * @param onChange {Function} OnChange DatePicker Event
 * @param minDate {Date} Minimum selectable date
 * @param maxDate {Date} Maximum selectable date
 * @param disabled {boolean} Disabled datepicker
 * @param readOnly {boolean} Read only datepicker
 * @param placeholder {string} Placeholder text
 * @param format {DatePickerFormatEnum} Date format for display
 * @param label {string} Label for datepicker
 * @param mode {DatePickerModeEnum} DatePicker mode
 * @param variant {DatePickerVariantEnum} DatePicker variant
 * @param required {boolean} Required field
 * @param error {string} Error message
 * @param helperText {string} Helper text
 * @param autoFocus {boolean} Auto focus on mount
 * @param onOpen {Function} Callback when picker opens
 * @param onClose {Function} Callback when picker closes
 * @param open {boolean} Controlled open state
 * @param name {string} Field name for forms
 * @param className {string} Additional CSS Classes
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test ID
 * @param id {string} Component ID
 */
const DatePicker = React.forwardRef<DatePickerRef, DatePickerProps>(
  (
    {
      value,
      onChange,
      minDate,
      maxDate,
      disabled = false,
      readOnly = false,
      placeholder = 'Sélectionner une date',
      format = DatePickerFormatEnum.DD_MM_YYYY,
      label,
      mode = DatePickerModeEnum.DATE,
      variant = DatePickerVariantEnum.OUTLINED,
      required = false,
      error,
      helperText,
      autoFocus = false,
      onOpen,
      onClose,
      open: controlledOpen,
      name,
      className,
      accessibilityLabel,
      testId,
      id = useId(),
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const idHelp = useId()
    const calendarRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const [isOpen, setIsOpen] = useState<boolean>(controlledOpen ?? false)
    const [inputValue, setInputValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)

    // Format date according to the specified format
    const formatDate = useCallback((date: Date | null): string => {
      if (!date) return ''

      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      const shortYear = year.toString().slice(-2)

      switch (format) {
        case DatePickerFormatEnum.DD_MM_YYYY:
          return `${day}/${month}/${year}`
        case DatePickerFormatEnum.MM_DD_YYYY:
          return `${month}/${day}/${year}`
        case DatePickerFormatEnum.YYYY_MM_DD:
          return `${year}-${month}-${day}`
        case DatePickerFormatEnum.DD_MM_YY:
          return `${day}/${month}/${shortYear}`
        case DatePickerFormatEnum.MM_DD_YY:
          return `${month}/${day}/${shortYear}`
        case DatePickerFormatEnum.YY_MM_DD:
          return `${shortYear}-${month}-${day}`
        default:
          return `${day}/${month}/${year}`
      }
    }, [format])

    // Parse date from input string
    const parseDate = useCallback((dateString: string): Date | null => {
      if (!dateString) return null

      let day: number, month: number, year: number

      switch (format) {
        case DatePickerFormatEnum.DD_MM_YYYY:
        case DatePickerFormatEnum.DD_MM_YY: {
          const parts = dateString.split('/')
          if (parts.length !== 3) return null
          day = parseInt(parts[0], 10)
          month = parseInt(parts[1], 10) - 1
          year = parseInt(parts[2], 10)
          if (format === DatePickerFormatEnum.DD_MM_YY && year < 100) {
            year += year < 50 ? 2000 : 1900
          }
          break
        }
        case DatePickerFormatEnum.MM_DD_YYYY:
        case DatePickerFormatEnum.MM_DD_YY: {
          const parts = dateString.split('/')
          if (parts.length !== 3) return null
          month = parseInt(parts[0], 10) - 1
          day = parseInt(parts[1], 10)
          year = parseInt(parts[2], 10)
          if (format === DatePickerFormatEnum.MM_DD_YY && year < 100) {
            year += year < 50 ? 2000 : 1900
          }
          break
        }
        case DatePickerFormatEnum.YYYY_MM_DD:
        case DatePickerFormatEnum.YY_MM_DD: {
          const parts = dateString.split('-')
          if (parts.length !== 3) return null
          year = parseInt(parts[0], 10)
          month = parseInt(parts[1], 10) - 1
          day = parseInt(parts[2], 10)
          if (format === DatePickerFormatEnum.YY_MM_DD && year < 100) {
            year += year < 50 ? 2000 : 1900
          }
          break
        }
        default:
          return null
      }

      const date = new Date(year, month, day)
      if (isNaN(date.getTime())) return null

      return date
    }, [format])

    // Handle calendar date change
    const handleCalendarChange = useCallback((calendarValue: ChangeEventCalendar) => {
      const selectedDate = Array.isArray(calendarValue) ? calendarValue[0] : calendarValue
      if (selectedDate instanceof Date) {
        setInputValue(formatDate(selectedDate))
        onChange?.(selectedDate)
        setIsOpen(false)
        onClose?.()
      }
    }, [formatDate, onChange, onClose])

    // Handle input change (manual typing)
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)

      const parsedDate = parseDate(newValue)
      if (parsedDate) {
        onChange?.(parsedDate)
      }
    }, [parseDate, onChange])

    // Handle input focus (show native keyboard on mobile)
    const handleInputFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)

      // On mobile web, show native keyboard for date input
      if (mode === DatePickerModeEnum.DATE && window.innerWidth <= 768) {
        e.target.type = 'date'
      }
    }, [mode])

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Escape':
          if (isOpen) {
            setIsOpen(false)
            onClose?.()
            e.preventDefault()
          }
          break
        case 'Enter':
        case ' ':
          if (!isOpen && !disabled && !readOnly) {
            setIsOpen(true)
            onOpen?.()
            e.preventDefault()
          }
          break
        case 'ArrowDown':
          if (!isOpen && !disabled && !readOnly) {
            setIsOpen(true)
            onOpen?.()
            e.preventDefault()
          }
          break
        case 'Tab':
          if (isOpen) {
            setIsOpen(false)
            onClose?.()
          }
          break
      }
    }, [isOpen, disabled, readOnly, onOpen, onClose])

    // Handle input blur
    const handleInputBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)

      // Reset input type on blur
      if (e.target.type === 'date') {
        e.target.type = 'text'
      }
    }, [])

    // Handle calendar icon click
    const handleCalendarIconClick = useCallback(() => {
      if (disabled || readOnly) return

      const newOpenState = !isOpen
      setIsOpen(newOpenState)

      if (newOpenState) {
        onOpen?.()
      } else {
        onClose?.()
      }
    }, [disabled, readOnly, isOpen, onOpen, onClose])

    // Handle click outside to close calendar
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target as Node) &&
            inputRef.current && !inputRef.current.contains(event.target as Node)) {
          setIsOpen(false)
          onClose?.()
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen, onClose])

    // Update input value when value prop changes
    useEffect(() => {
      setInputValue(formatDate(value ?? null))
    }, [value, formatDate])

    // Update open state when controlled
    useEffect(() => {
      if (controlledOpen !== undefined) {
        setIsOpen(controlledOpen)
      }
    }, [controlledOpen])

    // Auto focus
    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus()
      }
    }, [autoFocus])

    // CSS Classes
    const wrapperClasses = hashClass(
      styled,
      clsx('field', 'datepicker-field', className, {
        [has('error')]: error,
        [is('disabled')]: disabled,
      }),
    )

    const controlClasses = hashClass(
      styled,
      clsx('control', has('icons-right')),
    )

    const inputClasses = hashClass(
      styled,
      clsx('input', 'datepicker-input', {
        [is('focused')]: isFocused,
        [is('error')]: error,
      }),
    )

    const inputLabelClasses = hashClass(styled, 'input-label')
    const helpClasses = clsx('help', error && is('error'))
    const calendarWrapperClasses = hashClass(
      styled,
      clsx('datepicker-calendar', {
        [is('open')]: isOpen,
      }),
    )

    return (
      <div className={wrapperClasses} {...others}>
        {label && (
          <label className={inputLabelClasses} htmlFor={id}>
            {label}{' '}
            {required && (
              <Text markup={TextMarkup.SPAN} typo={TypographyColor.TEXT_ERROR}>
                *
              </Text>
            )}
          </label>
        )}

        <div className={controlClasses}>
          <input
            ref={(node) => {
              if (ref) {
                if (typeof ref === 'function') {
                  ref(node)
                } else {
                  ;(ref as React.MutableRefObject<HTMLInputElement | null>).current = node
                }
              }
              ;(inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node
            }}
            id={id}
            name={name}
            type="text"
            className={inputClasses}
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-label={!label ? accessibilityLabel : undefined}
            aria-describedby={idHelp}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            role="combobox"
            data-testid={testId}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />

          <div className="icon-right" onClick={handleCalendarIconClick}>
            <Icon
              name={IconName.SEARCH}
              size={IconSize.SMALL}
              color={disabled ? 'disabled' : undefined}
            />
          </div>
        </div>

        {isOpen && (
          <div
            ref={calendarRef}
            className={calendarWrapperClasses}
            role="dialog"
            aria-label="Sélecteur de date"
            aria-modal="true"
          >
            <Calendar
              value={value ?? undefined}
              onChange={handleCalendarChange}
              minDate={minDate}
              maxDate={maxDate}
              disabled={disabled}
              readOnly={readOnly}
            />
          </div>
        )}

        {(error || helperText) && (
          <Text className={helpClasses} id={idHelp} level={TextLevels.TWO}>
            {error || helperText}
          </Text>
        )}
      </div>
    )
  },
)

DatePicker.displayName = 'DatePicker'
export default DatePicker
