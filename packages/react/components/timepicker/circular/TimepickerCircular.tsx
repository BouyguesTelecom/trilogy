import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { TypographyAlign, TypographyBold } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TimepickerCircularProps, TimepickerCircularRef } from './TimepickerCircularProps'

const CIRCLE_SIZE = 204
const CIRCLE_THICKNESS = 32
const CURSOR_SIZE = 32
const HOUR_DOT_SIZE = 8
const HOUR_DOTS_COUNT = 24

/**
 * TimepickerCircular Web Component
 * @param value {string} Current time value in "HH:MM" format (e.g., "14:30", "23:59")
 * @param onChange {Function} Callback called when time changes, receives new "HH:MM" value
 * @param disabled {boolean} Disabled state of the component (default: false)
 * @param step {number} Step for minutes (e.g., 5 for 5-minute increments, default: 5)
 */
const TimepickerCircular = React.forwardRef<TimepickerCircularRef, TimepickerCircularProps>(
  ({ value = '00:00', onChange, disabled = false, step = 5, testId, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const formatNumber = (num: number): string => num.toString().padStart(2, '0')
    const formatTime = (hours: number, minutes: number): string => `${formatNumber(hours)}:${formatNumber(minutes)}`

    const parseTime = (timeString: string): { hours: number; minutes: number } => {
      const [hoursStr, minutesStr] = timeString.split(':')
      const hours = parseInt(hoursStr || '0', 10)
      const minutes = parseInt(minutesStr || '0', 10)
      const totalMinutes = isNaN(hours) || isNaN(minutes) ? 0 : hours * 60 + minutes
      const clampedTotalMinutes = Math.max(0, Math.min(23 * 60 + 59, totalMinutes))

      return {
        hours: Math.floor(clampedTotalMinutes / 60),
        minutes: clampedTotalMinutes % 60,
      }
    }

    const { hours: initialHours, minutes: initialMinutes } = parseTime(value)

    const progressContainerClasses = hashClass(styled, clsx('timepicker-circular_progress-container'))
    const progressClasses = hashClass(styled, clsx('timepicker-circular_progress'))
    const dotClasses = hashClass(styled, clsx('timepicker-circular_dot-hour'))
    const dotFilledClasses = hashClass(styled, clsx(is('filled')))

    const [currentHours, setCurrentHours] = useState(initialHours)
    const [currentMinutes, setCurrentMinutes] = useState(initialMinutes)
    const [isDragging, setIsDragging] = useState(false)
    const [blurKey, setBlurKey] = useState(0)
    const refsSegment = useRef<HTMLSpanElement[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const lastAngle = useRef<number | null>(null)
    const pointerIdRef = useRef<number | null>(null)

    useEffect(() => {
      const { hours, minutes } = parseTime(value)
      setCurrentHours(hours)
      setCurrentMinutes(minutes)
    }, [value])

    const radius = (CIRCLE_SIZE - CIRCLE_THICKNESS) / 2
    const centerX = CIRCLE_SIZE / 2
    const centerY = CIRCLE_SIZE / 2

    const totalMinutes = currentHours * 60 + currentMinutes

    const maxMinutes = 24 * 60
    const angle = (totalMinutes / maxMinutes) * 2 * Math.PI - Math.PI / 2

    const cursorX = centerX + radius * Math.cos(angle) - CURSOR_SIZE / 2
    const cursorY = centerY + radius * Math.sin(angle) - CURSOR_SIZE / 2

    const progressAngle = (totalMinutes / maxMinutes) * 360

    const updateTimeFromAngle = useCallback(
      (angleRad: number) => {
        let normalizedAngle = angleRad + Math.PI / 2
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI
        if (normalizedAngle >= 2 * Math.PI) normalizedAngle -= 2 * Math.PI
        const rawTotalMinutes = (normalizedAngle / (2 * Math.PI)) * maxMinutes
        const roundedTotalMinutes = Math.round(rawTotalMinutes / step) * step
        const newTotalMinutes = Math.max(0, Math.min(23 * 60 + 59, roundedTotalMinutes))
        const newHours = Math.floor(newTotalMinutes / 60)
        const newMinutes = newTotalMinutes % 60

        if (newHours !== currentHours || newMinutes !== currentMinutes) {
          setCurrentHours(newHours)
          setCurrentMinutes(newMinutes)
          onChange?.(formatTime(newHours, newMinutes))
        }
      },
      [maxMinutes, onChange, currentHours, currentMinutes, step],
    )

    const getMousePosition = (
      event: MouseEvent | React.MouseEvent | PointerEvent | React.PointerEvent | TouchEvent,
    ): { x: number; y: number } => {
      if (!containerRef.current) return { x: 0, y: 0 }
      const rect = containerRef.current.getBoundingClientRect()
      const anyEvent = event as any
      if (anyEvent.touches && anyEvent.touches.length > 0) {
        const t = anyEvent.touches[0]
        return { x: t.clientX - rect.left, y: t.clientY - rect.top }
      }
      return {
        x: anyEvent.clientX - rect.left,
        y: anyEvent.clientY - rect.top,
      }
    }

    const isOnCursor = (x: number, y: number): boolean => {
      const cursorCenterX = cursorX + CURSOR_SIZE / 2
      const cursorCenterY = cursorY + CURSOR_SIZE / 2
      const dx = x - cursorCenterX
      const dy = y - cursorCenterY
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance <= CURSOR_SIZE / 2 + 4
    }

    const isOnHourDot = (x: number, y: number): number => {
      for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
        const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
        const dotX = centerX + radius * Math.cos(dotAngle)
        const dotY = centerY + radius * Math.sin(dotAngle)
        const dx = x - dotX
        const dy = y - dotY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance <= HOUR_DOT_SIZE + 6) return i
      }
      return -1
    }

    const handleMouseDown = (event: React.MouseEvent) => {
      if (disabled) return
      event.preventDefault()

      const { x, y } = getMousePosition(event)
      if (isOnCursor(x, y)) {
        setIsDragging(true)
        lastAngle.current = null

        const dx = x - centerX
        const dy = y - centerY
        const newAngle = Math.atan2(dy, dx)
        updateTimeFromAngle(newAngle)
      } else {
        const hourDotIndex = isOnHourDot(x, y)
        if (hourDotIndex !== -1) {
          handleHourDotPress(hourDotIndex)
        }
      }
    }

    const handleMove = useCallback(
      (event: MouseEvent | PointerEvent) => {
        if (!isDragging || disabled) return
        event.preventDefault()

        const { x, y } = getMousePosition(event as any)
        const dx = x - centerX
        const dy = y - centerY
        const newAngle = Math.atan2(dy, dx)

        if (lastAngle.current !== null) {
          const angleDiff = Math.abs(newAngle - lastAngle.current)
          if (angleDiff < 0.01) return
        }

        lastAngle.current = newAngle
        updateTimeFromAngle(newAngle)
      },
      [isDragging, disabled, centerX, centerY, updateTimeFromAngle],
    )

    const handleMouseUp = useCallback(() => {
      setIsDragging(false)
      lastAngle.current = null
      if (pointerIdRef.current !== null) {
        containerRef.current?.releasePointerCapture(pointerIdRef.current)
        pointerIdRef.current = null
      }
    }, [])

    const handlePointerDown = (event: React.PointerEvent) => {
      if (disabled) return
      event.preventDefault()

      const { x, y } = getMousePosition(event as any)

      if (isOnCursor(x, y)) {
        pointerIdRef.current = event.pointerId
        containerRef.current?.setPointerCapture(event.pointerId)
        setIsDragging(true)
        lastAngle.current = null

        const dx = x - centerX
        const dy = y - centerY
        const newAngle = Math.atan2(dy, dx)
        updateTimeFromAngle(newAngle)
      } else {
        const hourDotIndex = isOnHourDot(x, y)
        if (hourDotIndex !== -1) {
          handleHourDotPress(hourDotIndex)
        }
      }
    }

    useEffect(() => {
      if (isDragging) {
        document.addEventListener('pointermove', handleMove)
        document.addEventListener('pointerup', handleMouseUp)
        document.addEventListener('mousemove', handleMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
          document.removeEventListener('pointermove', handleMove)
          document.removeEventListener('pointerup', handleMouseUp)
          document.removeEventListener('mousemove', handleMove)
          document.removeEventListener('mouseup', handleMouseUp)
        }
      }
    }, [isDragging, handleMove, handleMouseUp])

    const handleHourDotPress = useCallback(
      (hourIndex: number) => {
        if (disabled) return

        const newHours = hourIndex
        let newMinutes = currentMinutes
        if (newHours !== currentHours) {
          newMinutes = Math.round(newMinutes / step) * step
          if (newMinutes > 59) newMinutes = 59
        }
        setCurrentHours(newHours)
        setCurrentMinutes(newMinutes)
        onChange?.(formatTime(newHours, newMinutes))
      },
      [disabled, currentMinutes, currentHours, step, onChange],
    )

    const handleBlur = useCallback(
      (type: 'hours' | 'minutes', element: HTMLSpanElement) => {
        const value = element.textContent || ''
        const numValue = parseInt(value, 10)

        if (type === 'hours') {
          const newHours = isNaN(numValue) || value === '' ? 0 : Math.max(0, Math.min(23, numValue))
          setCurrentHours(newHours)
          onChange?.(formatTime(newHours, currentMinutes))
        } else {
          let newMinutes = isNaN(numValue) || value === '' ? 0 : Math.max(0, Math.min(59, numValue))
          newMinutes = Math.round(newMinutes / step) * step
          if (newMinutes >= 60) newMinutes = 60 - step
          setCurrentMinutes(newMinutes)
          onChange?.(formatTime(currentHours, newMinutes))
        }
        setBlurKey((k) => k + 1)
      },
      [currentHours, currentMinutes, onChange, formatNumber, formatTime, step],
    )

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLSpanElement>) => {
      const target = e.target as HTMLSpanElement
      const currentText = target.textContent || ''

      if (e.key === 'Enter') return e.preventDefault()
      if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End'].includes(e.key)) return
      if (e.ctrlKey || e.metaKey) return
      if (!/^[0-9]$/.test(e.key)) return e.preventDefault()

      const selection = window.getSelection()
      if (selection && selection.toString().length > 0) return
      if (currentText.length >= 2) return e.preventDefault()
    }, [])

    const hourDots = useMemo(() => {
      const dots = []
      const actualTotalMinutes = currentHours * 60 + currentMinutes
      const currentProgress = actualTotalMinutes / maxMinutes

      for (let i = 0; i < HOUR_DOTS_COUNT; i++) {
        const dotAngle = (i / HOUR_DOTS_COUNT) * 2 * Math.PI - Math.PI / 2
        const dotX = centerX + radius * Math.cos(dotAngle) - HOUR_DOT_SIZE / 2
        const dotY = centerY + radius * Math.sin(dotAngle) - HOUR_DOT_SIZE / 2
        const dotProgress = i / HOUR_DOTS_COUNT
        const isFilled = dotProgress < currentProgress

        dots.push(
          <div
            key={i}
            style={{
              position: 'absolute',
              left: dotX - 6,
              top: dotY - 6,
              width: HOUR_DOT_SIZE + 12,
              height: HOUR_DOT_SIZE + 12,
              borderRadius: '50%',
              zIndex: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleHourDotPress(i)}
          >
            <div
              className={`${dotClasses} ${isFilled ? dotFilledClasses : ''}`}
              style={{
                width: HOUR_DOT_SIZE,
                height: HOUR_DOT_SIZE,
                borderRadius: '50%',
              }}
            />
          </div>,
        )
      }
      return dots
    }, [currentHours, currentMinutes, centerX, radius, maxMinutes, handleHourDotPress])

    const progressGauge = useMemo(() => {
      const strokeWidth = CIRCLE_THICKNESS
      const svgRadius = (CIRCLE_SIZE - strokeWidth) / 2
      const circumference = 2 * Math.PI * svgRadius

      const actualTotalMinutes = currentHours * 60 + currentMinutes
      const progressOffset = circumference - (actualTotalMinutes / maxMinutes) * circumference

      return (
        <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} style={{ position: 'absolute', zIndex: 1 }}>
          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={svgRadius}
            strokeWidth={strokeWidth}
            fill='transparent'
            className={progressContainerClasses}
          />
          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={svgRadius}
            strokeWidth={strokeWidth}
            fill='transparent'
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap='round'
            transform={`rotate(-90 ${CIRCLE_SIZE / 2} ${CIRCLE_SIZE / 2})`}
            className={progressClasses}
          />
        </svg>
      )
    }, [currentHours, currentMinutes, maxMinutes])

    const styles = useMemo(
      () => ({
        circleContainer: {
          cursor: 'pointer',
          touchAction: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
        },
        cursor: {
          left: cursorX,
          top: cursorY,
          cursor: isDragging ? 'grabbing' : 'grab',
        },
        nonDraggableZone: {
          left: centerX - 60,
          top: centerY - 60,
        },
      }),
      [cursorX, cursorY, isDragging, centerX, centerY],
    )

    return (
      <div ref={ref} className={hashClass(styled, clsx('timepicker-circular'))} data-testid={testId} {...others}>
        <div
          ref={containerRef}
          style={styles.circleContainer as any}
          className={hashClass(styled, clsx('circle_container'))}
          onMouseDown={handleMouseDown}
          onPointerDown={handlePointerDown}
        >
          {progressGauge}
          <div style={{ position: 'absolute', width: CIRCLE_SIZE, height: CIRCLE_SIZE, zIndex: 10 }}>{hourDots}</div>
          <div style={styles.cursor} className={hashClass(styled, clsx('circle_container-cursor'))} />
          <div style={styles.nonDraggableZone} className={hashClass(styled, clsx('non_draggable_zone'))} />

          <div className={hashClass(styled, clsx('circle_container-inputs'))}>
            <div className={hashClass(styled, clsx('circle_container-inputs-wrapper'))}>
              <span
                key={`hours-${blurKey}`}
                aria-valuemin={0}
                aria-valuemax={23}
                aria-readonly={false}
                aria-label='hours'
                role='spinbutton'
                suppressContentEditableWarning
                autoCorrect='off'
                autoCapitalize='none'
                spellCheck={false}
                aria-valuetext={formatNumber(currentHours)}
                contentEditable={!disabled}
                inputMode='numeric'
                onKeyDown={handleKeyDown}
                onBlur={(e) => handleBlur('hours', e.target as HTMLSpanElement)}
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                className={hashClass(styled, clsx('circle_container-inputs-wrapper-input'))}
                ref={(el) => {
                  if (el) refsSegment.current[0] = el
                }}
              >
                <Text typo={[TypographyAlign.TEXT_CENTERED, TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>
                  {formatNumber(currentHours)}
                </Text>
              </span>
              <Text level={TextLevels.TWO} typo={[TypographyAlign.TEXT_CENTERED]}>
                Heures
              </Text>
            </div>

            <div className={hashClass(styled, clsx('circle_container-inputs-separator'))}>
              <Text typo={[TypographyBold.TEXT_WEIGHT_BOLD]}>:</Text>
            </div>

            <div className={hashClass(styled, clsx('circle_container-inputs-wrapper'))}>
              <span
                key={`minutes-${blurKey}`}
                aria-valuemin={0}
                aria-valuemax={59}
                aria-readonly={false}
                aria-label='minutes'
                role='spinbutton'
                suppressContentEditableWarning
                autoCorrect='off'
                autoCapitalize='none'
                spellCheck={false}
                aria-valuetext={formatNumber(currentMinutes)}
                contentEditable={!disabled}
                inputMode='numeric'
                onKeyDown={handleKeyDown}
                onBlur={(e) => handleBlur('minutes', e.target as HTMLSpanElement)}
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                className={hashClass(styled, clsx('circle_container-inputs-wrapper-input'))}
                ref={(el) => {
                  if (el) refsSegment.current[1] = el
                }}
              >
                <Text typo={[TypographyAlign.TEXT_CENTERED, TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>
                  {formatNumber(currentMinutes)}
                </Text>
              </span>
              <Text level={TextLevels.TWO} typo={[TypographyAlign.TEXT_CENTERED]}>
                Min
              </Text>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

export default TimepickerCircular
TimepickerCircular.displayName = ComponentName.TimepickerCircular
