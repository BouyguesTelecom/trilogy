import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import translation from '@trilogy-ds/locales/lib/calendar'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Icon } from '../icon'
import { Select, SelectOption } from '../select'
import { Text } from '../text'
import { CalendarProps, ChangeEventCalendar } from './CalendarProps'

const days = [...translation.days]
const months = [...translation.months]
const currentDate = new Date()

function checkIsRange(date: ChangeEventCalendar): date is [Date, Date] | [Date] | [] {
  return !(date instanceof Date)
}

const Calendar = ({
  value = currentDate,
  minDate = new Date(currentDate.getFullYear() - 10, 0, 1),
  maxDate = new Date(currentDate.getFullYear() + 10, 12, 0),
  disabled,
  readOnly,
  disabledDates,
  onChange,
  onMonthChange,
}: CalendarProps) => {
  const { styled } = useTrilogyContext()
  const [visibleMonth, setVisibleMonth] = React.useState<Date>(value instanceof Date ? value : value[0] || currentDate)
  const [activeDate, setActiveDate] = React.useState<ChangeEventCalendar>(value)
  const [dateEndHovered, setDateEndHovered] = React.useState<Date>()

  const refsDays = React.useRef<HTMLButtonElement[]>([])
  const refDayFocused = React.useRef<HTMLButtonElement>()

  const weeksId = React.useId()
  const daysId = React.useId()

  const calendarClasses = hashClass(styled, clsx('calendar'))
  const calendarheaderClasses = hashClass(styled, clsx('calendar-header'))
  const headerDropdownClasses = hashClass(styled, clsx('calendar-header-dropdown'))
  const calendarActiveMonthClasses = hashClass(styled, clsx('calendar-active-month'))
  const calendarDayLabelClasses = hashClass(styled, clsx('calendar-week-day-label'))
  const calendarWeekDayClasses = hashClass(styled, clsx('calendar-week-day'))
  const calendarActiveDateClasses = hashClass(styled, clsx('calendar-active-date'))
  const calendarNextMonthClasses = hashClass(styled, clsx('calendar-next-month'))
  const calendarPrevMonthClasses = hashClass(styled, clsx('calendar-prev-month'))
  const calendarWeekDayDisabledClasses = hashClass(styled, clsx('calendar-week-day-disabled'))
  const isDisabledClass = hashClass(styled, clsx(is('disabled')))
  const isActiveClasses = hashClass(styled, clsx(is('active')))
  const calendarWeekClasses = hashClass(styled, clsx('calendar-week'))
  const dateStartClasses = hashClass(styled, clsx('calendar-date-start'))
  const dateEndClasses = hashClass(styled, clsx('calendar-date-end'))
  const rangeClasses = hashClass(styled, clsx('calendar-range'))
  const dateInRangeClasses = hashClass(styled, clsx('calendar-date-in-range'))
  const rangeInitClasses = hashClass(styled, clsx('calendar-range-init'))
  const rondedLeftClasses = hashClass(styled, clsx('calendar-date-rounded-left'))
  const rondedRightClasses = hashClass(styled, clsx('calendar-date-rounded-right'))

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
    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i)
  }, [minDate, maxDate])

  const availableMonths = React.useMemo(() => {
    const currentYear = visibleMonth.getFullYear()
    const minYear = minDate.getFullYear()
    const maxYear = maxDate.getFullYear()
    const minMonth = minDate.getMonth()
    const maxMonth = maxDate.getMonth()

    return Array.from({ length: 12 }, (_, monthIndex) => {
      if (currentYear === minYear && monthIndex < minMonth) return false
      if (currentYear === maxYear && monthIndex > maxMonth) return false
      return true
    })
  }, [minDate, maxDate, visibleMonth])

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
    [visibleMonth, onMonthChange],
  )

  const handleMonthSelect = React.useCallback(
    (selectedMonth: number) => {
      const newDate = new Date(visibleMonth.getFullYear(), selectedMonth, visibleMonth.getDate())
      setVisibleMonth(newDate)
      onMonthChange && onMonthChange(newDate)
    },
    [visibleMonth, onMonthChange, minDate, maxDate],
  )

  const handleYearSelect = React.useCallback(
    (selectedYear: number) => {
      const newDate = new Date(selectedYear, visibleMonth.getMonth(), visibleMonth.getDate())

      if (newDate.getTime() < minDate.getTime() || newDate.getTime() > maxDate.getTime()) {
        if (newDate.getTime() < minDate.getTime()) {
          setVisibleMonth(new Date(selectedYear, minDate.getMonth(), visibleMonth.getDate()))
          onMonthChange && onMonthChange(new Date(selectedYear, minDate.getMonth(), visibleMonth.getDate()))
        } else {
          setVisibleMonth(new Date(selectedYear, maxDate.getMonth(), visibleMonth.getDate()))
          onMonthChange && onMonthChange(new Date(selectedYear, maxDate.getMonth(), visibleMonth.getDate()))
        }
        return
      }

      setVisibleMonth(newDate)
      onMonthChange && onMonthChange(newDate)
    },
    [visibleMonth, onMonthChange, minDate, maxDate],
  )

  const navigateInDaysWithKeyboard = React.useCallback(
    (currentIndex: number, nextIndex: number) => {
      const nextRef = refsDays.current[currentIndex + nextIndex]

      if (nextRef) {
        refDayFocused.current = nextRef
        return nextRef.focus()
      }

      const mustNextMonth = [1, 7].includes(nextIndex)
      const mustPrevMonth = [-1, -7].includes(nextIndex)

      setVisibleMonth((prev) => {
        const currentYear = prev.getFullYear()
        const currentMonth = prev.getMonth()
        if (mustNextMonth && !isNextDisabled) return new Date(currentYear, currentMonth + 1)
        if (mustPrevMonth && !isPrevDisabled) return new Date(currentYear, currentMonth - 1)
        return prev
      })

      if (mustNextMonth && isNextDisabled) return
      if (mustPrevMonth && isPrevDisabled) return

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
    [refsDays.current, refDayFocused.current, isNextDisabled, isPrevDisabled],
  )

  const handlePressEnterInDays = React.useCallback(
    (e: React.KeyboardEvent | React.MouseEvent) => {
      if (readOnly) return
      const elm = e.target as HTMLButtonElement
      if (!elm) return

      refsDays.current.forEach((day) => (day.tabIndex = -1))
      elm.tabIndex = 0
      const newDate = new Date(Number(elm.dataset.timestamp))
      let newActiveDate: ChangeEventCalendar = [newDate]
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
    [handlePressEnterInDays, navigateInDaysWithKeyboard],
  )

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

  React.useEffect(() => {
    setActiveDate(value)
    if (value instanceof Date) return setVisibleMonth(value)
    if (!(value instanceof Date) && value[0]) return setVisibleMonth(value[0])
  }, [value])

  return (
    <table
      className={clsx(
        calendarClasses,
        isRange && rangeClasses,
        isRange && (activeDate as Date[]).length === 1 && rangeInitClasses,
      )}
    >
      <thead className={calendarheaderClasses}>
        <tr>
          <th colSpan={1} className={calendarPrevMonthClasses}>
            <button
              onClick={() => handleClickNextPrevMonth(-1)}
              aria-label='Previous month'
              type='button'
              disabled={isPrevDisabled}
            >
              <Icon name='tri-arrow-left' />
            </button>
          </th>

          <th colSpan={5} className={calendarActiveMonthClasses}>
            <div className={headerDropdownClasses}>
              <Select
                selected={String(visibleMonth.getMonth())}
                onChange={(value) => handleMonthSelect(Number(value.selectValue))}
              >
                {months.map((monthName, monthIndex) => (
                  <SelectOption key={monthIndex} value={String(monthIndex)} disabled={!availableMonths[monthIndex]}>
                    {monthName}
                  </SelectOption>
                ))}
              </Select>
              <Select
                selected={String(visibleMonth.getFullYear())}
                onChange={(value) => handleYearSelect(Number(value.selectValue))}
              >
                {yearsBetween.map((year) => (
                  <SelectOption key={year} value={String(year)}>
                    {String(year)}
                  </SelectOption>
                ))}
              </Select>
            </div>
          </th>
          <th colSpan={1} className={calendarNextMonthClasses}>
            <button
              onClick={() => handleClickNextPrevMonth(1)}
              aria-label='Next month'
              type='button'
              disabled={isNextDisabled}
            >
              <Icon name='tri-arrow-right' />
            </button>
          </th>
        </tr>

        <tr>
          {days.map((day, index) => {
            return (
              <td className={calendarDayLabelClasses} key={index}>
                <Text>{day.slice(0, 1)}</Text>
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {allDaysInMonth.map((week, weekIndex) => {
          return (
            <tr
              key={`${weeksId}_${weekIndex}`}
              className={calendarWeekClasses}
              onMouseLeave={() => setDateEndHovered(undefined)}
            >
              {week.map((day, dayIndex) => {
                const ind = day !== null && day.getDate() - 1
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
                      calendarWeekDayClasses,
                      isActive && calendarActiveDateClasses,
                      isDisabled && calendarWeekDayDisabledClasses,
                      isDateStart && dateStartClasses,
                      isDateEnd && dateEndClasses,
                      isInRange && dateInRangeClasses,
                      dayIndex === 0 && rondedLeftClasses,
                      dayIndex === 6 && rondedRightClasses,
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
                        className={clsx(isDisabled && isDisabledClass, isActive && isActiveClasses)}
                        onMouseOver={() => {
                          if (!isRange) return
                          if (activeDate[0] !== undefined && activeDate.length === 1) setDateEndHovered(day)
                        }}
                        onClick={() => {
                          refDayFocused.current = refsDays.current[ind]
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
