import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Icon } from '../icon'
import { CalendarProps, DateValue } from './CalendarProps'

const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Venderedi', 'Samedi']
const currentDate = new Date()

function checkIsRange(date: DateValue): date is [Date, Date] | [Date] | [] {
  return !(date instanceof Date)
}

const Calendar = ({
  value = currentDate,
  minDate = new Date(currentDate.getFullYear() - 10, 0, 1),
  maxDate = new Date(currentDate.getFullYear() + 10, 12, 0),
  disabled,
  readOnly,
  disabledDates,
  onViewChange,
  onChange,
  onMonthChange,
}: CalendarProps) => {
  let globalDayIndex = 0
  let globalYearIndex = 0

  const { styled } = useTrilogyContext()
  const [visibleMonth, setVisibleMonth] = React.useState<Date>(value instanceof Date ? value : value[0] || currentDate)
  const [isVisibleYears, setIsVisibleYears] = React.useState<boolean>(false)
  const [activeDate, setActiveDate] = React.useState<DateValue>(value)
  const [dateEndHovered, setDateEndHovered] = React.useState<Date>()

  const refsDays = React.useRef<HTMLButtonElement[]>([])
  const refDayFocused = React.useRef<HTMLButtonElement>()
  const refsYears = React.useRef<HTMLButtonElement[]>([])
  const refYearFocused = React.useRef<number>()

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
  const calendarWeekDayDisabled = hashClass(styled, clsx('calendar-week-day-disabled'))
  const isDisabledClass = hashClass(styled, clsx(is('disabled')))
  const isActiveClass = hashClass(styled, clsx(is('active')))
  const calendarWeek = hashClass(styled, clsx('calendar-week'))
  const dateStart = hashClass(styled, clsx('calendar-date-start'))
  const dateEnd = hashClass(styled, clsx('calendar-date-end'))
  const rangeClasse = hashClass(styled, clsx('calendar-range'))
  const dateInRange = hashClass(styled, clsx('calendar-date-in-range'))
  const rangeInitClasse = hashClass(styled, clsx('calendar-range-init'))
  const isRange = checkIsRange(activeDate)

  const isNextDisabled = React.useMemo(
    () =>
      disabled ||
      (maxDate?.getMonth() === visibleMonth?.getMonth() && maxDate?.getFullYear() === visibleMonth?.getFullYear()),
    [maxDate, visibleMonth],
  )

  const isPrevDisabled = React.useMemo(
    () =>
      disabled ||
      (minDate?.getMonth() === visibleMonth?.getMonth() && minDate?.getFullYear() === visibleMonth?.getFullYear()),
    [minDate, visibleMonth],
  )

  const MarkupMonth = useMemo(() => {
    if (!isRange) return 'button'
    return 'span'
  }, [isRange])

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

  const handleClickNextPrevMonth = React.useCallback(
    (month: number) => {
      const nextMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + month, visibleMonth.getDate())
      setVisibleMonth(nextMonth)
      onMonthChange && onMonthChange(nextMonth)
    },
    [visibleMonth],
  )

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
    [refsDays.current, refDayFocused.current],
  )

  const navigateWithKeyboardInYears = React.useCallback(
    (currentIndex: number, nextIndex: number) => {
      const nextRef = refsYears.current[currentIndex + nextIndex]
      if (nextRef) return nextRef.focus()
    },
    [refsYears],
  )

  const handlePressEnterInDays = React.useCallback(
    (e: React.KeyboardEvent | React.MouseEvent) => {
      if (readOnly) return
      const elm = e.target as HTMLButtonElement
      if (!elm) return

      refsDays.current.forEach((day) => (day.tabIndex = -1))
      elm.tabIndex = 0
      const newDate = new Date(Number(elm.dataset.timestamp))
      let newActiveDate: DateValue = [newDate]
      if (!isRange) newActiveDate = newDate

      if (isRange && activeDate.length === 1 && newDate.getTime() > activeDate[0].getTime()) {
        newActiveDate = [...activeDate, newDate]
      }

      setActiveDate(newActiveDate)
      setDateEndHovered(undefined)
      onChange && onChange(newActiveDate)
    },
    [refsDays.current, onChange, readOnly, activeDate, isRange],
  )

  const handlePressEnterInYears = React.useCallback(
    (e: React.KeyboardEvent | React.MouseEvent) => {
      if (readOnly || isRange) return
      const elm = e.target as HTMLButtonElement
      if (!elm) return
      refsYears.current.forEach((day) => (day.tabIndex = -1))
      elm.tabIndex = 0
      const newDate = new Date(Number(elm.dataset.year), activeDate.getMonth(), activeDate.getDate())
      setActiveDate(newDate)
      setVisibleMonth(newDate)
      setIsVisibleYears(false)
      if (onChange) onChange(newDate)
    },
    [refsYears.current, onChange, activeDate, readOnly],
  )

  const onKeyDownDay = React.useCallback(
    (e: React.KeyboardEvent, index: number, isDisabled: boolean) => {
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
          return !isDisabled && handlePressEnterInDays(e)
        default:
          return
      }
    },
    [handlePressEnterInDays],
  )

  const onKeyDownYear = React.useCallback((e: React.KeyboardEvent, index: number) => {
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
    if (isRange) return
    setIsVisibleYears((prev) => {
      if (prev) refsDays.current = []
      return !prev
    })
    onViewChange && onViewChange(isVisibleYears ? 'month' : 'year')
  }, [refsDays.current, onViewChange, isRange, isVisibleYears])

  React.useEffect(() => {
    if (isVisibleYears && refsYears.current) {
      const yearToFocus = refsYears.current.findIndex((year) => year.tabIndex === 0)
      if (yearToFocus !== -1) {
        refYearFocused.current = yearToFocus
        refsYears.current[yearToFocus].focus()
      }
    }

    if (!isVisibleYears && typeof refYearFocused.current === 'number' && refsDays.current) {
      const dayToFocus = refsDays.current.findIndex((day) => day.tabIndex === 0)
      if (dayToFocus !== -1) {
        refsDays.current[dayToFocus].focus()
      }
    }
  }, [isVisibleYears, refsYears.current, refYearFocused.current, refsDays.current])

  React.useEffect(() => {
    if (refsDays.current) {
      const haveActiveDate = refsDays.current.some((day) => day.tabIndex === 0)
      if (!haveActiveDate && refsDays?.current[0]?.tabIndex) {
        const firstActiveDate = refsDays.current.findIndex((day) => !day.disabled)
        if (firstActiveDate !== -1) {
          refsDays.current[firstActiveDate].tabIndex = 0
          refDayFocused.current = refsDays.current[firstActiveDate]
        }
      }
    }
  }, [refsDays.current, refDayFocused.current])

  return (
    <table
      className={clsx(
        calendarClasses,
        isRange && rangeClasse,
        isRange && (activeDate as Date[]).length === 1 && rangeInitClasse,
      )}
    >
      <thead className={calendarheaderClasses}>
        <tr>
          {!isVisibleYears && (
            <th colSpan={1} className={calendarPrevMonth}>
              <button
                onClick={() => handleClickNextPrevMonth(-1)}
                aria-label='Previous month'
                type='button'
                disabled={isPrevDisabled}
              >
                <Icon name='tri-arrow-left' />
              </button>
            </th>
          )}

          <th colSpan={isVisibleYears ? 12 : 5} className={calendarActiveMonthClasses}>
            <MarkupMonth
              disabled={disabled}
              onClick={onPressTableHeader}
              type='button'
              aria-label={`${isVisibleYears ? 'Year' : 'Day'} view is open, switch to ${
                isVisibleYears ? 'day' : 'year'
              } view`}
            >
              {visibleMonth.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
              })}
            </MarkupMonth>
          </th>
          {!isVisibleYears && (
            <th colSpan={1} className={calendarNextMonth}>
              <button
                onClick={() => handleClickNextPrevMonth(1)}
                aria-label='Next month'
                type='button'
                disabled={isNextDisabled}
              >
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
                  {day.slice(0, 1)}
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
              <tr key={`${weeksId}_${weekIndex}`} className={calendarWeek}>
                {week.map((day, dayIndex) => {
                  const ind = day !== null && globalDayIndex++
                  const isDateStart = isRange && activeDate[0] && day?.getTime() === activeDate[0].getTime()
                  const isDateEnd = isRange && activeDate[1] && day?.getTime() === activeDate[1].getTime()

                  const isActive = !isRange
                    ? day?.getFullYear() === activeDate.getFullYear() &&
                      day?.getMonth() === activeDate.getMonth() &&
                      day?.getDate() === activeDate.getDate()
                    : activeDate?.some(
                        (date) =>
                          date?.getFullYear() === day?.getFullYear() &&
                          date?.getMonth() === day?.getMonth() &&
                          date?.getDate() === day?.getDate(),
                      )

                  const isDisabled =
                    disabled ||
                    (day && day.getTime() > maxDate?.getTime()) ||
                    (day && day.getTime() < minDate?.getTime()) ||
                    (day &&
                      disabledDates?.some(
                        (date) =>
                          date?.getFullYear() === day?.getFullYear() &&
                          date?.getMonth() === day?.getMonth() &&
                          date?.getDate() === day?.getDate(),
                      )) ||
                    false

                  const isInRange =
                    (isRange &&
                      activeDate[0] &&
                      dateEndHovered &&
                      day &&
                      day.getTime() >= activeDate[0].getTime() &&
                      day.getTime() < dateEndHovered.getTime()) ||
                    (isRange &&
                      activeDate[0] &&
                      activeDate[1] &&
                      day &&
                      day.getTime() >= activeDate[0].getTime() &&
                      day.getTime() < activeDate[1].getTime())

                  return (
                    <td
                      key={`${daysId}_${dayIndex}_${day?.getTime()}`}
                      className={clsx(
                        calendarWeekDay,
                        isActive && calendarActiveDate,
                        isDisabled && calendarWeekDayDisabled,
                        isDateStart && dateStart,
                        isDateEnd && dateEnd,
                        isInRange && dateInRange,
                      )}
                    >
                      {day && ind !== false && (
                        <button
                          type='button'
                          onKeyDown={(e) => onKeyDownDay(e, ind, isDisabled)}
                          tabIndex={isActive ? 0 : -1}
                          aria-selected={isActive ? 'true' : 'false'}
                          data-timestamp={day?.getTime()}
                          ref={(el) => {
                            if (el) refsDays.current[ind] = el
                          }}
                          onMouseUp={(e) => !isDisabled && handlePressEnterInDays(e)}
                          className={clsx(isDisabled && isDisabledClass, isActive && isActiveClass)}
                          onMouseOver={() => {
                            if (!isRange) return
                            if (activeDate[0] !== undefined && activeDate.length === 1) setDateEndHovered(day)
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
          !isRange &&
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
                      className={clsx(calendarYear, isActive && calendarActiveDate)}
                    >
                      <button
                        tabIndex={isActive ? 0 : -1}
                        data-year={year}
                        aria-selected={isActive ? 'true' : 'false'}
                        type='button'
                        role='radio'
                        onKeyDown={(e) => onKeyDownYear(e, ind)}
                        ref={(el) => {
                          if (el) refsYears.current[ind] = el
                        }}
                        onMouseUp={handlePressEnterInYears}
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
