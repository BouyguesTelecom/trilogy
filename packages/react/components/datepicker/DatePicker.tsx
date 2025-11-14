import { Calendar, ChangeEventCalendar } from '@/components/calendar'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useState } from 'react'

interface HandleKeyPress {
  event: React.KeyboardEvent<HTMLInputElement>
  sensitiveValue: number | false
  maxValue: number
  segment: string
  segmentPosition: number
  segmentSetter: React.Dispatch<React.SetStateAction<string>>
}

interface DatePickerProps {
  onChange?: (date: Date | null) => void
}

const APPROXIMATIVE_HEIGHT_CALENDAR = 420

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(({ onChange }) => {
  const { styled } = useTrilogyContext()

  const [day, setDay] = useState<string>('jj')
  const [month, setMonth] = useState<string>('mm')
  const [year, setYear] = useState<string>('aaaa')
  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false)
  const [canContinueTyping, setCanContinueTyping] = useState<boolean>(false)
  const [yearPosition, setYearPosition] = useState<number>(0)
  const [openUpward, setOpenUpward] = useState<boolean>(false)

  const refsSegment = React.useRef<HTMLInputElement[]>([])
  const refContainer = React.useRef<HTMLDivElement>(null)

  const calendarContainerClasses = hashClass(styled, clsx('date-picker-calendar', openUpward && 'calendar-top'))
  const datePickerClasses = hashClass(styled, clsx('date-picker'))

  const handleKeyPress = ({
    event,
    sensitiveValue,
    maxValue,
    segment,
    segmentPosition,
    segmentSetter,
  }: HandleKeyPress) => {
    const { key } = event
    event.preventDefault()
    if (!/[0-9]/.test(key)) return
    const digit = parseInt(key)
    const isDay = segmentPosition === 0
    const isMonth = segmentPosition === 1
    const isYear = segmentPosition === 2

    const newValue = !canContinueTyping ? (isYear ? `000${key}` : `0${key}`) : isYear ? segment + key : segment[1] + key

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
      if (num >= 1 && num <= maxValue) segmentSetter(isYear ? newValue.slice(-4) : newValue)
      if (!isYear || (isYear && yearPosition === 3)) {
        setCanContinueTyping(false)
        setTimeout(() => {
          if (segmentPosition < 2) refsSegment.current[segmentPosition + 1].focus()
        }, 0)
      }
    }

    if (isYear) setYearPosition((prev) => (prev === 3 ? 0 : prev + 1))

    const newDay = parseInt(isDay ? newValue : day)
    const newMonth = parseInt(isMonth ? newValue : month)
    const newYear = parseInt(isYear ? newValue : year)

    if (newDay && newMonth && newYear) {
      const newDate = new Date(`${newYear}-${newMonth}-${newDay}`)
      if (onChange) onChange(isNaN(newDate?.getTime()) ? null : newDate)
    }
  }

  const handleKeyDownDay = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') e.preventDefault()
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCanContinueTyping(false)
    e.target.select()
  }

  const handlePressCalendar = () => {
    if (refContainer.current) {
      const { top, bottom } = refContainer.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const spaceBelow = windowHeight - bottom
      const padding = 10
      const maxHeightBelow = spaceBelow - padding
      const maxHeightAbove = top - padding
      const openUpward = maxHeightBelow < APPROXIMATIVE_HEIGHT_CALENDAR && maxHeightAbove > maxHeightBelow
      setOpenUpward(openUpward)
    }
    setIsOpenCalendar((prev) => !prev)
  }

  const handleChangeCalendar = (e: ChangeEventCalendar) => {
    const dateCalendar = e as Date
    const dateDay = dateCalendar.getDate()
    const dateMonth = dateCalendar.getMonth() + 1
    const dateYear = dateCalendar.getFullYear()
    setDay(dateDay < 10 ? `0${dateDay}` : String(dateDay))
    setMonth(dateMonth < 10 ? `0${dateMonth}` : String(dateMonth))
    setYear(String(dateYear))
    setIsOpenCalendar(false)
    if (onChange) onChange(dateCalendar)
  }

  return (
    <div ref={refContainer} className={datePickerClasses}>
      <input
        type='text'
        value={day}
        onKeyUp={(e) =>
          handleKeyPress({
            event: e,
            sensitiveValue: 3,
            maxValue: 31,
            segment: day,
            segmentPosition: 0,
            segmentSetter: setDay,
          })
        }
        onFocus={handleFocus}
        onKeyDown={handleKeyDownDay}
        placeholder='jj'
        maxLength={2}
        readOnly
        ref={(el) => {
          if (el) refsSegment.current[0] = el
        }}
      />
      <input
        type='text'
        value={month}
        onKeyUp={(e) =>
          handleKeyPress({
            event: e,
            sensitiveValue: 1,
            maxValue: 12,
            segment: month,
            segmentPosition: 1,
            segmentSetter: setMonth,
          })
        }
        onFocus={handleFocus}
        onKeyDown={handleKeyDownDay}
        placeholder='mm'
        maxLength={2}
        readOnly
        ref={(el) => {
          if (el) refsSegment.current[1] = el
        }}
      />
      <input
        type='text'
        value={year}
        onKeyUp={(e) =>
          handleKeyPress({
            event: e,
            sensitiveValue: false,
            maxValue: 9999,
            segment: year,
            segmentPosition: 2,
            segmentSetter: setYear,
          })
        }
        onFocus={handleFocus}
        onKeyDown={handleKeyDownDay}
        placeholder='aaaa'
        maxLength={4}
        readOnly
        ref={(el) => {
          if (el) refsSegment.current[2] = el
        }}
      />
      <button onClick={handlePressCalendar}>
        <Icon name='tri-calendar' />
      </button>
      <div className={calendarContainerClasses} style={{ display: isOpenCalendar ? 'block' : 'none' }}>
        <Calendar onChange={handleChangeCalendar} />
      </div>
    </div>
  )
})

DatePicker.displayName = ComponentName.DatePicker
export default DatePicker
