import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Icon } from '../icon'

interface CalendarProps {
  value?: Date
  minDate?: Date
  maxDate?: Date
  onChange?: (e: Date) => void
}

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Venderedi', 'Samedi']
const currentDate = new Date()

const Calendar = ({
  value = currentDate,
  minDate = new Date(currentDate.getFullYear() - 10, 0, 1),
  maxDate = new Date(currentDate.getFullYear() + 10, 12, 0),
  onChange,
}: CalendarProps) => {
  let globalDayIndex = 0
  let globalYearIndex = 0

  const { styled } = useTrilogyContext()
  const [visibleMonth, setVisibleMonth] = React.useState<Date>(value)
  const [isVisibleYears, setIsVisibleYears] = React.useState<boolean>(false)
  const [activeDate, setActiveDate] = React.useState<Date>(value)
  const refsDays = React.useRef<HTMLButtonElement[]>([])
  const refDayFocused = React.useRef<HTMLButtonElement>()
  const refsYears = React.useRef<HTMLButtonElement[]>([])

  const weeksId = React.useId()
  const daysId = React.useId()
  const yearsId = React.useId()
  const yearId = React.useId()

  const calendarClasses = hashClass(styled, clsx('calendar'))
  const calendarheaderClasses = hashClass(styled, clsx('calendar-header'))
  const calendarActiveMonthClasses = hashClass(styled, clsx('calendar-active-month'))
  const calendarDayLabelClasses = hashClass(styled, clsx('calendar-week-day-label'))
  const calendarWeekDay = hashClass(styled, clsx('calendar-week-day'))
  const calendarActiveDate = hashClass(styled, clsx('calendar-active-date'))
  const calendarNextMonth = hashClass(styled, clsx('calendar-next-month'))
  const calendarPrevMonth = hashClass(styled, clsx('calendar-prev-month'))
  const calendarYear = hashClass(styled, clsx('calendar-year'))

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

  const yearsBetween = React.useMemo(() => {
    const minYear = minDate.getFullYear()
    const maxYear = maxDate.getFullYear()
    const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i)
    return years.reduce((acc: number[][], year: number, index: number) => {
      if (index % 3 === 0) acc.push([])
      acc[acc.length - 1].push(year)
      return acc
    }, [])
  }, [minDate, maxDate])

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

  const navigateInDaysWithKeyboard = React.useCallback(
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
        refDayFocused.current = refsDays.current[nextDayFocused.getDate() - 1]
      }, 10)
    },
    [refsDays, refDayFocused],
  )

  const handlePressEnterInDays = React.useCallback(
    (e: React.KeyboardEvent) => {
      const elm = e.target as HTMLButtonElement
      if (!elm) return
      refsDays.current.forEach((day) => (day.tabIndex = -1))
      elm.tabIndex = 0
      setActiveDate(new Date(Number(elm.dataset.timestamp)))
      if (onChange) onChange(new Date(Number(elm.dataset.timestamp)))
    },
    [refsDays.current, onChange],
  )

  const handlePressEnterInYears = React.useCallback(
    (e: React.KeyboardEvent) => {
      const elm = e.target as HTMLButtonElement
      if (!elm) return
      refsYears.current.forEach((day) => (day.tabIndex = -1))
      elm.tabIndex = 0
      setActiveDate((prev) => {
        const newDate = new Date(Number(elm.dataset.year), prev.getMonth(), prev.getDate())
        if (onChange) onChange(newDate)
        return newDate
      })
      setVisibleMonth((prev) => {
        return new Date(Number(elm.dataset.year), prev.getMonth(), prev.getDate())
      })
      setIsVisibleYears(false)
    },
    [refsYears.current, onChange],
  )

  const navigateWithKeyboardInYears = React.useCallback(
    (currentIndex: number, nextIndex: number) => {
      const nextRef = refsYears.current[currentIndex + nextIndex]
      if (nextRef) return nextRef.focus()
    },
    [refsYears],
  )

  const onKeyUpDay = React.useCallback((e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case 'ArrowRight':
        return navigateInDaysWithKeyboard(index, 1)
      case 'ArrowLeft':
        return navigateInDaysWithKeyboard(index, -1)
      case 'ArrowUp':
        return navigateInDaysWithKeyboard(index, -7)
      case 'ArrowDown':
        return navigateInDaysWithKeyboard(index, 7)
      case 'Enter':
        return handlePressEnterInDays(e)
      default:
        return
    }
  }, [])

  const onKeyUpYear = React.useCallback((e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case 'ArrowRight':
        return navigateWithKeyboardInYears(index, 1)
      case 'ArrowLeft':
        return navigateWithKeyboardInYears(index, -1)
      case 'ArrowUp':
        return navigateWithKeyboardInYears(index, -3)
      case 'ArrowDown':
        return navigateWithKeyboardInYears(index, 3)
      case 'Enter':
        return handlePressEnterInYears(e)
      default:
        return
    }
  }, [])

  const onPressTableHeader = React.useCallback(() => {
    setIsVisibleYears((prev) => {
      if (prev) refsDays.current = []
      return !prev
    })
  }, [])

  React.useEffect(() => {
    if (refsDays.current) {
      const haveActiveDate = refsDays.current.some((day) => day.tabIndex === 0)
      if (!haveActiveDate && refsDays?.current[0]?.tabIndex) refsDays.current[0].tabIndex = 0
    }
  }, [refsDays.current])

  React.useEffect(() => {
    if (isVisibleYears && refsYears.current) {
      const yearToFocus = refsYears.current.findIndex((year) => Number(year.dataset.year) === activeDate.getFullYear())
      if (typeof yearToFocus === 'number') refsYears.current[yearToFocus].focus()
    }
  }, [isVisibleYears, refsYears.current, activeDate])

  return (
    <table className={calendarClasses}>
      <thead className={calendarheaderClasses}>
        <tr>
          {!isVisibleYears && (
            <th colSpan={1} className={calendarPrevMonth}>
              <button onClick={() => handleClickNextPrevMonth(-1)} aria-label='Previous month' type='button'>
                <Icon name='tri-arrow-left' />
              </button>
            </th>
          )}

          <th colSpan={isVisibleYears ? 12 : 5} className={calendarActiveMonthClasses}>
            <button
              onClick={onPressTableHeader}
              type='button'
              aria-label={`${isVisibleYears ? 'Year' : 'Day'} view is open, switch to ${
                isVisibleYears ? 'day' : 'year'
              } view`}
            >
              {visibleMonth.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
              })}
            </button>
          </th>
          {!isVisibleYears && (
            <th colSpan={1} className={calendarNextMonth}>
              <button onClick={() => handleClickNextPrevMonth(1)} aria-label='Next month' type='button'>
                <Icon name='tri-arrow-right' />
              </button>
            </th>
          )}
        </tr>

        {!isVisibleYears && (
          <tr>
            {days.map((day, index) => {
              return (
                <th className={calendarDayLabelClasses} key={index}>
                  {day.slice(0, 3)}
                </th>
              )
            })}
          </tr>
        )}
      </thead>
      <tbody>
        {!isVisibleYears &&
          allDaysInMonth.map((week, weekIndex) => {
            return (
              <tr key={`${weeksId}_${weekIndex}`}>
                {week.map((day, dayIndex) => {
                  const ind = day !== null && globalDayIndex++

                  const isActive =
                    day?.getFullYear() === activeDate.getFullYear() &&
                    day.getMonth() === activeDate.getMonth() &&
                    day.getDate() === activeDate.getDate()

                  return (
                    <td
                      key={`${daysId}_${dayIndex}_${day?.getTime()}`}
                      className={`${calendarWeekDay} ${isActive && calendarActiveDate}`}
                    >
                      {day && ind !== false && (
                        <button
                          type='button'
                          onKeyUp={(e) => onKeyUpDay(e, ind)}
                          tabIndex={isActive ? 0 : -1}
                          aria-selected={isActive ? 'true' : 'false'}
                          data-timestamp={day?.getTime()}
                          ref={(el) => {
                            if (el) refsDays.current[ind] = el
                          }}
                          onClick={() => {
                            setActiveDate(day)
                            onChange && onChange(day)
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
        {isVisibleYears &&
          yearsBetween.map((years, yearsIndex) => {
            return (
              <tr key={`${yearsId}_${yearsIndex}`}>
                {years.map((year, yearIndex) => {
                  const ind = globalYearIndex++
                  const isActive = activeDate.getFullYear() === year

                  return (
                    <td
                      colSpan={3}
                      key={`${yearId}_${yearIndex}_${year}`}
                      className={`${calendarYear} ${isActive && calendarActiveDate}`}
                    >
                      <button
                        tabIndex={isActive ? 0 : -1}
                        data-year={year}
                        aria-selected={isActive ? 'true' : 'false'}
                        type='button'
                        role='radio'
                        onKeyUp={(e) => onKeyUpYear(e, ind)}
                        ref={(el) => {
                          if (el) {
                            refsYears.current[ind] = el
                          }
                        }}
                        onClick={() => {
                          setActiveDate((prev) => {
                            const newDate = new Date(Number(year), prev.getMonth(), prev.getDate())
                            onChange && onChange(newDate)
                            return newDate
                          })
                          setVisibleMonth((prev) => {
                            return new Date(Number(year), prev.getMonth(), prev.getDate())
                          })
                          setIsVisibleYears(false)
                        }}
                      >
                        {year}
                      </button>
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
