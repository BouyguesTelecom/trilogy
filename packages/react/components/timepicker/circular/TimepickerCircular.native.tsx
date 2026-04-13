import { Button } from '@/components/button'
import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Modal, ModalBody, ModalFooter } from '@/components/modal'
import { Text, TextLevels } from '@/components/text'
import { TypographyAlign, TypographyBold } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Svg, { Circle } from 'react-native-svg'
import { TimepickerCircularNativeRef, TimepickerCircularProps } from './TimepickerCircularProps'

const CIRCLE_SIZE = 172
const CIRCLE_THICKNESS = 27
const CURSOR_SIZE = 30
const CURSOR_STROKE = 2
const HOUR_DOT_SIZE = 8
const HOUR_DOTS_COUNT = 24
const radius = (CIRCLE_SIZE - CIRCLE_THICKNESS) / 2
const centerX = CIRCLE_SIZE / 2
const centerY = CIRCLE_SIZE / 2
const maxMinutes = 24 * 60
const strokeWidth = CIRCLE_THICKNESS
const svgRadius = (CIRCLE_SIZE - strokeWidth) / 2
const circumference = 2 * Math.PI * svgRadius

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

/**
 * TimepickerCircular Native Component
 * @param value {string} Current time value in "HH:MM" format (e.g., "14:30", "24:00")
 * @param onChange {Function} Callback called when time changes, receives new "HH:MM" value
 * @param disabled {boolean} Disabled state of the component (default: false)
 * @param step {number} Step for minutes (e.g., 5 for 5-minute increments, default: 5)
 */
