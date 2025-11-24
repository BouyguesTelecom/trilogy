import { Calendar, ChangeEventCalendar } from '@/components/calendar'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { useClickOutside } from '@/helpers/clickOutside'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { TypographyColor } from '@/objects'
import { has, is } from '@/services'
import clsx from 'clsx'
import React, {
  forwardRef,
  KeyboardEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModalBody } from '../modal'
import { Text, TextLevels, TextMarkup } from '../text'
import { DatePickerProps, HandleKeyPress, Segments, SegmentType } from './DatePickerProps'

const APPROXIMATIVE_HEIGHT_CALENDAR = 420

const checkIsValidDate = (date: Date, year: string, month: string, day: string) =>
  date.getFullYear() === parseInt(year) &&
  date.getMonth() === parseInt(month) - 1 &&
  date.getDate() === parseInt(day) &&
  !isNaN(date.getTime())

const getFirstDayFocusable = () => {
  const calendar = document.querySelector('[data-calendar-trilogy]') as HTMLTableElement
  const activeDate = calendar.querySelector(`[data-active-date]`)
  const today = calendar.querySelector(`[data-today]`)
  const firstOfMonth = calendar.querySelector(`[data-calendar-trilogy] tbody button:not(:disabled)`)
  return (activeDate ?? today ?? firstOfMonth) as HTMLElement
}

/**
 * DatePicker Component
 * @param id
 * @param value {Date | [Date, Date] | [Date] | []} Value for DatePicker
 * @param minDate {Date} Min value for DatePicker
 * @param maxDate {Date} Max value for DatePicker
 * @param disabled {boolean} Disabled DatePicker
 * @param readOnly {boolean} Read only DatePicker
 * @param disabledDates {Date[]} Values disabled
 * @param onChange {Function} DatePicker DatePicker Event
 * @param className {string} Additional CSS Classes
 * @param label {string} Label for DatePicker
 * @param sample {string} Sample for DatePicker (below label)
 * @param help {string} Help for DatePicker
 * @param required {boolean} Required DatePicker
 * @param status {InputStatus} DatePicker with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param testId {string} Test Id for Test Integration
 */
