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

    const parseTime = (timeString: string): { hours: number; minutes: number } => {
      const [hoursStr, minutesStr] = timeString.split(':')
      const hours = parseInt(hoursStr || '0', 10)
      const minutes = parseInt(minutesStr || '0', 10)
      return {
        hours: isNaN(hours) ? 0 : Math.max(0, Math.min(24, hours)),
        minutes: isNaN(minutes) ? 0 : Math.max(0, Math.min(59, minutes)),
      }
    }

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
    const [tempHours, setTempHours] = useState(initialHours)
    const [tempMinutes, setTempMinutes] = useState(initialMinutes)
    const containerRef = useRef<View>(null)

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
    const mainFadeColor = getColorStyle(TrilogyColor.MAIN_FADE)
    const strokeColor = getColorStyle(TrilogyColor.STROKE)
    const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)
    const dotColor = getColorStyle(TrilogyColor.NEUTRAL)

    const radius = (size - thickness) / 2
    const centerX = size / 2
    const centerY = size / 2

    let totalMinutes = currentHours * 60 + currentMinutes

    if (currentHours === 24) {
      totalMinutes = 0
    }

    const maxMinutes = 24 * 60
    const angle = (totalMinutes / maxMinutes) * 2 * Math.PI - Math.PI / 2

    const cursorX = centerX + radius * Math.cos(angle) - CURSOR_SIZE / 2
    const cursorY = centerY + radius * Math.sin(angle) - CURSOR_SIZE / 2
    let progressAngle
    if (currentHours === 24) {
      progressAngle = 360
    } else {
      const actualTotalMinutes = currentHours * 60 + currentMinutes
      progressAngle = (actualTotalMinutes / maxMinutes) * 360
    }

    const lastUpdateTime = useRef(0)
    const pendingUpdate = useRef<{ hours: number; minutes: number } | null>(null)

    const updateTimeFromAngle = useCallback(
      (angleRad: number) => {
        const now = Date.now()

        let normalizedAngle = angleRad + Math.PI / 2
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI
        if (normalizedAngle >= 2 * Math.PI) normalizedAngle -= 2 * Math.PI

        const rawTotalMinutes = (normalizedAngle / (2 * Math.PI)) * maxMinutes
        const newTotalMinutes = Math.round(rawTotalMinutes / step) * step

        let newHours = Math.floor(newTotalMinutes / 60)
        let newMinutes = newTotalMinutes % 60

        if (newTotalMinutes >= 1440) {
          newHours = 24
          newMinutes = 0
        }

        if (now - lastUpdateTime.current < 16) {
          pendingUpdate.current = { hours: newHours, minutes: newMinutes }
          return
        }

        if (newHours !== currentHours || newMinutes !== currentMinutes) {
          lastUpdateTime.current = now
          pendingUpdate.current = null
          setCurrentHours(newHours)
          setCurrentMinutes(newMinutes)
          onChange?.(formatTime(newHours, newMinutes))
        }
      },
      [maxMinutes, onChange, currentHours, currentMinutes, step],
    )

    const flushPendingUpdate = useCallback(() => {
      if (pendingUpdate.current) {
        const { hours, minutes } = pendingUpdate.current
        if (hours !== currentHours || minutes !== currentMinutes) {
          setCurrentHours(hours)
          setCurrentMinutes(minutes)
          onChange?.(formatTime(hours, minutes))
        }
        pendingUpdate.current = null
      }
    }, [currentHours, currentMinutes, onChange])

    const isOnCursor = useCallback(
      (locationX: number, locationY: number) => {
        const cursorCenterX = cursorX + CURSOR_SIZE / 2
        const cursorCenterY = cursorY + CURSOR_SIZE / 2
        const dx = locationX - cursorCenterX
        const dy = locationY - cursorCenterY
        const distance = Math.sqrt(dx * dx + dy * dy)
        return distance <= CURSOR_SIZE * 2
      },
      [cursorX, cursorY],
    )

    const isOnCenterInputs = useCallback(
      (locationX: number, locationY: number) => {
        const inputZoneWidth = 120
        const inputZoneHeight = 120
        const leftBound = centerX - inputZoneWidth / 2
        const rightBound = centerX + inputZoneWidth / 2
        const topBound = centerY - inputZoneHeight / 2
        const bottomBound = centerY + inputZoneHeight / 2

        return locationX >= leftBound && locationX <= rightBound && locationY >= topBound && locationY <= bottomBound
      },
      [centerX, centerY],
    )

    const isOnHourDot = useCallback(
      (locationX: number, locationY: number) => {
        for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
          const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
          const dotX = centerX + radius * Math.cos(dotAngle)
          const dotY = centerY + radius * Math.sin(dotAngle)
          const dx = locationX - dotX
          const dy = locationY - dotY
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance <= HOUR_DOT_SIZE) return i
        }
        return -1
      },
      [centerX, centerY, radius],
    )

    const isOnCircleTrack = useCallback(
      (locationX: number, locationY: number) => {
        if (isOnCenterInputs(locationX, locationY)) return false
        return isOnCursor(locationX, locationY)
      },
      [isOnCursor, isOnCenterInputs],
    )

    const lastAngle = useRef<number | null>(null)

    const handleGesture = useCallback(
      (x: number, y: number) => {
        if (disabled) return

        const dx = x - centerX
        const dy = y - centerY
        const newAngle = Math.atan2(dy, dx)

        if (lastAngle.current !== null) {
          const angleDiff = Math.abs(newAngle - lastAngle.current)
          if (angleDiff < 0.02) return
        }

        lastAngle.current = newAngle
        updateTimeFromAngle(newAngle)
      },
      [centerX, centerY, disabled, updateTimeFromAngle],
    )

    const handleHourDotPress = useCallback(
      (hourIndex: number) => {
        if (disabled) return

        let newHours = hourIndex
        let newMinutes = currentMinutes
        if (newHours === 24) newMinutes = 0
        if (newHours !== currentHours) {
          newMinutes = Math.round(newMinutes / step) * step
          if (newMinutes > 59) newMinutes = 59
        }
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
              lastAngle.current = null
              handleGesture(x, y)
            }
          })
          .onUpdate((event) => {
            if (disabled) return
            const { x, y } = event
            handleGesture(x, y)
          })
          .onEnd(() => {
            flushPendingUpdate()
          })
          .onFinalize(() => {
            flushPendingUpdate()
          })
          .minDistance(0)
          .activeOffsetX([-10, 10])
          .activeOffsetY([-10, 10])
          .blocksExternalGesture()
          .shouldCancelWhenOutside(false),
      [disabled, handleGesture, isOnCircleTrack, flushPendingUpdate],
    )

    const tapGesture = useMemo(
      () =>
        Gesture.Tap().onEnd((event) => {
          if (disabled) return

          const { x, y } = event
          if (isOnCursor(x, y)) return
          const hourDotIndex = isOnHourDot(x, y)
          if (hourDotIndex !== -1) {
            handleHourDotPress(hourDotIndex)
          }
        }),
      [disabled, isOnHourDot, handleHourDotPress, isOnCursor],
    )

    const combinedGesture = useMemo(() => Gesture.Simultaneous(panGesture, tapGesture), [panGesture, tapGesture])

    const handleHoursChange = (text: string) => {
      const cleanText = text.replace(/[^0-9]/g, '').slice(0, 2)
      setHoursInputValue(cleanText)

      if (cleanText === '') {
        setTempHours(0)
        return
      }

      const value = parseInt(cleanText, 10)
      if (!isNaN(value)) setTempHours(value)
    }

    const handleMinutesChange = (text: string) => {
      const cleanText = text.replace(/[^0-9]/g, '').slice(0, 2)
      setMinutesInputValue(cleanText)
      if (cleanText === '') {
        setTempMinutes(0)
        return
      }

      const value = parseInt(cleanText, 10)
      if (!isNaN(value)) setTempMinutes(value)
    }

    const handleHoursBlur = () => {
      setHoursInputFocused(false)

      let validatedHours = tempHours
      let validatedMinutes = currentMinutes
      if (tempHours > 24) validatedHours = 24

      if (validatedHours === 24) {
        validatedMinutes = 0
        setCurrentMinutes(0)
        setTempMinutes(0)
        setMinutesInputValue('00')
      }

      setCurrentHours(validatedHours)
      setTempHours(validatedHours)
      setHoursInputValue(formatNumber(validatedHours))
      onChange?.(formatTime(validatedHours, validatedMinutes))
    }

    const handleMinutesBlur = () => {
      setMinutesInputFocused(false)

      if (currentHours === 24) {
        setCurrentMinutes(0)
        setTempMinutes(0)
        setMinutesInputValue('00')
        onChange?.(formatTime(currentHours, 0))
        return
      }

      let validatedMinutes = tempMinutes

      if (tempMinutes > 59) {
        validatedMinutes = 59
      } else {
        validatedMinutes = Math.round(tempMinutes / step) * step

        if (validatedMinutes > 59) {
          validatedMinutes = 59
        }
      }

      setCurrentMinutes(validatedMinutes)
      setTempMinutes(validatedMinutes)
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
        borderWidth: 2,
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
        width: HOUR_DOT_SIZE + 12,
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

    const strokeWidth = thickness
    const svgRadius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * svgRadius

    let progressOffset
    if (currentHours === 24) {
      progressOffset = 0
    } else {
      const actualTotalMinutes = currentHours * 60 + currentMinutes
      progressOffset = circumference - (actualTotalMinutes / maxMinutes) * circumference
    }

    const renderHourDots = () => {
      const dots = []
      for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
        const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
        const dotX = centerX + radius * Math.cos(dotAngle) - HOUR_DOT_SIZE / 2
        const dotY = centerY + radius * Math.sin(dotAngle) - HOUR_DOT_SIZE / 2

        const dotProgress = i / HOUR_DOTS_COUNT
        let currentProgress

        if (currentHours === 24) {
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
                left: dotX - 6,
                top: dotY - 6,
              },
            ]}
          >
            <View
              style={[
                styles.hourDot,
                {
                  backgroundColor: isFilled ? mainColor : dotColor,
                },
              ]}
            />
          </View>,
        )
      }
      return <View style={styles.hourDotsContainer}>{dots}</View>
    }

    const renderProgressGauge = () => {
      return (
        <View style={styles.svgContainer}>
          <Svg width={size} height={size}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={svgRadius}
              stroke={mainFadeColor}
              strokeWidth={strokeWidth}
              fill='transparent'
            />
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
            {renderProgressGauge()}
            {renderHourDots()}
            <View style={styles.cursor} />
            <View
              style={[
                styles.nonDraggableZone,
                {
                  width: 120,
                  height: 120,
                  left: centerX - 60,
                  top: centerY - 60,
                },
              ]}
            />

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