const TimepickerCircular = React.forwardRef<TimepickerCircularNativeRef, TimepickerCircularProps>(
  ({ value = '00:00', onChange, disabled = false, step = 5, testId, ...others }, ref): JSX.Element => {
    const { hours: initialHours, minutes: initialMinutes } = useMemo(() => parseTime(value), [value])
    const [currentHours, setCurrentHours] = useState(initialHours)
    const [currentMinutes, setCurrentMinutes] = useState(initialMinutes)
    const [isPickerVisible, setIsPickerVisible] = useState(false)
    const [hoursInputValue, setHoursInputValue] = useState(formatNumber(initialHours))
    const [minutesInputValue, setMinutesInputValue] = useState(formatNumber(initialMinutes))
    const [tempPickerDate, setTempPickerDate] = useState(() => {
      const date = new Date()
      date.setHours(initialHours, initialMinutes, 0, 0)
      return date
    })

    const containerRef = useRef<View>(null)
    const lastAngle = useRef<number | null>(null)
    const lastTotalMinutes = useRef(initialHours * 60 + initialMinutes)

    useEffect(() => {
      const { hours, minutes } = parseTime(value)
      setCurrentHours(hours)
      setCurrentMinutes(minutes)
      setHoursInputValue(formatNumber(hours))
      setMinutesInputValue(formatNumber(minutes))
      lastTotalMinutes.current = hours * 60 + minutes
      const date = new Date()
      date.setHours(hours, minutes, 0, 0)
      setTempPickerDate(date)
    }, [value])

    const mainColor = getColorStyle(TrilogyColor.MAIN)
    const mainFadeColor = getColorStyle(TrilogyColor.MAIN_FADE)
    const strokeColor = getColorStyle(TrilogyColor.STROKE)
    const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)
    const dotColor = getColorStyle(TrilogyColor.NEUTRAL)

    const totalMinutes = useMemo(() => {
      if (currentHours === 24) return 0
      else return currentHours * 60 + currentMinutes
    }, [currentHours, currentMinutes])

    const angle = useMemo(() => (totalMinutes / maxMinutes) * 2 * Math.PI - Math.PI / 2, [totalMinutes])

    const { cursorX, cursorY } = useMemo(() => {
      const cursorX = centerX + radius * Math.cos(angle) - CURSOR_SIZE / 2
      const cursorY = centerY + radius * Math.sin(angle) - CURSOR_SIZE / 2
      return { cursorX, cursorY }
    }, [angle])

    const updateTimeFromAngle = useCallback(
      (angleRad: number) => {
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
        if (newTotalMinutes !== lastTotalMinutes.current) {
          lastTotalMinutes.current = newTotalMinutes
          setCurrentHours(newHours)
          setCurrentMinutes(newMinutes)
          onChange?.(formatTime(newHours, newMinutes))
        }
      },
      [maxMinutes, onChange, step],
    )

    const handlePickerChange = useCallback(
      (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
          setIsPickerVisible(false)
          if (selectedDate && event.type !== 'dismissed') {
            const hours = selectedDate.getHours()
            const minutes = selectedDate.getMinutes()
            setCurrentHours(hours)
            setCurrentMinutes(minutes)
            setTempPickerDate(selectedDate)
            if (onChange) onChange(formatTime(hours, minutes))
          }
        } else {
          if (selectedDate && event.type !== 'dismissed') {
            setTempPickerDate(selectedDate)
          } else if (event.type === 'dismissed') {
            setIsPickerVisible(false)
          }
        }
      },
      [onChange, formatTime],
    )

    const handleInputPress = useCallback(() => {
      if (disabled) return
      const currentDate = new Date()
      currentDate.setHours(currentHours, currentMinutes, 0, 0)
      setTempPickerDate(currentDate)
      setIsPickerVisible(true)
    }, [disabled, currentHours, currentMinutes])

    const handleConfirmPicker = useCallback(() => {
      const hours = tempPickerDate.getHours()
      const minutes = tempPickerDate.getMinutes()
      setCurrentHours(hours)
      setCurrentMinutes(minutes)
      setHoursInputValue(formatNumber(hours))
      setMinutesInputValue(formatNumber(minutes))
      setIsPickerVisible(false)
      if (onChange) onChange(formatTime(hours, minutes))
    }, [tempPickerDate, onChange, formatTime, formatNumber])

    const handleCancelPicker = useCallback(() => {
      setIsPickerVisible(false)
      const currentDate = new Date()
      currentDate.setHours(currentHours, currentMinutes, 0, 0)
      setTempPickerDate(currentDate)
    }, [currentHours, currentMinutes])

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

    const normalizeAngle = useCallback((angle: number) => {
      let normalized = angle
      while (normalized <= -Math.PI) normalized += 2 * Math.PI
      while (normalized > Math.PI) normalized -= 2 * Math.PI
      return normalized
    }, [])

    const handleGesture = useCallback(
      (x: number, y: number, isStart = false) => {
        if (disabled) return
        const dx = x - centerX
        const dy = y - centerY
        const rawAngle = Math.atan2(dy, dx)
        const newAngle = normalizeAngle(rawAngle)

        if (lastAngle.current !== null && !isStart) {
          let angleDiff = newAngle - lastAngle.current
          if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI
          if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI
          const threshold = Platform.OS === 'android' ? 0.09 : 0.01
          if (Math.abs(angleDiff) < threshold) return
        }

        lastAngle.current = newAngle
        updateTimeFromAngle(newAngle)
      },
      [centerX, centerY, disabled, normalizeAngle, updateTimeFromAngle],
    )

    const handleHourDotPress = useCallback(
      (hourIndex: number) => {
        if (disabled) return
        const newHours = hourIndex
        let newMinutes = currentMinutes
        if (newHours === 24) newMinutes = 0
        if (newHours !== currentHours) {
          newMinutes = Math.round(newMinutes / step) * step
          if (newMinutes > 59) newMinutes = 59
        }
        setCurrentHours(newHours)
        setCurrentMinutes(newMinutes)
        setHoursInputValue(formatNumber(newHours))
        setMinutesInputValue(formatNumber(newMinutes))
        onChange?.(formatTime(newHours, newMinutes))
      },
      [disabled, currentMinutes, currentHours, step, onChange],
    )

    const panGesture = useMemo(
      () =>
        Gesture.Pan()
          .runOnJS(true)
          .onBegin((event) => {
            if (disabled) return
            const { x, y } = event
            if (isOnCircleTrack(x, y)) {
              handleGesture(x, y, true)
            }
          })
          .onUpdate((event) => {
            if (disabled) return
            const { x, y } = event
            handleGesture(x, y)
          })
          .onEnd(() => {
            lastAngle.current = null
          })
          .onFinalize(() => {
            lastAngle.current = null
          })
          .minDistance(0)
          .blocksExternalGesture()
          .shouldCancelWhenOutside(false),
      [disabled, handleGesture, isOnCircleTrack],
    )

    const tapGesture = useMemo(
      () =>
        Gesture.Tap()
          .runOnJS(true)
          .onEnd((event) => {
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

    const progressOffset = useMemo(() => {
      if (currentHours === 24) {
        return 0
      } else {
        const actualTotalMinutes = currentHours * 60 + currentMinutes
        return circumference - (actualTotalMinutes / maxMinutes) * circumference
      }
    }, [currentHours, currentMinutes])

    const hourDots = useMemo(() => {
      const dots = []
      for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
        const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
        const dotX = centerX + radius * Math.cos(dotAngle) - HOUR_DOT_SIZE / 2
        const dotY = centerY + radius * Math.sin(dotAngle) - HOUR_DOT_SIZE / 2

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
                  backgroundColor: dotColor,
                },
              ]}
            />
          </View>,
        )
      }
      return <View style={styles.hourDotsContainer}>{dots}</View>
    }, [dotColor])

    const progressBackground = useMemo(() => {
      return (
        <View style={styles.svgContainer}>
          <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
            <Circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={svgRadius}
              stroke={mainFadeColor}
              strokeWidth={strokeWidth}
              fill='transparent'
            />
          </Svg>
        </View>
      )
    }, [svgRadius, mainFadeColor, strokeWidth])

    const progressCircle = useMemo(() => {
      return (
        <View style={[styles.svgContainer, { zIndex: 3 }]}>
          <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
            <Circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={svgRadius}
              stroke={mainColor}
              strokeWidth={strokeWidth}
              fill='transparent'
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap='round'
              transform={`rotate(-90 ${CIRCLE_SIZE / 2} ${CIRCLE_SIZE / 2})`}
            />
          </Svg>
        </View>
      )
    }, [svgRadius, mainColor, strokeWidth, circumference, progressOffset])

    return (
      <View ref={ref} style={styles.container} testID={testId} {...others}>
        <GestureDetector gesture={combinedGesture}>
          <View ref={containerRef} style={styles.circleContainer}>
            {progressBackground}
            {hourDots}
            {progressCircle}
            <View
              style={[
                styles.cursor,
                { backgroundColor: backgroundColor, borderColor: mainColor, left: cursorX, top: cursorY },
              ]}
            />
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
              <TouchableOpacity style={styles.inputWrapper} onPress={handleInputPress} disabled={disabled}>
                <View
                  style={[
                    styles.input,
                    styles.inputDisplay,
                    {
                      borderColor: strokeColor,
                      backgroundColor: backgroundColor,
                    },
                  ]}
                >
                  <Text
                    typo={[TypographyAlign.TEXT_CENTERED, TypographyBold.TEXT_WEIGHT_BOLD]}
                    style={{ lineHeight: Platform.OS === 'android' ? 20 : 0 }}
                  >
                    {hoursInputValue}
                  </Text>
                </View>

                <Text level={TextLevels.FOUR} typo={TypographyAlign.TEXT_CENTERED}>
                  Heures
                </Text>
              </TouchableOpacity>

              <View style={styles.separatorWrapper}>
                <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]}>:</Text>
              </View>

              <TouchableOpacity style={styles.inputWrapper} onPress={handleInputPress} disabled={disabled}>
                <View
                  style={[
                    styles.input,
                    styles.inputDisplay,
                    { borderColor: strokeColor, backgroundColor: backgroundColor },
                  ]}
                >
                  <Text
                    typo={[TypographyAlign.TEXT_CENTERED, TypographyBold.TEXT_WEIGHT_BOLD]}
                    style={{ lineHeight: Platform.OS === 'android' ? 20 : 0 }}
                  >
                    {minutesInputValue}
                  </Text>
                </View>
                <Text level={TextLevels.FOUR} typo={TypographyAlign.TEXT_CENTERED}>
                  Min
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </GestureDetector>

        {Platform.OS === 'android' ? (
          isPickerVisible && (
            <DateTimePicker
              value={tempPickerDate}
              mode='time'
              display={'spinner'}
              onChange={handlePickerChange}
              style={styles.picker}
              minuteInterval={step as any}
            />
          )
        ) : (
          <Modal active={isPickerVisible} onClose={handleCancelPicker}>
            <ModalBody>
              <DateTimePicker
                value={tempPickerDate}
                mode='time'
                display={'spinner'}
                onChange={handlePickerChange}
                style={styles.picker}
                minuteInterval={step as any}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleConfirmPicker}>Confirmer</Button>
            </ModalFooter>
          </Modal>
        )}
      </View>
    )
  },
)

TimepickerCircular.displayName = ComponentName.TimepickerCircular

export default TimepickerCircular

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    position: 'relative',
  },
  cursor: {
    position: 'absolute',
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
    borderRadius: CURSOR_SIZE / 2,
    borderWidth: CURSOR_STROKE,
    zIndex: 20,
  },
  inputsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 30,
    gap: 4,
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
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  inputDisplay: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorWrapper: {
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    zIndex: 2,
  },
  svgContainer: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    zIndex: 1,
  },
  nonDraggableZone: {
    position: 'absolute',
    borderRadius: 100,
    zIndex: 25,
  },
  picker: {
    height: 200,
  },
})
