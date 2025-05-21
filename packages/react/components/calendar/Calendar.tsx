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
  const [focusedDate, setFocusedDate] = React.useState<Date>(value)
  const [activeDate, setActiveDate] = React.useState<Date>(value)
  const refsDays = React.useRef<HTMLButtonElement[]>([])
  let globalDayIndex = 0

  const calendarClasses = hashClass(styled, clsx('calendar'))
  const calendarheaderClasses = hashClass(styled, clsx('calendar-header'))
  const calendarActiveMonthClasses = hashClass(styled, clsx('calendar-active-month'))
  const calendarDayLabelClasses = hashClass(styled, clsx('calendar-week-day-label'))
  const calendarWeekDay = hashClass(styled, clsx('calendar-week-day'))
  const calendarActiveDate = hashClass(styled, clsx('calendar-active-date'))
  const calendarNextMonth = hashClass(styled, clsx('calendar-next-month'))
  const calendarPrevMonth = hashClass(styled, clsx('calendar-prev-month'))

  const getWeeksInMonth = React.useCallback((year: number, month: number) => {
    const date = new Date(year, month, 1)
    const days: Array<Date | null> = []
    const firstDayOfMonth = date.getDay()
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate()
    const weeks: Array<(Date | null)[]> = []

    for (let i = 0; i < firstDayOfMonth; i++) days.push(null)
    for (let day = 1; day <= lastDayOfMonth; day++) days.push(new Date(year, month, day))
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))

    return weeks
  }, [])

  const weeksInMonth = React.useMemo(() => {
    const activeYear = focusedDate.getFullYear()
    const activeMonth = focusedDate.getMonth()
    return getWeeksInMonth(activeYear, activeMonth)
  }, [focusedDate])

  const handleClickNextPrevMonth = React.useCallback((month: number) => {
    setFocusedDate((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + month, prev.getDate())
      return nextMonth
    })
  }, [])

  const handleClickNextPrevDay = React.useCallback((day: number) => {
    setFocusedDate((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + day)
      return nextMonth
    })
  }, [])

  const handlePressEnter = React.useCallback((e: React.KeyboardEvent) => {
    const elm = e.target as HTMLButtonElement
    if (!elm) return
    setActiveDate(new Date(Number(elm.dataset.timestamp)))
  }, [])

  const navWithKeyboard = React.useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
        return handleClickNextPrevDay(1)
      case 'ArrowLeft':
        return handleClickNextPrevDay(-1)
      case 'ArrowUp':
        return handleClickNextPrevDay(-7)
      case 'ArrowDown':
        return handleClickNextPrevDay(7)
      case 'Enter':
        return handlePressEnter(e)
      default:
        return
    }
  }, [])

  React.useEffect(() => {
    if (refsDays.current) {
      const indx = refsDays.current.findIndex((el) => el?.dataset?.timestamp === String(focusedDate.getTime()))
      if (indx !== -1) refsDays.current[indx].focus()
    }
  }, [focusedDate, refsDays])

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
            {focusedDate.toLocaleDateString('fr-FR', {
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
        {weeksInMonth.map((week, weekIndex) => {
          return (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => {
                const ind = day && globalDayIndex++

                const isActive =
                  day?.getFullYear() === activeDate.getFullYear() &&
                  day.getMonth() === activeDate.getMonth() &&
                  day.getDate() === activeDate.getDate()

                return (
                  <td colSpan={1} key={dayIndex} className={`${calendarWeekDay} ${isActive && calendarActiveDate}`}>
                    {day && (
                      <button
                        onKeyUp={(e) => navWithKeyboard(e)}
                        tabIndex={isActive ? 0 : -1}
                        aria-selected={isActive ? 'true' : 'false'}
                        data-timestamp={day?.getTime()}
                        ref={(el) => {
                          if (el && ind) refsDays.current[ind] = el
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
