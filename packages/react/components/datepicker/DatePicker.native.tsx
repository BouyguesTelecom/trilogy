import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { Calendar, ChangeEventCalendar } from '@/components/calendar'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Modal,
  Dimensions,
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

    // Convertir la valeur string en Date pour le calendrier
    const calendarValue = value ? new Date(value) : undefined

    // Formater la date pour l'affichage (DD/MM/YYYY)
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

    // Valider et parser une date saisie manuellement (DD/MM/YYYY)
    const parseManualInput = useCallback((input: string): string | null => {
      // Supprimer tous les caractères non numériques sauf /
      const cleaned = input.replace(/[^\d/]/g, '')

      // Vérifier le format DD/MM/YYYY
      const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
      const match = cleaned.match(dateRegex)

      if (!match) return null

      const [, day, month, year] = match
      const dayNum = parseInt(day, 10)
      const monthNum = parseInt(month, 10)
      const yearNum = parseInt(year, 10)

      // Validation basique
      if (dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12) {
        return null
      }

      // Créer la date et vérifier qu'elle est valide
      const date = new Date(yearNum, monthNum - 1, dayNum)
      if (date.getDate() !== dayNum || date.getMonth() !== monthNum - 1 || date.getFullYear() !== yearNum) {
        return null
      }

      // Vérifier les limites min/max
      if (minDate && date < new Date(minDate)) return null
      if (maxDate && date > new Date(maxDate)) return null

      // Retourner au format YYYY-MM-DD
      const formattedMonth = monthNum.toString().padStart(2, '0')
      const formattedDay = dayNum.toString().padStart(2, '0')
      return `${yearNum}-${formattedMonth}-${formattedDay}`
    }, [minDate, maxDate])

    // Valider si une date est dans les limites
    const isDateInRange = useCallback((date: Date): boolean => {
      if (minDate && date < new Date(minDate)) return false
      if (maxDate && date > new Date(maxDate)) return false
      return true
    }, [minDate, maxDate])

    // Gérer le changement de date depuis le calendrier
    const handleCalendarChange = useCallback(
      (selectedDate: ChangeEventCalendar) => {
        const date = selectedDate as Date

        if (!isDateInRange(date)) return

        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        const formattedDate = `${year}-${month}-${day}`

        // Fermer la modal
        setIsCalendarVisible(false)
        setIsFocused(false)

        if (onChange) {
          onChange(formattedDate)
        }
      },
      [onChange, isDateInRange, formatDateForDisplay],
    )

    // Gérer la saisie manuelle avec formatage automatique
    const handleManualInput = useCallback((text: string) => {
      // Supprimer tous les caractères non numériques sauf /
      const cleaned = text.replace(/[^\d/]/g, '')

      // Limiter la longueur maximale (DD/MM/YYYY = 10 caractères)
      const limited = cleaned.slice(0, 10)

      // Formater automatiquement avec les "/"
      let formatted = limited

      // Si on tape que des chiffres, ajouter les / automatiquement
      const numbersOnly = limited.replace(/\//g, '')
      if (numbersOnly.length >= 2 && !limited.includes('/')) {
        formatted = numbersOnly.slice(0, 2) + '/' + numbersOnly.slice(2)
      }
      if (numbersOnly.length >= 4 && limited.split('/').length < 3) {
        const parts = formatted.split('/')
        if (parts.length === 2 && parts[1].length >= 2) {
          formatted = parts[0] + '/' + parts[1].slice(0, 2) + '/' + parts[1].slice(2)
        }
      }

      setInputText(formatted)
    }, [])

    // Gérer la fin de saisie
    const handleInputBlur = useCallback(() => {
      setIsFocused(false)

      if (inputText.trim() === '') {
        // Si l'input est vide, effacer la date
        if (onChange) {
          onChange(null)
        }
        return
      }

      // Essayer de parser la saisie
      const parsedDate = parseManualInput(inputText)
      if (parsedDate && onChange) {
        onChange(parsedDate)
      } else {
        // Si la saisie n'est pas valide, revenir à la valeur précédente
        const previousFormatted = formatDateForDisplay(value || null)
        setInputText(previousFormatted)
      }
    }, [inputText, parseManualInput, onChange, value, formatDateForDisplay])

    // Ouvrir le calendrier (uniquement via l'icône)
    const handleOpenCalendar = useCallback(() => {
      if (disabled) return
      setIsCalendarVisible(true)
    }, [disabled])

    // Fermer le calendrier
    const handleCloseCalendar = useCallback(() => {
      setIsCalendarVisible(false)
    }, [])

    // Gérer le focus sur l'input
    const handleInputFocus = useCallback(() => {
      if (disabled) return
      setIsFocused(true)
    }, [disabled])

    // Mettre à jour l'affichage quand la valeur change (seulement si pas en cours de saisie)
    useEffect(() => {
      if (!isFocused) {
        const formatted = formatDateForDisplay(value || null)
        setInputText(formatted)
      }
    }, [value, formatDateForDisplay, isFocused])

    // Styles
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
        {/* Label */}
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

        {/* Sample */}
        {sample && (
          <Text level={TextLevels.THREE} style={styles.sample}>
            {sample}
          </Text>
        )}

        {/* Input Container */}
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
            maxLength={10} // DD/MM/YYYY
          />

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleOpenCalendar}
            disabled={disabled}
            activeOpacity={0.7}
          >
            <Icon
              name={IconName.CALENDAR}
              size={IconSize.SMALL}
              color={disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN}
            />
          </TouchableOpacity>
        </View>

        {/* Help Text */}
        {help && (
          <Text style={styles.help}>
            {help}
          </Text>
        )}

        {/* Calendar Modal - Modal React Native classique */}
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
