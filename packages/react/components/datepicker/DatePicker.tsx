import { Calendar } from '@/components/calendar'
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
  isYear: boolean
  segmentPosition: number
  segmentSetter: React.Dispatch<React.SetStateAction<string>>
}

const APPROXIMATIVE_HEIGHT_CALENDAR = 420

const DatePicker = React.forwardRef<HTMLDivElement>((): JSX.Element => {
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
    isYear,
    segmentPosition,
    segmentSetter,
  }: HandleKeyPress) => {
    const { key } = event
    event.preventDefault()
    if (!/[0-9]/.test(key)) return
    const digit = parseInt(key)

    if (!canContinueTyping) {
      segmentSetter(isYear ? `000${key}` : `0${key}`)
      if (sensitiveValue === false || digit <= sensitiveValue) setCanContinueTyping(true)
      if (sensitiveValue && digit > sensitiveValue)
        setTimeout(() => {
          if (segmentPosition < 2) refsSegment.current[segmentPosition + 1].focus()
        }, 0)
    }

    if (canContinueTyping) {
      const newValue = isYear ? segment + key : segment[1] + key
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
            isYear: false,
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
            isYear: false,
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
            isYear: true,
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
        <Calendar />
      </div>
    </div>
  )
})

DatePicker.displayName = ComponentName.DatePicker
export default DatePicker
