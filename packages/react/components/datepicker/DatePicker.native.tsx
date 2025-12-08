import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { Calendar, ChangeEventCalendar } from '@/components/calendar'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { forwardRef, useCallback, useEffect, useState, useRef } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Modal
} from 'react-native'
import { DatePickerProps } from './DatePickerProps'

/**
 * DatePicker Component for React Native
 * @param value {string} Value for DatePicker (YYYY-MM-DD)
 * @param minDate {string} Min value for DatePicker (YYYY-MM-DD)
 * @param maxDate {string} Max value for DatePicker (YYYY-MM-DD)
 * @param disabled {boolean} Disabled DatePicker
 * @param onChange {Function} DatePicker Event
 * @param label {string} Label for DatePicker
 * @param sample {string} Sample for DatePicker (below label)
 * @param help {string} Help for DatePicker
 * @param required {boolean} Required DatePicker
 * @param status {InputStatus} DatePicker with status - (SUCCESS|WARNING|ERROR|DEFAULT)
 * @param testId {string} Test Id for Test Integration
 */
const DatePicker = forwardRef<View, DatePickerProps>(
  (
    {
      onChange,
      value,
      minDate,
      maxDate,
      label,
      sample,
      required,
      help,
      status,
      disabled,
      disabledDates,
      testId,
      name,
      ...others
    },
    ref,
  ) => {
    const [inputText, setInputText] = useState<string>('')
    const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const previousTextRef = useRef<string>('')

    const calendarValue = value ? new Date(value) : undefined

    const formatDateForDisplay = useCallback((dateString: string | null): string => {
      if (!dateString) return ''

      try {
        const date = new Date(dateString)
        if (isNaN(date.getTime())) return ''

        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
      } catch {
        return ''
      }
    }, [])

    const parseManualInput = useCallback((input: string): string | null => {
      const cleaned = input.replace(/[^\d/]/g, '')
      const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
      const match = cleaned.match(dateRegex)

      if (!match) return null

      const [, day, month, year] = match
      const dayNum = parseInt(day, 10)
      const monthNum = parseInt(month, 10)
      const yearNum = parseInt(year, 10)

      if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12) {
        return null
      }

      const date = new Date(yearNum, monthNum - 1, dayNum)
      if (date.getDate() !== dayNum || date.getMonth() !== monthNum - 1 || date.getFullYear() !== yearNum) {
        return null
      }

      if (minDate && date < new Date(minDate)) return null
      if (maxDate && date > new Date(maxDate)) return null

      const formattedMonth = monthNum.toString().padStart(2, '0')
      const formattedDay = dayNum.toString().padStart(2, '0')
      return `${yearNum}-${formattedMonth}-${formattedDay}`
    }, [minDate, maxDate])

    const isDateInRange = useCallback((date: Date): boolean => {
      if (minDate && date < new Date(minDate)) return false
      if (maxDate && date > new Date(maxDate)) return false
      return true
    }, [minDate, maxDate])

    const handleCalendarChange = useCallback(
      (selectedDate: ChangeEventCalendar) => {
        const date = selectedDate as Date

        if (!isDateInRange(date)) return

        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        const formattedDate = `${year}-${month}-${day}`

        setIsCalendarVisible(false)
        setIsFocused(false)

        if (onChange) {
          onChange(formattedDate)
        }
      },
      [onChange, isDateInRange, formatDateForDisplay],
    )

    const handleManualInput = useCallback((text: string) => {
      const previousText = previousTextRef.current
      const isDeleting = text.length < previousText.length

      if (isDeleting) {
        const cleaned = text.replace(/[^\d/]/g, '')
        let formatted = cleaned
        if (formatted.endsWith('/')) {
          formatted = formatted.slice(0, -1)
        }

        previousTextRef.current = formatted
        setInputText(formatted)
        return
      }

      const cleaned = text.replace(/[^\d/]/g, '')
      const limited = cleaned.slice(0, 10)

      const numbersOnly = limited.replace(/\//g, '')

      let formatted = ''

      if (numbersOnly.length === 1) {
        const firstDigit = parseInt(numbersOnly[0])
        if (firstDigit > 3) {
          formatted = '0' + numbersOnly[0] + '/'
        } else {
          formatted = numbersOnly
        }
      } else if (numbersOnly.length === 2) {
        const firstTwoDigits = parseInt(numbersOnly.slice(0, 2))
        if (firstTwoDigits > 31) {
          formatted = '0' + numbersOnly[0] + '/' + '0' + numbersOnly[1]
        } else {
          formatted = numbersOnly.slice(0, 2) + '/'
        }
      } else if (numbersOnly.length === 3) {
        const dayPart = numbersOnly.slice(0, 2)
        const monthDigit = parseInt(numbersOnly[2])
        if (monthDigit > 1) {
          formatted = dayPart + '/' + '0' + numbersOnly[2] + '/'
        } else {
          formatted = dayPart + '/' + numbersOnly[2]
        }
      } else if (numbersOnly.length >= 4) {
        const dayPart = numbersOnly.slice(0, 2)
        const monthPart = numbersOnly.slice(2, 4)
        const monthValue = parseInt(monthPart)

        if (monthValue > 12) {
          formatted = dayPart + '/' + '0' + numbersOnly[2] + '/' + numbersOnly[3]
        } else {
          formatted = dayPart + '/' + monthPart
          if (numbersOnly.length > 4) {
            formatted += '/' + numbersOnly.slice(4)
          }
        }
      }

      previousTextRef.current = formatted
      setInputText(formatted)

      if (numbersOnly.length >= 5 && onChange) {
        const dayPart = numbersOnly.slice(0, 2)
        const monthPart = numbersOnly.slice(2, 4)
        const yearPart = numbersOnly.slice(4)
        const currentYear = new Date().getFullYear().toString()

        let yearToTest = yearPart
        if (yearPart.length < 4) {
          if (yearPart.length === 1) {
            yearToTest = currentYear.slice(0, 3) + yearPart
          } else if (yearPart.length === 2) {
            yearToTest = currentYear.slice(0, 2) + yearPart
          } else if (yearPart.length === 3) {
            yearToTest = yearPart + currentYear.slice(3)
          }
        }

        const testDateString = `${dayPart}/${monthPart}/${yearToTest}`
        console.log('Testing date string:', testDateString)

        const dayNum = parseInt(dayPart, 10)
        const monthNum = parseInt(monthPart, 10)
        const yearNum = parseInt(yearToTest, 10)

        if (dayNum >= 1 && dayNum <= 31 && monthNum >= 1 && monthNum <= 12 && yearNum >= 1000) {
          const formattedDate = `${yearNum}-${monthNum.toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`
          console.log(`DatePicker onChange triggered (${numbersOnly.length} chars):`, formattedDate)
          onChange(formattedDate)
        } else {
          console.log('Date validation failed:', { dayNum, monthNum, yearNum })
        }
      }
    }, [parseManualInput, onChange])

    const handleInputBlur = useCallback(() => {
      setIsFocused(false)

      if (inputText.trim() === '') {
        if (onChange) {
          onChange(null)
        }
        return
      }

      const parsedDate = parseManualInput(inputText)
      if (parsedDate && onChange) {
        onChange(parsedDate)
      } else {
        const previousFormatted = formatDateForDisplay(value || null)
        setInputText(previousFormatted)
      }
    }, [inputText, parseManualInput, onChange, value, formatDateForDisplay])

    const handleOpenCalendar = useCallback(() => {
      if (disabled) return
      setIsCalendarVisible(true)
    }, [disabled])

    const handleCloseCalendar = useCallback(() => {
      setIsCalendarVisible(false)
    }, [])

    const handleInputFocus = useCallback(() => {
      if (disabled) return
      setIsFocused(true)
    }, [disabled])

    useEffect(() => {
      const formatted = formatDateForDisplay(value || null)
      if (!isFocused) {
        setInputText(formatted)
        previousTextRef.current = formatted
      }
    }, [value, formatDateForDisplay, isFocused])

    const styles = StyleSheet.create({
      container: {
        width: '100%',
      },
      label: {
        fontSize: 14,
        fontWeight: '500',
        color: getColorStyle(TrilogyColor.MAIN),
        marginBottom: 4,
      },
      sample: {
        fontSize: 12,
        color: getColorStyle(TrilogyColor.NEUTRAL),
        marginBottom: 8,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: disabled
          ? getColorStyle(TrilogyColor.DISABLED_FADE)
          : getColorStyle(TrilogyColor.BACKGROUND),
        borderWidth: isFocused ? 2 : 1,
        borderColor:
          (status === 'success' && getColorStyle(TrilogyColor.SUCCESS)) ||
          (status === 'warning' && getColorStyle(TrilogyColor.WARNING)) ||
          (status === 'error' && getColorStyle(TrilogyColor.ERROR)) ||
          (isFocused && getColorStyle(TrilogyColor.MAIN)) ||
          getColorStyle(TrilogyColor.NEUTRAL),
        borderRadius: 3,
        height: 46,
        paddingHorizontal: 10,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: disabled
          ? getColorStyle(TrilogyColor.DISABLED)
          : getColorStyle(TrilogyColor.MAIN),
        paddingVertical: Platform.OS === 'ios' ? 12 : 8,
      },
      iconContainer: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      help: {
        fontSize: 12,
        marginTop: 4,
        paddingLeft: 4,
        color:
          (status === 'success' && getColorStyle(TrilogyColor.SUCCESS)) ||
          (status === 'warning' && getColorStyle(TrilogyColor.WARNING)) ||
          (status === 'error' && getColorStyle(TrilogyColor.ERROR)) ||
          getColorStyle(TrilogyColor.NEUTRAL),
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        paddingBottom: 16,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
      }
    })

    return (
      <View ref={ref} style={styles.container} testID={testId} {...others}>
        {label && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.label}>
              {label}
            </Text>
            {required && (
              <Text style={{ color: getColorStyle(TrilogyColor.ERROR), marginLeft: 4 }}>
                *
              </Text>
            )}
          </View>
        )}

        {sample && (
          <Text level={TextLevels.THREE} style={styles.sample}>
            {sample}
          </Text>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            placeholder="jj/mm/aaaa"
            placeholderTextColor={getColorStyle(TrilogyColor.NEUTRAL)}
            editable={!disabled}
            keyboardType="numeric"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={handleManualInput}
            maxLength={10}
          />

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleOpenCalendar}
            disabled={disabled}
            activeOpacity={0.7}
          >
            <Icon
              name='tri-calendar'
              size={IconSize.SMALL}
              color={TrilogyColor.MAIN}
            />
          </TouchableOpacity>
        </View>

        {help && (
          <Text style={styles.help}>
            {help}
          </Text>
        )}

        <Modal
          visible={isCalendarVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={handleCloseCalendar}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={StyleSheet.absoluteFillObject}
              activeOpacity={1}
              onPress={handleCloseCalendar}
            />
            <View style={styles.modalContent}>
              <Calendar
                value={calendarValue}
                minDate={minDate ? new Date(minDate) : undefined}
                maxDate={maxDate ? new Date(maxDate) : undefined}
                disabledDates={disabledDates}
                onChange={handleCalendarChange}
                disabled={disabled}
              />
            </View>
          </View>
        </Modal>
      </View>
    )
  },
)

DatePicker.displayName = ComponentName.DatePicker

export default DatePicker
