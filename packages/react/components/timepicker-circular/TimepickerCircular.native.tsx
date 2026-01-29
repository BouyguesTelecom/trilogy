import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  GestureResponderEvent,
  PanResponder,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import { TimepickerCircularNativeRef, TimepickerCircularProps } from './TimepickerCircularProps'
import { TypographyAlign } from '@/objects'
import { GapSize } from '../columns'

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
      hours = 0,
      minutes = 0,
      onChange,
      hoursLabel = 'Heures',
      minutesLabel = 'Min',
      size = CIRCLE_SIZE,
      thickness = CIRCLE_THICKNESS,
      disabled = false,
      step = 5,
      ...others
    },
    ref
  ): JSX.Element => {
    const [currentHours, setCurrentHours] = useState(hours)
    const [currentMinutes, setCurrentMinutes] = useState(minutes)
    const [hoursInputFocused, setHoursInputFocused] = useState(false)
    const [minutesInputFocused, setMinutesInputFocused] = useState(false)
    const isDragging = useRef(false)
    const containerRef = useRef<View>(null)
    const containerLayout = useRef({ x: 0, y: 0 })

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
          onChange?.(newHours, newMinutes)
        }
      },
      [maxMinutes, onChange, currentHours, currentMinutes, step]
    )

    // Vérifie si le touch est sur le curseur
    const isOnCursor = useCallback(
      (locationX: number, locationY: number) => {
        const cursorCenterX = cursorX + CURSOR_SIZE / 2
        const cursorCenterY = cursorY + CURSOR_SIZE / 2
        const dx = locationX - cursorCenterX
        const dy = locationY - cursorCenterY
        const distance = Math.sqrt(dx * dx + dy * dy)
        // Zone de touch élargie autour du curseur
        return distance <= CURSOR_SIZE
      },
      [cursorX, cursorY]
    )

    const isOnCircleTrack = useCallback(
      (locationX: number, locationY: number) => {
        // D'abord vérifier si on touche le curseur
        if (isOnCursor(locationX, locationY)) {
          return true
        }

        const dx = locationX - centerX
        const dy = locationY - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        // Vérifie si le touch est sur le track du cercle (avec une marge de tolérance élargie)
        const innerRadius = radius - thickness / 2 - 15
        const outerRadius = radius + thickness / 2 + 15
        return distance >= innerRadius && distance <= outerRadius
      },
      [centerX, centerY, radius, thickness, isOnCursor]
    )

    const handleGesture = useCallback(
      (event: GestureResponderEvent) => {
        if (disabled) return

        const { pageX, pageY } = event.nativeEvent
        const dx = pageX - containerLayout.current.x - centerX
        const dy = pageY - containerLayout.current.y - centerY
        const newAngle = Math.atan2(dy, dx)

        updateTimeFromAngle(newAngle)
      },
      [centerX, centerY, disabled, updateTimeFromAngle]
    )

    const handleLayout = useCallback(() => {
      containerRef.current?.measureInWindow((x, y) => {
        containerLayout.current = { x, y }
      })
    }, [])

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
            // Mesure la position au début du geste
            containerRef.current?.measureInWindow((x, y) => {
              containerLayout.current = { x, y }
            })
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
      [disabled, handleGesture, isOnCircleTrack]
    )

    const handleHoursChange = (text: string) => {
      const value = parseInt(text, 10)
      if (!isNaN(value) && value >= 0 && value <= 23) {
        setCurrentHours(value)
        onChange?.(value, currentMinutes)
      } else if (text === '') {
        setCurrentHours(0)
      }
    }

    const handleMinutesChange = (text: string) => {
      const value = parseInt(text, 10)
      if (!isNaN(value) && value >= 0 && value <= 59) {
        setCurrentMinutes(value)
        onChange?.(currentHours, value)
      } else if (text === '') {
        setCurrentMinutes(0)
      }
    }

    const formatNumber = (num: number): string => {
      return num.toString().padStart(2, '0')
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
          />
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
              fill="transparent"
            />
            {/* Progress circle */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={svgRadius}
              stroke={mainColor}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </Svg>
        </View>
      )
    }

    return (
      <View ref={ref} style={styles.container} {...others}>
        <View
          ref={containerRef}
          style={styles.circleContainer}
          onLayout={handleLayout}
          {...panResponder.panHandlers}
        >
          {/* Progress gauge with SVG */}
          {renderProgressGauge()}

          {/* Hour dots */}
          {renderHourDots()}

          {/* Cursor */}
          <View style={styles.cursor} />

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
                value={formatNumber(currentHours)}
                onChangeText={handleHoursChange}
                keyboardType="number-pad"
                maxLength={2}
                editable={!disabled}
                onFocus={() => setHoursInputFocused(true)}
                onBlur={() => setHoursInputFocused(false)}
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
                style={[styles.input, minutesInputFocused && styles.inputFocused]}
                value={formatNumber(currentMinutes)}
                onChangeText={handleMinutesChange}
                keyboardType="number-pad"
                maxLength={2}
                editable={!disabled}
                onFocus={() => setMinutesInputFocused(true)}
                onBlur={() => setMinutesInputFocused(false)}
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
  }
)

TimepickerCircular.displayName = ComponentName.TimepickerCircular

export default TimepickerCircular
