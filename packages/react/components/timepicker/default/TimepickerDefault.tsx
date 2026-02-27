import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { FlexBox } from '@/components/flex-box'
import { Input } from '@/components/input'
import { Text } from '@/components/text'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { useClickOutside } from '@/helpers/clickOutside'
import { Align, Justify, TypographyAlign } from '@/objects'
import clsx from 'clsx'
import React, { useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { TimepickerSelector } from './selector'
import { TimepickerDefaultProps } from './TimepickerDefaultProps'

const APPROXIMATIVE_HEIGHT_TIMEPICKER = 300

const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    value: i,
    label: i.toString().padStart(2, '0'),
  }))

const parseTime = (timeStr: string) => {
  const [h, m] = timeStr.split(':')
  return {
    hours: parseInt(h || '0', 10) || 0,
    minutes: parseInt(m || '0', 10) || 0,
  }
}

const TimepickerDefault = React.forwardRef<HTMLInputElement, Omit<TimepickerDefaultProps, 'circular'>>(
  ({ disabled, id, value = '00:00', onChange, step = 1, label, sample, help, required, testId, ...others }, ref) => {
    const [display, setDisplay] = useState<boolean>(false)
    const { styled } = useTrilogyContext()
    const { hours, minutes } = parseTime(value)
    useImperativeHandle(ref, () => timepickerRef.current as HTMLInputElement)

    const [selectedHours, setSelectedHours] = useState(hours)
    const [selectedMinutes, setSelectedMinutes] = useState(minutes)
    const [inputValue, setInputValue] = useState<string>(value !== '00:00' ? value : '')
    const timepickerRef = useRef<HTMLInputElement>(null)
    const refInput = useRef<HTMLInputElement>(null)
    const [portalPosition, setPortalPosition] = useState<{
      top: number
      left: number
      width: number
      openUpward: boolean
    }>({ top: 0, left: 0, width: 0, openUpward: false })

    const menuClasses = hashClass(styled, clsx('timepicker-menu'))
    const dividerClasses = hashClass(styled, clsx('timepicker-menu-divider'))

    useClickOutside(timepickerRef, () => {
      setTimeout(() => {
        setDisplay(false)
      }, 0)
    })

    const calculatePortalPosition = useCallback(() => {
      if (!refInput.current) return

      const rect = refInput.current.getBoundingClientRect()
      const { top, bottom, left, width } = rect
      const windowHeight = window.innerHeight
      const spaceBelow = windowHeight - bottom
      const padding = 10
      const maxHeightBelow = spaceBelow - padding
      const maxHeightAbove = top - padding
      const shouldOpenUpward = maxHeightBelow < APPROXIMATIVE_HEIGHT_TIMEPICKER && maxHeightAbove > maxHeightBelow

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      setPortalPosition({
        top: shouldOpenUpward
          ? top + scrollTop - APPROXIMATIVE_HEIGHT_TIMEPICKER - padding
          : bottom + scrollTop + padding,
        left: left + scrollLeft,
        width: width,
        openUpward: shouldOpenUpward,
      })
    }, [])

    const hourItems = useMemo(() => generateItems(24), [])
    const minuteItems = useMemo(() => {
      const items = []
      for (let i = 0; i < 60; i += step) {
        items.push({ value: i, label: i.toString().padStart(2, '0') })
      }
      return items
    }, [step])

    const handleOpenCloseModal = useCallback(() => {
      if (!disabled) {
        if (!display) {
          calculatePortalPosition()
        }
        setDisplay((prev) => !prev)
      }
    }, [disabled, display, calculatePortalPosition])

    const handleHourChange = useCallback(
      (newHour: number) => {
        setSelectedHours(newHour)
        const formatted = `${newHour.toString().padStart(2, '0')}:${selectedMinutes.toString().padStart(2, '0')}`
        setInputValue(formatted)
        onChange?.(formatted)
      },
      [selectedMinutes, onChange],
    )

    const handleMinuteChange = useCallback(
      (newMinute: number) => {
        setSelectedMinutes(newMinute)
        const formatted = `${selectedHours.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`
        setInputValue(formatted)
        onChange?.(formatted)
      },
      [selectedHours, onChange],
    )

    const handleKeyDown = useCallback(
      (event: { inputKeyCode: number; preventDefault: () => void }) => {
        const { inputKeyCode, preventDefault } = event
        if (inputKeyCode === 38 || inputKeyCode === 40) {
          preventDefault()

          const input = refInput.current
          if (!input) return

          const cursorPosition = input.selectionStart || 0
          const isHourSection = cursorPosition <= 2
          const increment = inputKeyCode === 38 ? 1 : -1

          if (isHourSection) {
            const newHours = Math.max(0, Math.min(23, selectedHours + increment))
            handleHourChange(newHours)
            setTimeout(() => {
              if (input) {
                input.setSelectionRange(0, 2)
              }
            }, 0)
          } else {
            const newMinutes = Math.max(0, Math.min(59, selectedMinutes + increment))
            const roundedMinutes = Math.round(newMinutes / step) * step
            const finalMinutes = Math.max(0, Math.min(59, roundedMinutes))
            handleMinuteChange(finalMinutes)
            setTimeout(() => {
              if (input) {
                input.setSelectionRange(3, 5)
              }
            }, 0)
          }
        }
        if (inputKeyCode === 37 || inputKeyCode === 39) {
          const input = refInput.current
          if (!input) return

          const cursorPosition = input.selectionStart || 0
          const inputValue = input.value || ''

          if (inputKeyCode === 37 && cursorPosition === 3 && inputValue.length >= 3) {
            preventDefault()
            setTimeout(() => {
              if (input) {
                input.setSelectionRange(2, 2)
              }
            }, 0)
          } else if (inputKeyCode === 39 && cursorPosition === 2 && inputValue.length >= 3) {
            preventDefault()
            setTimeout(() => {
              if (input) {
                input.setSelectionRange(3, 3)
              }
            }, 0)
          }
        }
      },
      [selectedHours, selectedMinutes, step, handleHourChange, handleMinuteChange],
    )

    const handleInputChange = useCallback(
      (event: { inputValue: string }) => {
        const { inputValue } = event
        const previousValue = refInput.current?.value || ''
        const cleanValue = inputValue.replace(/[^\d:]/g, '')
        let formattedValue = ''
        const digits = cleanValue.replace(/:/g, '')
        let shouldMoveCursor = false

        if (digits.length === 0) {
          formattedValue = ''
        } else if (digits.length === 1) {
          formattedValue = digits
        } else if (digits.length === 2) {
          formattedValue = `${digits}:`
          if (previousValue.length === 2 && !previousValue.includes(':')) {
            shouldMoveCursor = true
          }
        } else if (digits.length === 3) {
          formattedValue = `${digits.slice(0, 2)}:${digits.slice(2)}`
        } else if (digits.length === 4) {
          formattedValue = `${digits.slice(0, 2)}:${digits.slice(2, 4)}`
        } else {
          formattedValue = `${digits.slice(0, 2)}:${digits.slice(2, 4)}`
        }
        if (formattedValue.length > 5) {
          formattedValue = formattedValue.slice(0, 5)
        }

        setInputValue(formattedValue)
        if (shouldMoveCursor) {
          setTimeout(() => {
            if (refInput.current) {
              refInput.current.setSelectionRange(3, 3)
            }
          }, 0)
        }

        if (formattedValue.includes(':') && formattedValue.length === 5) {
          const { hours, minutes } = parseTime(formattedValue)
          if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
            const roundedMinutes = Math.round(minutes / step) * step
            const finalMinutes = Math.max(0, Math.min(59, roundedMinutes))
            const finalFormattedValue = `${hours.toString().padStart(2, '0')}:${finalMinutes
              .toString()
              .padStart(2, '0')}`

            setSelectedHours(hours)
            setSelectedMinutes(finalMinutes)
            if (finalMinutes !== minutes) {
              setInputValue(finalFormattedValue)
            }

            onChange?.(finalFormattedValue)
          }
        } else if (formattedValue === '') {
          setSelectedHours(0)
          setSelectedMinutes(0)
          onChange?.('00:00')
        }
      },
      [onChange],
    )

    React.useEffect(() => {
      const { hours: h, minutes: m } = parseTime(value)
      setSelectedHours(h)
      setSelectedMinutes(m)
      setInputValue(value !== '00:00' ? value : '')
    }, [value])

    React.useEffect(() => {
      if (!display) return
      const handleUpdate = () => calculatePortalPosition()
      window.addEventListener('scroll', handleUpdate, true)
      window.addEventListener('resize', handleUpdate)
      return () => {
        window.removeEventListener('scroll', handleUpdate, true)
        window.removeEventListener('resize', handleUpdate)
      }
    }, [display, calculatePortalPosition])

    return (
      <div ref={timepickerRef} style={{ position: 'relative' }}>
        <Input
          ref={refInput}
          label={label}
          sample={sample}
          help={help}
          required={required}
          onIconClick={handleOpenCloseModal}
          disabled={disabled}
          iconNameRight={'tri-clock'}
          placeholder='--:--'
          value={inputValue}
          id={id}
          onChange={handleInputChange}
          onFocus={() => {
            calculatePortalPosition()
            setDisplay(true)
          }}
          onClick={() => {
            if (refInput.current) {
              refInput.current.select()
            }
          }}
          onKeyDown={handleKeyDown}
          {...{ ...others }}
        />

        {display && (
          <div
            className={menuClasses}
            style={{
              top: portalPosition.openUpward ? 'auto' : '100%',
              bottom: portalPosition.openUpward ? '100%' : 'auto',
              marginTop: portalPosition.openUpward ? '0' : '4px',
              marginBottom: portalPosition.openUpward ? '4px' : '0',
            }}
          >
            <div className={dividerClasses} />

            <FlexBox
              align={Align.CENTER}
              justify={Justify.SPACE_BETWEEN}
              gap={GapSize.ONE}
              className='timepicker-menu-header'
            >
              <Text typo={[TypographyAlign.TEXT_CENTERED]} className='timepicker-menu-title'>
                Heure
              </Text>
              <Text typo={[TypographyAlign.TEXT_CENTERED]} className='timepicker-menu-title'>
                Minute
              </Text>
            </FlexBox>
            <FlexBox
              align={Align.CENTER}
              justify={Justify.SPACE_BETWEEN}
              className='timepicker-menu-selectors'
              gap={GapSize.FOUR}
            >
              <TimepickerSelector
                items={hourItems}
                value={selectedHours}
                onValueChange={(v) => handleHourChange(Number(v))}
              />
              <TimepickerSelector
                items={minuteItems}
                value={selectedMinutes}
                onValueChange={(v) => handleMinuteChange(Number(v))}
              />
            </FlexBox>
          </div>
        )}
      </div>
    )
  },
)

TimepickerDefault.displayName = ComponentName.Timepicker
export default TimepickerDefault
