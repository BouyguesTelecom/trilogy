import translation from '@trilogy-ds/locales/lib/calendar'
import React from 'react'
import { View, TouchableOpacity, StyleSheet, Modal, ScrollView, Platform } from 'react-native'
import { ComponentName } from '../enumsComponentsName'
import { Icon } from '../icon'
import { Text } from '../text'
import { CalendarProps, ChangeEventCalendar } from './CalendarProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { TypographyAlign } from '@/objects'

const days = [...translation.days]
const months = [...translation.months]
const currentDate = new Date()

const checkIsRange = (date: ChangeEventCalendar): date is [Date, Date] | [Date] | [] => {
  return !(date instanceof Date)
}

/**
 * Calendar Component (React Native)
 * @param value {Date | [Date, Date] | [Date] | []} Value for calendar
 * @param minDate {Date} Min value for calendar
 * @param maxDate {Date} Max value for calendar
 * @param disabled {boolean} Disabled calendar
 * @param readOnly {boolean} Read only calendar
 * @param disabledDates {Date[]} Values disabled
 * @param onChange {Function} OnChange Calendar Event
 * @param onMonthChange {Function} onMonthChange Calendar Event
 */
const Calendar = React.forwardRef<View, CalendarProps>(
  (
    {
      value = currentDate,
      minDate = new Date(currentDate.getFullYear() - 10, 0, 1),
      maxDate = new Date(currentDate.getFullYear() + 10, 12, 0),
      disabled,
      readOnly,
      disabledDates,
      onChange,
      onMonthChange,
    },
    ref,
  ) => {
    const [visibleMonth, setVisibleMonth] = React.useState<Date>(
      value instanceof Date ? value : value[0] || currentDate,
    )
    const [activeDate, setActiveDate] = React.useState<ChangeEventCalendar>(value)
    const [dateEndHovered, setDateEndHovered] = React.useState<Date>()
    const [showMonthPicker, setShowMonthPicker] = React.useState<boolean>(false)
    const [showYearPicker, setShowYearPicker] = React.useState<boolean>(false)

    const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)
    const shadowColor = getColorStyle(TrilogyColor.DISABLED)
    const disabledFadeColor = getColorStyle(TrilogyColor.DISABLED_FADE)
    const mainColor = getColorStyle(TrilogyColor.MAIN)
    const mainFadeColor = getColorStyle(TrilogyColor.MAIN_FADE)
    const disabledColor = getColorStyle(TrilogyColor.DISABLED)

    const styles = React.useMemo(() => StyleSheet.create({
      calendar: {
        backgroundColor,
        borderRadius: 8,
        padding: 24,
        shadowColor,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        width: '85%',
        alignSelf: 'center'
      },
      header: {
        alignContent: 'center',
        marginBottom: 16
      },
      headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingBottom: 16
      },
      navButton: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'transparent',
      },
      iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      disabledButton: {
        opacity: 0.5,
      },
      monthYearContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dropdownContainer: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
      },
      monthSelector: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: disabledFadeColor,
        width: 80,
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
      },
      yearSelector: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: disabledFadeColor,
        width: 80,
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
      },
      selectorContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
      selectorText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#495057',
        flex: 1,
        width: '100%',
      },
      dropdownIcon: {
        marginLeft: 4,
        width: 12,
        height: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },
      daysLabelRow: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',
      },
      dayLabel: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: Platform.OS === 'android' ? 8 : 4,
        height: Platform.OS === 'android' ? 44 : 36,
        justifyContent: 'center',
        maxWidth: Platform.OS === 'android' ? 44 : 36,
        minWidth: Platform.OS === 'android' ? 44 : 36,
      },
      dayLabelText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#6c757d',
        textTransform: 'uppercase',
        width: '100%',
      },
      body: {
        gap: 8,
      },
      weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
      },
      emptyDay: {
        flex: 1,
        height: Platform.OS === 'android' ? 44 : 36,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: Platform.OS === 'android' ? 44 : 36,
        minWidth: Platform.OS === 'android' ? 44 : 36,
      },
      dayButton: {
        flex: 1,
        height: Platform.OS === 'android' ? 44 : 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'transparent',
        maxWidth: Platform.OS === 'android' ? 44 : 36,
        minWidth: Platform.OS === 'android' ? 44 : 36,
      },
      dayText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#212529',
        width: '100%',
      },
      activeDay: {
        backgroundColor: mainColor,
      },
      activeDayText: {
        color: backgroundColor,
        fontWeight: '600',
        width: '100%',
      },
      disabledDay: {
        backgroundColor: disabledFadeColor,
        opacity: 0.6,
      },
      disabledDayText: {
        color: disabledColor,
        width: '100%',
      },
      dateStart: {
        backgroundColor: mainColor,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
      },
      dateEnd: {
        backgroundColor: mainColor,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
      },
      dateInRange: {
        backgroundColor: mainFadeColor,
        borderRadius: 0,
      },
      roundedLeft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      roundedRight: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
      todayButton: {
        borderWidth: 0,
        backgroundColor: 'transparent',
      },
      todayText: {
        fontWeight: '600',
        color: mainColor,
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      pickerContainer: {
        backgroundColor,
        borderRadius: 8,
        maxHeight: 300,
        width: 200,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
      },
      pickerScrollView: {
        maxHeight: 300,
      },
      pickerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: backgroundColor,
      },
      pickerItemSelected: {
        backgroundColor: mainColor,
      },
      pickerItemDisabled: {
        opacity: 0.5,
      },
      pickerItemText: {
        fontSize: 16,
        color: '#212529',
        flex: 1,
        lineHeight: 20,
      },
      pickerItemTextSelected: {
        color: '#ffffff',
        fontWeight: '600',
      },
      pickerItemTextDisabled: {
        color: '#6c757d',
      },
    }), [backgroundColor, shadowColor, disabledFadeColor, mainColor, mainFadeColor, disabledColor])

    const isRange = checkIsRange(activeDate)

    const isNextDisabled = React.useMemo(
      () =>
        disabled ||
        (maxDate?.getMonth() === visibleMonth?.getMonth() && maxDate?.getFullYear() === visibleMonth?.getFullYear()),
      [maxDate, visibleMonth, disabled],
    )

    const isPrevDisabled = React.useMemo(
      () =>
        disabled ||
        (minDate?.getMonth() === visibleMonth?.getMonth() && minDate?.getFullYear() === visibleMonth?.getFullYear()),
      [minDate, visibleMonth, disabled],
    )

    const getAllDaysInMonth = React.useCallback((year: number, month: number) => {
      const date = new Date(year, month, 1)
      const days: Array<Date | null> = []
      const firstDayOfMonth = date.getDay()
      const lastDayOfMonth = new Date(year, month + 1, 0).getDate()
      const allDays: Array<(Date | null)[]> = []

      for (let i = 0; i < firstDayOfMonth; i++) days.push(null)

      for (let day = 1; day <= lastDayOfMonth; day++) days.push(new Date(year, month, day))

      while (days.length % 7 !== 0) {
        days.push(null)
      }

      for (let i = 0; i < days.length; i += 7) allDays.push(days.slice(i, i + 7))
      return allDays
    }, [])

    const yearsBetween = React.useMemo(() => {
      const minYear = minDate.getFullYear()
      const maxYear = maxDate.getFullYear()
      const currentYear = value instanceof Date && value?.getFullYear()
      const isCurrentYearInclude = currentYear && currentYear >= minYear && currentYear <= maxYear
      let years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
        const year = minYear + i
        return {
          value: year,
          disabled: false,
        }
      })
      if (currentYear && !isCurrentYearInclude) {
        years = [{ value: currentYear, disabled: true }, ...years]
      }
      return years
    }, [minDate, maxDate, value])

    const availableMonths = React.useMemo(() => {
      const currentYear = visibleMonth.getFullYear()
      const minYear = minDate.getFullYear()
      const maxYear = maxDate.getFullYear()
      const minMonth = minDate.getMonth()
      const maxMonth = maxDate.getMonth()

      return Array.from({ length: 12 }, (_, monthIndex) => {
        if (currentYear < minYear || currentYear > maxYear) return false
        if (currentYear === minYear && monthIndex < minMonth) return false
        if (currentYear === maxYear && monthIndex > maxMonth) return false
        return true
      })
    }, [minDate, maxDate, visibleMonth])

    const availableYear = React.useMemo(() => {
      const minYear = minDate.getFullYear()
      const maxYear = maxDate.getFullYear()
      return Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i)
    }, [minDate, maxDate, visibleMonth])

    const allDaysInMonth = React.useMemo(() => {
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

    const handlePressDay = React.useCallback(
      (day: Date) => {
        if (readOnly) return

        const newDate = day
        let newActiveDate: ChangeEventCalendar = [newDate]
        if (!isRange) newActiveDate = newDate

        if (isRange && activeDate.length === 1 && newDate.getTime() > activeDate[0].getTime()) {
          newActiveDate = [...activeDate, newDate]
        }

        setActiveDate(newActiveDate)
        setDateEndHovered(undefined)
        onChange && onChange(newActiveDate)
      },
      [onChange, readOnly, activeDate, isRange],
    )

    React.useEffect(() => {
      setActiveDate(value)
      if (value instanceof Date) return setVisibleMonth(value)
      if (!(value instanceof Date) && value[0]) {
        if (value[1]) {
          return setVisibleMonth(value[1])
        }
        return setVisibleMonth(value[0])
      }
    }, [value])

    const renderDayButton = (day: Date | null, dayIndex: number) => {
      if (!day) {
        return <View key={dayIndex} style={styles.emptyDay} />
      }

      const isDateStart = isRange && activeDate[0] && day?.getTime() === activeDate[0].getTime()
      const isDateEnd = isRange && activeDate[1] && day?.getTime() === activeDate[1].getTime()
      const today = new Date()

      const isToday =
        day?.getFullYear() === today.getFullYear() &&
        day?.getMonth() === today.getMonth() &&
        day?.getDate() === today.getDate()

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
        <TouchableOpacity
          key={dayIndex}
          disabled={isDisabled}
          onPress={() => !isDisabled && handlePressDay(day)}
          onPressIn={() => {
            if (!isRange) return
            if (activeDate[0] !== undefined && activeDate.length === 1) {
              setDateEndHovered(day)
            }
          }}
          onPressOut={() => {
            if (isRange && activeDate.length === 1) {
              setDateEndHovered(undefined)
            }
          }}
          accessible={true}
          accessibilityRole="button"
          accessibilityState={{
            selected: isActive,
            disabled: isDisabled,
          }}
          style={[
            styles.dayButton,
            isToday && styles.todayButton,
            isActive && styles.activeDay,
            isDisabled && styles.disabledDay,
            isInRange && styles.dateInRange,
            isDateStart && styles.dateStart,
            isDateEnd && styles.dateEnd,
            dayIndex === 0 && styles.roundedLeft,
            dayIndex === 6 && styles.roundedRight,
          ]}
        >
          <Text
            typo={TypographyAlign.TEXT_CENTERED}
            style={[
              styles.dayText,
              isToday && styles.todayText,
              isActive && styles.activeDayText,
              isDisabled && styles.disabledDayText,
            ]}
          >
            {day.getDate()}
          </Text>
        </TouchableOpacity>
      )
    }

    return (
      <View
        ref={ref}
        style={styles.calendar}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => handleClickNextPrevMonth(-1)}
              disabled={isPrevDisabled}
              accessible={true}
              accessibilityRole="button"
              accessibilityState={{ disabled: isPrevDisabled }}
              style={[styles.navButton, isPrevDisabled && styles.disabledButton]}
            >
              <View style={styles.iconWrapper}>
                <Icon name='tri-arrow-left' />
              </View>
            </TouchableOpacity>

            <View style={styles.monthYearContainer}>
              <View style={styles.dropdownContainer}>
                <TouchableOpacity
                  style={styles.monthSelector}
                  accessible={true}
                  accessibilityRole="button"
                  onPress={() => setShowMonthPicker(true)}
                >
                  <View style={styles.selectorContent}>
                    <Text typo={TypographyAlign.TEXT_CENTERED} style={styles.selectorText}>{months[visibleMonth.getMonth()]}</Text>
                    <View style={styles.dropdownIcon}>
                      <Icon name='tri-arrow-down' />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.yearSelector}
                  accessible={true}
                  accessibilityRole="button"
                  onPress={() => setShowYearPicker(true)}
                >
                  <View style={styles.selectorContent}>
                    <Text typo={TypographyAlign.TEXT_CENTERED} style={styles.selectorText}>{visibleMonth.getFullYear()}</Text>
                    <View style={styles.dropdownIcon}>
                      <Icon name='tri-arrow-down' />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => handleClickNextPrevMonth(1)}
              disabled={isNextDisabled}
              accessible={true}
              accessibilityRole="button"
              accessibilityState={{ disabled: isNextDisabled }}
              style={[styles.navButton, isNextDisabled && styles.disabledButton]}
            >
              <View style={styles.iconWrapper}>
                <Icon name='tri-arrow-right' />
              </View>
            </TouchableOpacity>
          </View>

          {/* Days labels */}
          <View style={styles.daysLabelRow}>
            {days.map((day, index) => (
              <View key={index} style={styles.dayLabel}>
                <Text typo={TypographyAlign.TEXT_CENTERED} style={styles.dayLabelText}>{day.slice(0, 1)}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Calendar body */}
        <View style={styles.body}>
          {allDaysInMonth.map((week, weekIndex) => (
            <View
              key={weekIndex}
              style={styles.weekRow}
            >
              {week.map((day, dayIndex) => renderDayButton(day, dayIndex))}
            </View>
          ))}
        </View>

        {/* Month Picker Modal */}
        <Modal
          visible={showMonthPicker}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowMonthPicker(false)}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              activeOpacity={1}
              onPress={() => setShowMonthPicker(false)}
            />
            <View style={styles.pickerContainer}>
              <ScrollView style={styles.pickerScrollView}>
                {months.map((monthName, monthIndex) => (
                  <TouchableOpacity
                    key={monthIndex}
                    style={[
                      styles.pickerItem,
                      visibleMonth.getMonth() === monthIndex && styles.pickerItemSelected,
                      !availableMonths[monthIndex] && styles.pickerItemDisabled,
                    ]}
                    disabled={!availableMonths[monthIndex]}
                    onPress={() => {
                      if (availableMonths[monthIndex]) {
                        handleMonthSelect(monthIndex)
                        setShowMonthPicker(false)
                      }
                    }}
                  >
                    <Text
                    typo={TypographyAlign.TEXT_LEFT}
                    style={[
                      styles.pickerItemText,
                      visibleMonth.getMonth() === monthIndex && styles.pickerItemTextSelected,
                      !availableMonths[monthIndex] && styles.pickerItemTextDisabled,
                    ]}>
                      {monthName}
                    </Text>
                    {visibleMonth.getMonth() === monthIndex && (
                      <Icon name='tri-check' />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* Year Picker Modal */}
        <Modal
          visible={showYearPicker}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowYearPicker(false)}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              activeOpacity={1}
              onPress={() => setShowYearPicker(false)}
            />
            <View style={styles.pickerContainer}>
              <ScrollView style={styles.pickerScrollView}>
                {yearsBetween.map((year) => (
                  <TouchableOpacity
                    key={year.value}
                    style={[
                      styles.pickerItem,
                      visibleMonth.getFullYear() === year.value && styles.pickerItemSelected,
                      !availableYear.includes(year.value) && styles.pickerItemDisabled,
                    ]}
                    disabled={!availableYear.includes(year.value)}
                    onPress={() => {
                      if (availableYear.includes(year.value)) {
                        handleYearSelect(year.value)
                        setShowYearPicker(false)
                      }
                    }}
                  >
                    <Text
                    typo={TypographyAlign.TEXT_LEFT}
                    style={[
                      styles.pickerItemText,
                      visibleMonth.getFullYear() === year.value && styles.pickerItemTextSelected,
                      !availableYear.includes(year.value) && styles.pickerItemTextDisabled,
                    ]}>
                      {String(year.value)}
                    </Text>
                    {visibleMonth.getFullYear() === year.value && (
                      <Icon name='tri-check' />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    )
  },
)

Calendar.displayName = ComponentName.Calendar
export default Calendar
