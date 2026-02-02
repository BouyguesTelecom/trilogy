import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { TypographyAlign } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
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
        hours: isNaN(hours) ? 0 : Math.max(0, Math.min(24, hours)),
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
    let totalMinutes = currentHours * 60 + currentMinutes

    // Gérer le cas spécial de 24:00 - le curseur doit être en position 00:00 (en haut)
    if (currentHours === 24) {
      totalMinutes = 0
    }

    const maxMinutes = 24 * 60
    const angle = (totalMinutes / maxMinutes) * 2 * Math.PI - Math.PI / 2

    // Calculate cursor position on the circle
    const cursorX = centerX + radius * Math.cos(angle) - CURSOR_SIZE / 2
    const cursorY = centerY + radius * Math.sin(angle) - CURSOR_SIZE / 2

    // Calculate the progress arc (angle in degrees for SVG)
    // Pour 24:00, on veut un cercle complet (360°)
    let progressAngle
    if (currentHours === 24) {
      progressAngle = 360
    } else {
      const actualTotalMinutes = currentHours * 60 + currentMinutes
      progressAngle = (actualTotalMinutes / maxMinutes) * 360
    }

    const updateTimeFromAngle = useCallback(
      (angleRad: number) => {
        // Normalize angle to 0-2π (starting from top)
        let normalizedAngle = angleRad + Math.PI / 2
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI
        if (normalizedAngle >= 2 * Math.PI) normalizedAngle -= 2 * Math.PI

        // Convert angle to total minutes (0-1440) with snap to step minutes
        const rawTotalMinutes = (normalizedAngle / (2 * Math.PI)) * maxMinutes
        const newTotalMinutes = Math.round(rawTotalMinutes / step) * step

        // Gérer le cas spécial de 24:00 (1440 minutes)
        let newHours = Math.floor(newTotalMinutes / 60)
        let newMinutes = newTotalMinutes % 60

        // Si on atteint exactement 1440 minutes (24:00), on garde 24:00
        if (newTotalMinutes >= 1440) {
          newHours = 24
          newMinutes = 0
        }

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

    // Vérifie si le touch est sur un point d'heure
    const isOnHourDot = useCallback(
      (locationX: number, locationY: number) => {
        for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
          const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
          const dotX = centerX + radius * Math.cos(dotAngle)
          const dotY = centerY + radius * Math.sin(dotAngle)

          const dx = locationX - dotX
          const dy = locationY - dotY
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Zone de touch plus petite pour éviter les conflits avec le curseur
          if (distance <= HOUR_DOT_SIZE) {
            return i
          }
        }
        return -1
      },
      [centerX, centerY, radius],
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
      (x: number, y: number) => {
        if (disabled) return

        const dx = x - centerX
        const dy = y - centerY
        const newAngle = Math.atan2(dy, dx)

        updateTimeFromAngle(newAngle)
      },
      [centerX, centerY, disabled, updateTimeFromAngle],
    )

    // Fonction pour gérer le clic sur un point d'heure
    const handleHourDotPress = useCallback(
      (hourIndex: number) => {
        if (disabled) return

        // Calculer les nouvelles heures et minutes
        let newHours = hourIndex
        let newMinutes = currentMinutes

        // Gérer le cas spécial de 24:00
        if (newHours === 24) {
          newMinutes = 0
        }

        // Arrondir les minutes selon le step si on change d'heure
        if (newHours !== currentHours) {
          newMinutes = Math.round(newMinutes / step) * step
          if (newMinutes > 59) {
            newMinutes = 59
          }
        }

        // Mettre à jour les états
        setCurrentHours(newHours)
        setCurrentMinutes(newMinutes)
        setTempHours(newHours)
        setTempMinutes(newMinutes)
        setHoursInputValue(formatNumber(newHours))
        setMinutesInputValue(formatNumber(newMinutes))

        onChange?.(formatTime(newHours, newMinutes))
      },
      [disabled, currentMinutes, currentHours, step, onChange],
    )

    const panGesture = useMemo(
      () =>
        Gesture.Pan()
          .onBegin((event) => {
            if (disabled) return

            const { x, y } = event
            if (isOnCircleTrack(x, y)) {
              isDragging.current = true
              handleGesture(x, y)
            }
          })
          .onUpdate((event) => {
            if (disabled || !isDragging.current) return

            const { x, y } = event
            handleGesture(x, y)
          })
          .onEnd(() => {
            isDragging.current = false
          })
          .onFinalize(() => {
            isDragging.current = false
          })
          // Empêche les gestes simultanés (comme le scroll)
          .blocksExternalGesture()
          .shouldCancelWhenOutside(false),
      [disabled, handleGesture, isOnCircleTrack],
    )

    const tapGesture = useMemo(
      () =>
        Gesture.Tap().onEnd((event) => {
          if (disabled) return

          const { x, y } = event

          // Ne pas traiter le tap si on était en train de dragger
          if (isDragging.current) return

          // PRIORITÉ ABSOLUE: Si on clique sur le curseur, ne pas traiter comme un tap sur un point
          if (isOnCursor(x, y)) return

          // Vérifier si c'est un tap sur un point d'heure
          const hourDotIndex = isOnHourDot(x, y)
          if (hourDotIndex !== -1) {
            handleHourDotPress(hourDotIndex)
          }
        }),
      [disabled, isOnHourDot, handleHourDotPress, isOnCursor],
    )

    const combinedGesture = useMemo(() => Gesture.Simultaneous(panGesture, tapGesture), [panGesture, tapGesture])

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

      // Validation des heures : max 24, si supérieur on met 24
      let validatedHours = tempHours
      let validatedMinutes = currentMinutes

      if (tempHours > 24) {
        validatedHours = 24
      }

      // Si on saisit 24h, forcer les minutes à 00
      if (validatedHours === 24) {
        validatedMinutes = 0
        setCurrentMinutes(0)
        setTempMinutes(0)
        setMinutesInputValue('00')
      }

      // Met à jour les états définitifs (ce qui fera bouger le curseur)
      setCurrentHours(validatedHours)
      setTempHours(validatedHours)

      // Met à jour l'affichage de l'input avec la valeur formatée
      setHoursInputValue(formatNumber(validatedHours))

      onChange?.(formatTime(validatedHours, validatedMinutes))
    }

    const handleMinutesBlur = () => {
      setMinutesInputFocused(false)

      // Si on est à 24h, forcer les minutes à 00
      if (currentHours === 24) {
        setCurrentMinutes(0)
        setTempMinutes(0)
        setMinutesInputValue('00')
        onChange?.(formatTime(currentHours, 0))
        return
      }

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
        width: HOUR_DOT_SIZE,
        height: HOUR_DOT_SIZE,
        borderRadius: HOUR_DOT_SIZE / 2,
      },
      hourDotTouchable: {
        position: 'absolute',
        width: HOUR_DOT_SIZE + 12, // Zone de touch élargie
        height: HOUR_DOT_SIZE + 12,
        borderRadius: (HOUR_DOT_SIZE + 12) / 2,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
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

    let progressOffset
    if (currentHours === 24) {
      // Pour 24:00, cercle complet
      progressOffset = 0
    } else {
      const actualTotalMinutes = currentHours * 60 + currentMinutes
      progressOffset = circumference - (actualTotalMinutes / maxMinutes) * circumference
    }

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
        let currentProgress

        if (currentHours === 24) {
          // Pour 24:00, tous les points sont remplis
          currentProgress = 1
        } else {
          const actualTotalMinutes = currentHours * 60 + currentMinutes
          currentProgress = actualTotalMinutes / maxMinutes
        }

        const isFilled = dotProgress < currentProgress || currentHours === 24

        dots.push(
          <View
            key={i}
            style={[
              styles.hourDotTouchable,
              {
                left: dotX - 6, // Zone de touch élargie
                top: dotY - 6,
              },
            ]}
          >
            <View
              style={[
                styles.hourDot,
                {
                  backgroundColor: isFilled ? mainColor : strokeColor,
                },
              ]}
            />
          </View>,
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
        <GestureDetector gesture={combinedGesture}>
          <View ref={containerRef} style={styles.circleContainer}>
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
        </GestureDetector>
      </View>
    )
  },
)

TimepickerCircular.displayName = ComponentName.TimepickerCircular

export default TimepickerCircular
