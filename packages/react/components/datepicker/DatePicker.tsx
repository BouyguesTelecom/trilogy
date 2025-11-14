import { Calendar, ChangeEventCalendar } from '@/components/calendar'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

type SegmentType = 'day' | 'month' | 'year'

interface HandleKeyPress {
  event: React.KeyboardEvent<HTMLInputElement>
  type: 'day' | 'month' | 'year'
}

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | null) => void
}

interface Segment {
  sensitiveValue: number | false
  maxValue: number
  segment: string
  segmentPosition: number
  segmentSetter: React.Dispatch<React.SetStateAction<string>>
  label: string
}

interface Segments {
  day: Segment
  month: Segment
  year: Segment
}

const APPROXIMATIVE_HEIGHT_CALENDAR = 420

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(({ onChange, value }, ref) => {
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
  React.useImperativeHandle(ref, () => refContainer.current as HTMLDivElement)

  const segments: Segments = {
    day: {
      sensitiveValue: 3,
      maxValue: 31,
      segment: day,
      segmentPosition: 0,
      segmentSetter: setDay,
      label: 'jj',
    },
    month: {
      sensitiveValue: 1,
      maxValue: 12,
      segment: month,
      segmentPosition: 1,
      segmentSetter: setMonth,
      label: 'mm',
    },
    year: {
      sensitiveValue: false,
      maxValue: 9999,
      segment: year,
      segmentPosition: 2,
      segmentSetter: setYear,
      label: 'aaaa',
    },
  }

  const handleKeyPress = ({ event, type }: HandleKeyPress) => {
    const { key } = event
    event.preventDefault()
    if (!/[0-9]/.test(key)) return
    const digit = parseInt(key)
    const { segmentPosition, segment, segmentSetter, sensitiveValue, maxValue } = segments[type]
    const isDay = type === 'day'
    const isMonth = type === 'month'
    const isYear = type === 'year'
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
    const newDay = isDay ? newValue : day
    const newMonth = isMonth ? newValue : month
    const newYear = isYear ? newValue : year

    if (parseInt(newDay) && parseInt(newMonth) && parseInt(newYear)) {
      const newDate = new Date(`${newYear}-${newMonth}-${newDay}`)
      const isValidDate =
        newDate.getFullYear() === parseInt(newYear) &&
        newDate.getMonth() === parseInt(newMonth) - 1 &&
        newDate.getDate() === parseInt(newDay) &&
        !isNaN(newDate.getTime())
      if (onChange) onChange(isNaN(newDate?.getTime()) || !isValidDate ? null : newDate)
    }
  }

  const handleKeyDownDay = (e: React.KeyboardEvent<HTMLInputElement>, type: SegmentType) => {
    e.preventDefault()
    const { segmentSetter } = segments[type]
    switch (e.key) {
      case 'Backspace':
        segmentSetter(type)
        break
      default:
        return
    }
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

  useEffect(() => {
    if (!value) return
    const dateDay = value.getDate()
    const dateMonth = value.getMonth() + 1
    const dateYear = value.getFullYear()
    setDay(dateDay < 10 ? `0${dateDay}` : String(dateDay))
    setMonth(dateMonth < 10 ? `0${dateMonth}` : String(dateMonth))
    setYear(String(dateYear))
  }, [value])

  return (
    <div ref={refContainer} className={datePickerClasses}>
      <input
        type='text'
        value={day}
        onKeyUp={(e) => handleKeyPress({ event: e, type: 'day' })}
        onFocus={handleFocus}
        onKeyDown={(e) => handleKeyDownDay(e, 'day')}
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
        onKeyUp={(e) => handleKeyPress({ event: e, type: 'month' })}
        onFocus={handleFocus}
        onKeyDown={(e) => handleKeyDownDay(e, 'month')}
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
        onKeyUp={(e) => handleKeyPress({ event: e, type: 'year' })}
        onFocus={handleFocus}
        onKeyDown={(e) => handleKeyDownDay(e, 'year')}
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
