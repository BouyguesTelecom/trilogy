import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Icon } from '../icon'

interface CalendarProps {
  value?: Date
}

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Venderedi', 'Samedi']

const Calendar = ({ value = new Date() }: CalendarProps) => {
  const { styled } = useTrilogyContext()
  const [visibleMonth, setVisibleMonth] = React.useState<Date>(value)
  const [activeDate, setActiveDate] = React.useState<Date>(value)
  const refsDays = React.useRef<HTMLButtonElement[]>([])
  const refDayFocused = React.useRef<HTMLButtonElement>()
  let globalDayIndex = 0

  const calendarClasses = hashClass(styled, clsx('calendar'))
  const calendarheaderClasses = hashClass(styled, clsx('calendar-header'))
  const calendarActiveMonthClasses = hashClass(styled, clsx('calendar-active-month'))
  const calendarDayLabelClasses = hashClass(styled, clsx('calendar-week-day-label'))
  const calendarWeekDay = hashClass(styled, clsx('calendar-week-day'))
  const calendarActiveDate = hashClass(styled, clsx('calendar-active-date'))
  const calendarNextMonth = hashClass(styled, clsx('calendar-next-month'))
  const calendarPrevMonth = hashClass(styled, clsx('calendar-prev-month'))

  const getAllDaysInMonth = React.useCallback((year: number, month: number) => {
    const date = new Date(year, month, 1)
    const days: Array<Date | null> = []
    const firstDayOfMonth = date.getDay()
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate()
    const allDays: Array<(Date | null)[]> = []
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null)
    for (let day = 1; day <= lastDayOfMonth; day++) days.push(new Date(year, month, day))
    for (let i = 0; i < days.length; i += 7) allDays.push(days.slice(i, i + 7))
    return allDays
  }, [])

  const allDaysInMonth = React.useMemo(() => {
    refsDays.current = []
    const activeYear = visibleMonth.getFullYear()
    const activeMonth = visibleMonth.getMonth()
    return getAllDaysInMonth(activeYear, activeMonth)
  }, [visibleMonth])

  const handleClickNextPrevMonth = React.useCallback((month: number) => {
    setVisibleMonth((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + month, prev.getDate())
      return nextMonth
    })
  }, [])

  const navigateWithKeyboard = React.useCallback(
    (currentIndex: number, nextIndex: number) => {
      const nextRef = refsDays.current[currentIndex + nextIndex]

      if (nextRef) {
        refDayFocused.current = nextRef
        return nextRef.focus()
      }

      setVisibleMonth((prev) => {
        const currentYear = prev.getFullYear()
        const currentMonth = prev.getMonth()
        if ([1, 7].includes(nextIndex)) return new Date(currentYear, currentMonth + 1)
        if ([-1, -7].includes(nextIndex)) return new Date(currentYear, currentMonth - 1)
        return prev
      })

      const prevDayFocused = new Date(Number(refDayFocused.current?.dataset.timestamp))
      setTimeout(() => {
        const year = prevDayFocused.getFullYear()
        const month = prevDayFocused.getMonth()
        const day = prevDayFocused.getDate() + nextIndex
        const nextDayFocused = new Date(year, month, day)
        refsDays.current[nextDayFocused.getDate() - 1].focus()
      }, 10)
    },
    [refsDays, refDayFocused],
  )

  const handlePressEnter = React.useCallback((e: React.KeyboardEvent) => {
    const elm = e.target as HTMLButtonElement
    if (!elm) return
    setActiveDate(new Date(Number(elm.dataset.timestamp)))
  }, [])

  const onKeyUp = React.useCallback((e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case 'ArrowRight':
        return navigateWithKeyboard(index, 1)
      case 'ArrowLeft':
        return navigateWithKeyboard(index, -1)
      case 'ArrowUp':
        return navigateWithKeyboard(index, -7)
      case 'ArrowDown':
        return navigateWithKeyboard(index, 7)
      case 'Enter':
        return handlePressEnter(e)
      default:
        return
    }
  }, [])

  return (
    <table className={calendarClasses}>
      <thead className={calendarheaderClasses}>
        <tr>
          <th colSpan={1} className={calendarPrevMonth}>
            <button onClick={() => handleClickNextPrevMonth(-1)}>
              <Icon name='tri-arrow-left' />
            </button>
          </th>
          <th className={calendarActiveMonthClasses} colSpan={5}>
            {visibleMonth.toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
            })}
          </th>
          <th colSpan={1} className={calendarNextMonth}>
            <button onClick={() => handleClickNextPrevMonth(1)}>
              <Icon name='tri-arrow-right' />
            </button>
          </th>
        </tr>
        <tr>
          {days.map((day, index) => {
            return (
              <th className={calendarDayLabelClasses} key={index}>
                {day.slice(0, 3)}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {allDaysInMonth.map((week, weekIndex) => {
          return (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                const ind = day !== null && globalDayIndex++

                const isActive =
                  day?.getFullYear() === activeDate.getFullYear() &&
                  day.getMonth() === activeDate.getMonth() &&
                  day.getDate() === activeDate.getDate()

                return (
                  <td colSpan={1} key={dayIndex} className={`${calendarWeekDay} ${isActive && calendarActiveDate}`}>
                    {day && ind !== false && (
                      <button
                        onClick={() => setActiveDate(day)}
                        onKeyUp={(e) => onKeyUp(e, ind)}
                        tabIndex={isActive ? 0 : -1}
                        aria-selected={isActive ? 'true' : 'false'}
                        data-timestamp={day?.getTime()}
                        ref={(el) => {
                          if (el) refsDays.current[ind] = el
                        }}
                      >
                        {day.getDate()}
                      </button>
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Calendar.displayName = ComponentName.Calendar
export default Calendar
