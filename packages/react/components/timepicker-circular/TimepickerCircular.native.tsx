import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { TypographyAlign } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GestureResponderEvent, PanResponder, StyleSheet, TextInput, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import { GapSize } from '../columns'
import { TimepickerCircularNativeRef, TimepickerCircularProps } from './TimepickerCircularProps'

const CIRCLE_SIZE = 172
const CIRCLE_THICKNESS = 24
const CURSOR_SIZE = 30
const CURSOR_STROKE = 2
const HOUR_DOT_SIZE = 8
const HOUR_DOTS_COUNT = 24

/**
 * TimepickerCircular Native Component
 * @param hours {number} Current hours value (0-23)
 * @param minutes {number} Current minutes value (0-59)
 * @param onChange {Function} Callback when time changes
 * @param hoursLabel {string} Label for hours input
 * @param minutesLabel {string} Label for minutes input
 * @param size {number} Size of the circular picker
 * @param thickness {number} Thickness of the circular track
 * @param disabled {boolean} Disabled state
 */
const TimepickerCircular = React.forwardRef<TimepickerCircularNativeRef, TimepickerCircularProps>(
  (
    {
      value = '00:00',
      onChange,
      hoursLabel = 'Heures',
      minutesLabel = 'Min',
      size = CIRCLE_SIZE,
      thickness = CIRCLE_THICKNESS,
      disabled = false,
      step = 5,
      ...others
    },
    ref,
  ): JSX.Element => {
    const formatNumber = (num: number): string => {
      return num.toString().padStart(2, '0')
    }

    // Parse time string "HH:MM" to hours and minutes
    const parseTime = (timeString: string): { hours: number; minutes: number } => {
      const [hoursStr, minutesStr] = timeString.split(':')
      const hours = parseInt(hoursStr || '0', 10)
      const minutes = parseInt(minutesStr || '0', 10)
      return {
        hours: isNaN(hours) ? 0 : Math.max(0, Math.min(23, hours)),
        minutes: isNaN(minutes) ? 0 : Math.max(0, Math.min(59, minutes)),
      }
    }

    // Format hours and minutes to "HH:MM" string
    const formatTime = (hours: number, minutes: number): string => {
      return `${formatNumber(hours)}:${formatNumber(minutes)}`
    }

    const { hours: initialHours, minutes: initialMinutes } = parseTime(value)

    const [currentHours, setCurrentHours] = useState(initialHours)
    const [currentMinutes, setCurrentMinutes] = useState(initialMinutes)
    const [hoursInputFocused, setHoursInputFocused] = useState(false)
    const [minutesInputFocused, setMinutesInputFocused] = useState(false)
    const [hoursInputValue, setHoursInputValue] = useState(formatNumber(initialHours))
    const [minutesInputValue, setMinutesInputValue] = useState(formatNumber(initialMinutes))
    // États temporaires pour la saisie (ne affectent pas la position du curseur)
    const [tempHours, setTempHours] = useState(initialHours)
    const [tempMinutes, setTempMinutes] = useState(initialMinutes)
    const isDragging = useRef(false)
    const containerRef = useRef<View>(null)

    // Synchronise les valeurs d'affichage quand la prop value change
    // Mais seulement si aucun input n'est focalisé pour ne pas interrompre la saisie
    useEffect(() => {
      if (!hoursInputFocused && !minutesInputFocused) {
        const { hours, minutes } = parseTime(value)
        setCurrentHours(hours)
        setCurrentMinutes(minutes)
        setTempHours(hours)
        setTempMinutes(minutes)
        setHoursInputValue(formatNumber(hours))
        setMinutesInputValue(formatNumber(minutes))
      }
    }, [value, hoursInputFocused, minutesInputFocused])

    const mainColor = getColorStyle(TrilogyColor.MAIN)
    const mainFadeColor = getColorStyle(TrilogyColor.DISABLED_FADE)
    const strokeColor = getColorStyle(TrilogyColor.STROKE)
    const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)

    const radius = (size - thickness) / 2
    const centerX = size / 2
    const centerY = size / 2

    // Calculate total minutes for the circular position
    const totalMinutes = currentHours * 60 + currentMinutes
    const maxMinutes = 24 * 60
    const angle = (totalMinutes / maxMinutes) * 2 * Math.PI - Math.PI / 2

    // Calculate cursor position on the circle
    const cursorX = centerX + radius * Math.cos(angle) - CURSOR_SIZE / 2
    const cursorY = centerY + radius * Math.sin(angle) - CURSOR_SIZE / 2

    // Calculate the progress arc (angle in degrees for SVG)
    const progressAngle = (totalMinutes / maxMinutes) * 360

    const updateTimeFromAngle = useCallback(
      (angleRad: number) => {
        // Normalize angle to 0-2π (starting from top)
        let normalizedAngle = angleRad + Math.PI / 2
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI
        if (normalizedAngle >= 2 * Math.PI) normalizedAngle -= 2 * Math.PI

        // Convert angle to total minutes (0-1440) with snap to step minutes
        const rawTotalMinutes = (normalizedAngle / (2 * Math.PI)) * maxMinutes
        const newTotalMinutes = Math.round(rawTotalMinutes / step) * step
        const newHours = Math.floor(newTotalMinutes / 60) % 24
        const newMinutes = newTotalMinutes % 60

        // Only update if value changed to avoid unnecessary re-renders
        if (newHours !== currentHours || newMinutes !== currentMinutes) {
          setCurrentHours(newHours)
          setCurrentMinutes(newMinutes)
          onChange?.(formatTime(newHours, newMinutes))
        }
      },
      [maxMinutes, onChange, currentHours, currentMinutes, step],
    )

    // Vérifie si le touch est sur le curseur
    const isOnCursor = useCallback(
      (locationX: number, locationY: number) => {
        const cursorCenterX = cursorX + CURSOR_SIZE / 2
        const cursorCenterY = cursorY + CURSOR_SIZE / 2
        const dx = locationX - cursorCenterX
        const dy = locationY - cursorCenterY
        const distance = Math.sqrt(dx * dx + dy * dy)
        // Zone de touch élargie autour du curseur pour faciliter l'interaction
        return distance <= CURSOR_SIZE * 1.5
      },
      [cursorX, cursorY],
    )

    // Vérifie si le touch est dans la zone centrale (inputs)
    const isOnCenterInputs = useCallback(
      (locationX: number, locationY: number) => {
        // Zone rectangulaire autour des inputs pour une protection plus précise
        const inputZoneWidth = 120 // Largeur de la zone des inputs
        const inputZoneHeight = 120 // Hauteur de la zone des inputs

        const leftBound = centerX - inputZoneWidth / 2
        const rightBound = centerX + inputZoneWidth / 2
        const topBound = centerY - inputZoneHeight / 2
        const bottomBound = centerY + inputZoneHeight / 2

        return locationX >= leftBound && locationX <= rightBound && locationY >= topBound && locationY <= bottomBound
      },
      [centerX, centerY],
    )

    const isOnCircleTrack = useCallback(
      (locationX: number, locationY: number) => {
        // Ne pas capturer si on est sur les inputs au centre
        if (isOnCenterInputs(locationX, locationY)) {
          return false
        }

        // SEULEMENT permettre le mouvement si on touche directement le curseur
        return isOnCursor(locationX, locationY)
      },
      [isOnCursor, isOnCenterInputs],
    )

    const handleGesture = useCallback(
      (event: GestureResponderEvent) => {
        if (disabled) return

        // Utilise les coordonnées locales pour éviter les problèmes de mesure asynchrone
        const { locationX, locationY } = event.nativeEvent
        const dx = locationX - centerX
        const dy = locationY - centerY
        const newAngle = Math.atan2(dy, dx)

        updateTimeFromAngle(newAngle)
      },
      [centerX, centerY, disabled, updateTimeFromAngle],
    )

    const panResponder = useMemo(
      () =>
        PanResponder.create({
          // Capture les gestes seulement si on touche le track du cercle
          onStartShouldSetPanResponderCapture: (evt) => {
            if (disabled) return false

            const { locationX, locationY } = evt.nativeEvent
            const shouldCapture = isOnCircleTrack(locationX, locationY)
            if (shouldCapture) isDragging.current = true
            return shouldCapture
          },
          onMoveShouldSetPanResponderCapture: () => {
            return isDragging.current
          },
          onStartShouldSetPanResponder: (evt) => {
            if (disabled) return false

            const { locationX, locationY } = evt.nativeEvent
            return isOnCircleTrack(locationX, locationY)
          },
          onMoveShouldSetPanResponder: () => {
            return isDragging.current
          },
          onPanResponderTerminationRequest: () => false,
          onPanResponderGrant: (evt) => {
            isDragging.current = true
            handleGesture(evt)
          },
          onPanResponderMove: handleGesture,
          onPanResponderRelease: () => {
            isDragging.current = false
          },
          onPanResponderTerminate: () => {
            isDragging.current = false
          },
        }),
      [disabled, handleGesture, isOnCircleTrack],
    )

    const handleHoursChange = (text: string) => {
      // Ne garde que les chiffres et limite à 2 caractères
      const cleanText = text.replace(/[^0-9]/g, '').slice(0, 2)

      // Met à jour l'affichage de l'input SANS formatage pendant la saisie
      setHoursInputValue(cleanText)

      // Permet la saisie vide temporairement
      if (cleanText === '') {
        setTempHours(0)
        return
      }

      const value = parseInt(cleanText, 10)

      if (!isNaN(value)) {
        // Met à jour SEULEMENT l'état temporaire, pas currentHours
        // Le curseur ne bougera qu'au blur
        setTempHours(value)
      }
    }

    const handleMinutesChange = (text: string) => {
      // Ne garde que les chiffres et limite à 2 caractères
      const cleanText = text.replace(/[^0-9]/g, '').slice(0, 2)

      // Met à jour l'affichage de l'input SANS formatage pendant la saisie
      setMinutesInputValue(cleanText)

      // Permet la saisie vide temporairement
      if (cleanText === '') {
        setTempMinutes(0)
        return
      }

      const value = parseInt(cleanText, 10)

      if (!isNaN(value)) {
        // Met à jour SEULEMENT l'état temporaire, pas currentMinutes
        // Le curseur ne bougera qu'au blur
        setTempMinutes(value)
      }
    }

    const handleHoursBlur = () => {
      setHoursInputFocused(false)

      // Validation des heures : max 23, si supérieur on met 23
      let validatedHours = tempHours
      if (tempHours > 23) {
        validatedHours = 23
      }

      // Met à jour les états définitifs (ce qui fera bouger le curseur)
      setCurrentHours(validatedHours)
      setTempHours(validatedHours)

      // Met à jour l'affichage de l'input avec la valeur formatée
      setHoursInputValue(formatNumber(validatedHours))

      onChange?.(formatTime(validatedHours, currentMinutes))
    }

    const handleMinutesBlur = () => {
      setMinutesInputFocused(false)

      // Validation des minutes selon le step
      let validatedMinutes = tempMinutes

      // Si supérieur à 59, on met 59
      if (tempMinutes > 59) {
        validatedMinutes = 59
      } else {
        // Arrondir au step le plus proche
        validatedMinutes = Math.round(tempMinutes / step) * step

        // S'assurer que ça ne dépasse pas 59
        if (validatedMinutes > 59) {
          validatedMinutes = 59
        }
      }

      // Met à jour les états définitifs (ce qui fera bouger le curseur)
      setCurrentMinutes(validatedMinutes)
      setTempMinutes(validatedMinutes)

      // Met à jour l'affichage de l'input avec la valeur formatée
      setMinutesInputValue(formatNumber(validatedMinutes))

      onChange?.(formatTime(currentHours, validatedMinutes))
    }

    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      circleContainer: {
        width: size,
        height: size,
        position: 'relative',
      },
      circleBackground: {
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: thickness,
        borderColor: mainFadeColor,
      },
      circleProgress: {
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: thickness,
        borderColor: 'transparent',
        borderTopColor: mainColor,
        borderRightColor: progressAngle > 90 ? mainColor : 'transparent',
        borderBottomColor: progressAngle > 180 ? mainColor : 'transparent',
        borderLeftColor: progressAngle > 270 ? mainColor : 'transparent',
        transform: [{ rotate: '-90deg' }],
      },
      cursor: {
        position: 'absolute',
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        borderRadius: CURSOR_SIZE / 2,
        backgroundColor: backgroundColor,
        borderWidth: CURSOR_STROKE,
        borderColor: mainColor,
        left: cursorX,
        top: cursorY,
        zIndex: 20,
      },
      inputsContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 30,
      },
      inputWrapper: {
        alignItems: 'center',
        width: 40,
        gap: GapSize.FOUR,
      },
      input: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: strokeColor,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: mainColor,
        backgroundColor: backgroundColor,
      },
      inputFocused: {
        borderColor: mainColor,
        backgroundColor: mainFadeColor,
      },
      separatorWrapper: {
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      separator: {
        fontSize: 18,
        fontWeight: '600',
        color: mainColor,
        marginHorizontal: 4,
      },
      label: {
        marginTop: 2,
        fontSize: 11,
      },
      hourDot: {
        position: 'absolute',
        width: HOUR_DOT_SIZE,
        height: HOUR_DOT_SIZE,
        borderRadius: HOUR_DOT_SIZE / 2,
        zIndex: 10,
      },
      hourDotsContainer: {
        position: 'absolute',
        width: size,
        height: size,
        zIndex: 10,
      },
      svgContainer: {
        position: 'absolute',
        width: size,
        height: size,
        zIndex: 1,
      },
      nonDraggableZone: {
        position: 'absolute',
        borderRadius: 100,
        zIndex: 25,
      },
    })

    // Calculs pour le SVG
    const strokeWidth = thickness
    const svgRadius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * svgRadius
    const progressOffset = circumference - (totalMinutes / maxMinutes) * circumference

    // Génère les 24 points représentant les heures
    const renderHourDots = () => {
      const dots = []
      for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
        // Angle pour chaque heure (commence en haut, sens horaire)
        const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
        const dotX = centerX + radius * Math.cos(dotAngle) - HOUR_DOT_SIZE / 2
        const dotY = centerY + radius * Math.sin(dotAngle) - HOUR_DOT_SIZE / 2

        // Détermine si ce point est "rempli" (avant la position actuelle)
        const dotProgress = i / HOUR_DOTS_COUNT
        const currentProgress = totalMinutes / maxMinutes
        const isFilled = dotProgress < currentProgress

        dots.push(
          <View
            key={i}
            style={[
              styles.hourDot,
              {
                left: dotX,
                top: dotY,
                backgroundColor: isFilled ? mainColor : strokeColor,
              },
            ]}
          />,
        )
      }
      return <View style={styles.hourDotsContainer}>{dots}</View>
    }

    // Rendu de la gauge de progression avec SVG
    const renderProgressGauge = () => {
      return (
        <View style={styles.svgContainer}>
          <Svg width={size} height={size}>
            {/* Background circle */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={svgRadius}
              stroke={mainFadeColor}
              strokeWidth={strokeWidth}
              fill='transparent'
            />
            {/* Progress circle */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={svgRadius}
              stroke={mainColor}
              strokeWidth={strokeWidth}
              fill='transparent'
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap='round'
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </Svg>
        </View>
      )
    }

    return (
      <View ref={ref} style={styles.container} {...others}>
        <View ref={containerRef} style={styles.circleContainer} {...panResponder.panHandlers}>
          {/* Progress gauge with SVG */}
          {renderProgressGauge()}

          {/* Hour dots */}
          {renderHourDots()}

          {/* Cursor */}
          <View style={styles.cursor} />

          {/* Zone non-draggable au centre */}
          <View
            style={[
              styles.nonDraggableZone,
              {
                width: 120,
                height: 120,
                left: centerX - 60, // Centré horizontalement
                top: centerY - 60, // Centré verticalement
              },
            ]}
          />

          {/* Center inputs */}
          <View
            style={[
              styles.inputsContainer,
              {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            ]}
          >
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, hoursInputFocused && styles.inputFocused]}
                value={hoursInputValue}
                onChangeText={handleHoursChange}
                keyboardType='number-pad'
                editable={!disabled}
                onFocus={() => setHoursInputFocused(true)}
                onBlur={handleHoursBlur}
                selectTextOnFocus
              />
              <Text level={TextLevels.FOUR} typo={TypographyAlign.TEXT_CENTERED}>
                {hoursLabel}
              </Text>
            </View>

            <View style={styles.separatorWrapper}>
              <Text style={styles.separator}>:</Text>
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={handleMinutesChange}
                style={[styles.input, minutesInputFocused && styles.inputFocused]}
                value={minutesInputValue}
                keyboardType='number-pad'
                editable={!disabled}
                onFocus={() => setMinutesInputFocused(true)}
                onBlur={handleMinutesBlur}
                selectTextOnFocus
              />
              <Text level={TextLevels.FOUR} typo={TypographyAlign.TEXT_CENTERED}>
                {minutesLabel}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  },
)

TimepickerCircular.displayName = ComponentName.TimepickerCircular

export default TimepickerCircular