const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      onChange,
      value,
      minDate,
      maxDate,
      className,
      label,
      sample,
      required,
      help,
      status,
      disabled,
      disabledDates,
      id = React.useId(),
      testId,
      name,
      ...others
    },
    ref,
  ) => {
    const { styled } = useTrilogyContext()
    const { 'data-cy': dataCy, ...otherProps } = others as any
    const [day, setDay] = useState<string>('jj')
    const [month, setMonth] = useState<string>('mm')
    const [year, setYear] = useState<string>('aaaa')
    const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false)
    const [canContinueTyping, setCanContinueTyping] = useState<boolean>(false)
    const [focused, setIsFocused] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [portalPosition, setPortalPosition] = useState<{
      top: number
      left: number
      width: number
    }>({ top: 0, left: 0, width: 0 })

    const refsSegment = useRef<HTMLSpanElement[]>([])
    const refsFocusable = useRef<HTMLElement[]>([])
    const refContainer = useRef<HTMLDivElement>(null)
    const refCalendar = useRef<HTMLTableElement>(null)
    const currentFocusIndexRef = useRef<number>(0)
    const segmentFocused = useRef<HTMLSpanElement | null>(null)
    const refIcon = useRef(null)
    const refInput = useRef<HTMLDivElement>(null)

    const calendarContainerClasses = hashClass(styled, clsx('date-picker-calendar'))
    const datePickerClasses = hashClass(styled, clsx('field date-picker', className))
    const controlClasses = hashClass(styled, clsx('control', has('icons-right')))
    const inputClasses = hashClass(styled, clsx('input', status && is(status), focused && is('focused')))
    const iconRightClasses = hashClass(styled, clsx('icon-right'))
    const helpClasses = clsx('help', status && is(status))
    const inputLabelClasses = hashClass(styled, 'input-label')
    const inputHidden = hashClass(styled, 'input-hidden')

    useImperativeHandle(ref, () => refContainer.current as HTMLDivElement)

    useClickOutside(refCalendar, () => {
      setTimeout(() => {
        setIsOpenCalendar(false)
      }, 0)
    })

    useClickOutside(refInput, () => {
      setTimeout(() => {
        setIsFocused(false)
      }, 0)
    })

    const segments: Segments = useMemo(
      () => ({
        day: {
          sensitiveValue: 3,
          maxValue: 31,
          segment: day,
          segmentPosition: 0,
          segmentSetter: setDay,
          label: 'jj',
          initValue: '01',
        },
        month: {
          sensitiveValue: 1,
          maxValue: 12,
          segment: month,
          segmentPosition: 1,
          segmentSetter: setMonth,
          label: 'mm',
          initValue: '01',
        },
        year: {
          sensitiveValue: false,
          maxValue: 9999,
          segment: year,
          segmentPosition: 2,
          segmentSetter: setYear,
          label: 'aaaa',
          initValue: String(new Date().getFullYear()),
        },
      }),
      [day, month, year],
    )

    const calendarValue = useMemo(() => {
      if (parseInt(day) && parseInt(month) && parseInt(year)) {
        const newDate = new Date(`${year}-${month}-${day}`)
        const isValidDate = checkIsValidDate(newDate, year, month, day)
        if (isValidDate) return newDate
      }
    }, [day, month, year])

    const calculatePortalPosition = useCallback(() => {
      if (!refInput.current) return

      const rect = refInput.current.getBoundingClientRect()
      const { top, bottom, left, width } = rect
      const windowHeight = window.innerHeight
      const spaceBelow = windowHeight - bottom
      const padding = 10
      const maxHeightBelow = spaceBelow - padding
      const maxHeightAbove = top - padding
      const shouldOpenUpward = maxHeightBelow < APPROXIMATIVE_HEIGHT_CALENDAR && maxHeightAbove > maxHeightBelow

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      setPortalPosition({
        top: shouldOpenUpward
          ? top + scrollTop - APPROXIMATIVE_HEIGHT_CALENDAR - padding
          : bottom + scrollTop + padding,
        left: left + scrollLeft,
        width: width,
      })
    }, [])

    const handleKeyPress = useCallback(
      ({ event, type }: HandleKeyPress) => {
        if (disabled) return
        const key = event.data
        event.preventDefault()
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        if (!allowedKeys.includes(key)) return
        const digit = parseInt(key)
        const { segmentPosition, segment, segmentSetter, sensitiveValue, maxValue } = segments[type]
        const isDay = type === 'day'
        const isMonth = type === 'month'
        const isYear = type === 'year'
        const newValue = !canContinueTyping
          ? isYear
            ? `000${key}`
            : `0${key}`
          : isYear
          ? segment + key
          : segment[1] + key

        if (!canContinueTyping) {
          segmentSetter(newValue)
          if (sensitiveValue === false || digit <= sensitiveValue) setCanContinueTyping(true)
          if (sensitiveValue && digit > sensitiveValue)
            setTimeout(() => {
              if (segmentPosition < 2) refsSegment.current[segmentPosition + 1].focus()
            }, 0)
        }

        if (canContinueTyping) {
          const num = parseInt(newValue)
          if (isYear && String(num).length === 5) return
          if (num >= 1 && num <= maxValue) segmentSetter(isYear ? newValue.slice(-4) : newValue)
          if (!isYear) {
            setCanContinueTyping(false)
            setTimeout(() => {
              if (segmentPosition < 2) refsSegment.current[segmentPosition + 1].focus()
            }, 0)
          }
        }

        const newDay = isDay ? newValue : day
        const newMonth = isMonth ? newValue : month
        const newYear = isYear ? newValue : year
        if (parseInt(newDay) && parseInt(newMonth) && parseInt(newYear)) {
          if (onChange) onChange(`${newYear.slice(-4)}-${newMonth}-${newDay}`)
        }
      },
      [disabled, segments, canContinueTyping, onChange],
    )

    const formatDateValue = () => {
      const isValidDate = parseInt(day) && parseInt(month) && parseInt(year)
      return !isValidDate ? '' : `${year}-${month}-${day}`
    }

    const handleKeyDownDay = useCallback(
      (e: React.KeyboardEvent<HTMLSpanElement>, type: SegmentType) => {
        if (disabled) return
        const { segmentSetter, label, maxValue, initValue, segmentPosition } = segments[type]

        switch (e.key) {
          case 'Backspace':
            e.preventDefault()
            setCanContinueTyping(false)
            segmentSetter(label)
            break
          case ' ':
            e.preventDefault()
            setIsOpenCalendar(true)
            segmentFocused.current = refsSegment.current[segmentPosition]
            break
          case 'Escape':
            e.preventDefault()
            setIsOpenCalendar(false)
            break
          case 'ArrowUp':
            e.preventDefault()
            segmentSetter((prev) => {
              if (type === 'year' && prev === 'aaaa') return initValue
              const currentValue = parseInt(prev) || 0
              const nextValue = (currentValue % maxValue) + 1
              return String(nextValue).padStart(2, '0')
            })
            break
          case 'ArrowDown':
            e.preventDefault()
            segmentSetter((prev) => {
              if (type === 'year' && prev === 'aaaa') return initValue
              const value = parseInt(prev)
              if (!value) return String(maxValue).padStart(2, '0')
              const nextValue = value <= 1 ? maxValue : value - 1
              return String(nextValue).padStart(2, '0')
            })
            break
          default:
            return
        }
      },
      [disabled, segments, year, month, day],
    )

    const handleFocus = () => {
      if (disabled) return
      setIsFocused(true)
      setCanContinueTyping(false)
    }

    const handlePressCalendar = () => {
      if (disabled) return
      if (refContainer.current) segmentFocused.current = refIcon.current
      calculatePortalPosition()
      setIsOpenCalendar(true)
    }

    const handleChangeCalendar = React.useCallback(
      (e: ChangeEventCalendar) => {
        const dateCalendar = e as Date
        const dateDay = dateCalendar.getDate()
        const dateMonth = dateCalendar.getMonth() + 1
        const dateYear = dateCalendar.getFullYear()
        setDay(dateDay < 10 ? `0${dateDay}` : String(dateDay))
        setMonth(dateMonth < 10 ? `0${dateMonth}` : String(dateMonth))
        setYear(String(dateYear))
        setIsOpenCalendar(false)
        if (onChange) onChange(dateCalendar.toISOString().split('T')[0])
      },
      [onChange],
    )

    const onKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return
        if (isOpenCalendar && e.key === 'Tab') {
          e.preventDefault()
          if (refsFocusable.current) {
            const currentIndex = currentFocusIndexRef.current
            const offset = e.shiftKey ? -1 : 1
            const nextIndex = (currentIndex + offset + refsFocusable?.current.length) % refsFocusable?.current.length
            currentFocusIndexRef.current = nextIndex
            refsFocusable.current[nextIndex].focus()
          }
        }
        if (isOpenCalendar && ['Escape', 'Enter'].includes(e.key)) {
          e.preventDefault()
          setIsOpenCalendar(false)
          segmentFocused.current?.focus()
        }
      },
      [disabled, isOpenCalendar],
    )

    const calendar = useMemo(() => {
      return (
        <Calendar
          disabledDates={disabledDates}
          maxDate={maxDate ? new Date(maxDate) : undefined}
          minDate={minDate ? new Date(minDate) : undefined}
          onChange={handleChangeCalendar}
          ref={refCalendar}
          value={calendarValue}
          onMonthChange={() => {
            if (isOpenCalendar && refCalendar.current) {
              const calendar = refCalendar.current
              setTimeout(() => {
                refsFocusable.current = []
                const elms = calendar.querySelectorAll(`[data-focusable=true]`)
                const firstDayFocusable = getFirstDayFocusable()
                refsFocusable.current[0] = firstDayFocusable
                elms.forEach((el, i) => {
                  const htmlElement = el as HTMLElement
                  if (htmlElement) refsFocusable.current[i + 1] = htmlElement
                })
              }, 10)
            }
          }}
        />
      )
    }, [
      disabledDates,
      maxDate,
      minDate,
      handleChangeCalendar,
      refCalendar,
      calendarValue,
      isOpenCalendar,
      refsFocusable,
    ])

    useEffect(() => {
      if (!value) {
        setDay('jj')
        setMonth('mm')
        setYear('aaaa')
      } else {
        const [year, month, day] = value.split('-')
        setDay(day)
        setMonth(month)
        setYear(year)
      }
    }, [value])

    useEffect(() => {
      if (isOpenCalendar && refCalendar.current) {
        const elms = refCalendar.current.querySelectorAll(`[data-focusable=true]`)
        const firstDayFocusable = getFirstDayFocusable()
        refsFocusable.current[0] = firstDayFocusable
        firstDayFocusable.focus()
        elms.forEach((el, i) => {
          const htmlElement = el as HTMLElement
          if (htmlElement) refsFocusable.current[i + 1] = htmlElement
        })
      }
      if (!isOpenCalendar && currentFocusIndexRef.current) currentFocusIndexRef.current = 0
    }, [isOpenCalendar, refCalendar, currentFocusIndexRef])

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
      if (!isOpenCalendar) return
      const handleUpdate = () => calculatePortalPosition()
      window.addEventListener('scroll', handleUpdate, true)
      window.addEventListener('resize', handleUpdate)
      return () => {
        window.removeEventListener('scroll', handleUpdate, true)
        window.removeEventListener('resize', handleUpdate)
      }
    }, [isOpenCalendar, calculatePortalPosition])

    return (
      <div ref={refContainer} className={datePickerClasses} onKeyDown={onKeyDown}>
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
        {sample && (
          <Text className='input-sample' level={TextLevels.TWO}>
            {sample}
          </Text>
        )}
        <div className={controlClasses}>
          <div
            role='group'
            aria-valuetext={formatDateValue()}
            aria-disabled={disabled}
            ref={refInput}
            className={inputClasses}
            onMouseDown={(e) => {
              if (disabled) return
              const clickedSegment = refsSegment.current.find((segment) => segment === document.activeElement)
              if (clickedSegment) return e.preventDefault()
              setTimeout(() => {
                refsSegment.current[0].focus()
              }, 0)
            }}
            {...otherProps}
          >
            <span
              aria-valuemin={1}
              aria-valuemax={31}
              aria-readonly={false}
              aria-label='day'
              role='spinbutton'
              suppressContentEditableWarning
              autoCorrect='off'
              autoCapitalize='none'
              spellCheck={false}
              aria-valuetext={day}
              contentEditable={!disabled}
              inputMode='numeric'
              onBeforeInput={(e) => handleKeyPress({ event: e, type: 'day' })}
              onFocus={handleFocus}
              onKeyDown={(e) => handleKeyDownDay(e, 'day')}
              onMouseDown={(e) => e.stopPropagation()}
              onChange={(e) => e.stopPropagation()}
              onInput={() => (refsSegment.current[0].textContent = day)}
              ref={(el) => {
                if (el) refsSegment.current[0] = el
              }}
            >
              {day}
            </span>
            <span>/</span>
            <span
              aria-valuemin={1}
              aria-valuemax={12}
              aria-readonly={false}
              aria-label='month'
              role='spinbutton'
              suppressContentEditableWarning
              autoCorrect='off'
              autoCapitalize='none'
              spellCheck={false}
              aria-valuetext={month}
              contentEditable={!disabled}
              inputMode='numeric'
              onBeforeInput={(e) => handleKeyPress({ event: e, type: 'month' })}
              onFocus={handleFocus}
              onKeyDown={(e) => handleKeyDownDay(e, 'month')}
              onMouseDown={(e) => e.stopPropagation()}
              onChange={(e) => e.stopPropagation()}
              onInput={() => (refsSegment.current[1].textContent = month)}
              ref={(el) => {
                if (el) refsSegment.current[1] = el
              }}
            >
              {month}
            </span>
            <span>/</span>
            <span
              aria-valuemin={0}
              aria-valuemax={9999}
              aria-readonly={false}
              aria-label='year'
              role='spinbutton'
              suppressContentEditableWarning
              autoCorrect='off'
              autoCapitalize='none'
              spellCheck={false}
              aria-valuetext={year}
              contentEditable={!disabled}
              inputMode='numeric'
              onBeforeInput={(e) => handleKeyPress({ event: e, type: 'year' })}
              onFocus={handleFocus}
              onKeyDown={(e) => handleKeyDownDay(e, 'year')}
              onMouseDown={(e) => e.stopPropagation()}
              onChange={(e) => e.stopPropagation()}
              onInput={() => (refsSegment.current[2].textContent = year)}
              ref={(el) => {
                if (el) refsSegment.current[2] = el
              }}
            >
              {year}
            </span>
            <input
              name={name}
              type='text'
              id={id}
              data-testid={testId}
              value={`${year}-${month}-${day}`}
              data-cy={dataCy}
              tabIndex={-1}
              className={inputHidden}
              onChange={(e) => {
                const [year, month, day] = e.target.value.split('-')
                setDay(parseInt(day) < 10 ? `0${day}` : day)
                setMonth(parseInt(month) < 10 ? `0${month}` : month)
                setYear(year.padStart(4, '0'))
              }}
            />
          </div>
          <button
            type='button'
            tabIndex={disabled ? -1 : undefined}
            onClick={handlePressCalendar}
            ref={refIcon}
            data-show-calendar='true'
            onFocus={() => {
              setIsFocused(false)
            }}
          >
            <Icon name='tri-calendar' className={iconRightClasses} />
          </button>
        </div>

        {help && <Text className={helpClasses}>{help}</Text>}

        {isOpenCalendar &&
          !isMobile &&
          ReactDOM.createPortal(
            <div
              className={calendarContainerClasses}
              style={{
                position: 'absolute',
                top: `${portalPosition.top}px`,
                left: `${portalPosition.left}px`,
                minWidth: `${portalPosition.width}px`,
                zIndex: 9999,
              }}
            >
              {calendar}
            </div>,
            document.body,
          )}
        {isOpenCalendar && isMobile && (
          <Modal active={isOpenCalendar} hideCloseButton={true}>
            <ModalBody>{calendar}</ModalBody>
          </Modal>
        )}
      </div>
    )
  },
)

DatePicker.displayName = ComponentName.DatePicker
export default DatePicker
