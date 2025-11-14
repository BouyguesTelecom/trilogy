import React, { useState } from 'react'
import { ComponentName } from '../enumsComponentsName'

const DatePicker = React.forwardRef<HTMLDivElement>((): JSX.Element => {
  const [day, setDay] = useState('jj')
  const [month, setMonth] = useState('mm')
  const [year, setYear] = useState('aaaa')
  const [canContinueTyping, setCanContinueTyping] = useState(false)
  const [yearPosition, setYearPosition] = useState(0)
  const refsSegment = React.useRef<HTMLInputElement[]>([])

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    sensitive: number | false,
    max: number,
    segment: string,
    isYear: boolean,
    position: number,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { key } = e
    e.preventDefault()
    if (!/[0-9]/.test(key)) return
    const digit = parseInt(key)

    if (!canContinueTyping) {
      setter(isYear ? `000${key}` : `0${key}`)
      if (sensitive === false || digit <= sensitive) setCanContinueTyping(true)
      if (sensitive && digit > sensitive)
        setTimeout(() => {
          if (position < 2) refsSegment.current[position + 1].focus()
        }, 0)
    }

    if (canContinueTyping) {
      const newValue = isYear ? segment + key : segment[1] + key
      const num = parseInt(newValue)
      if (num >= 1 && num <= max) setter(isYear ? newValue.slice(-4) : newValue)
      if (!isYear || (isYear && yearPosition === 3)) {
        setCanContinueTyping(false)
        setTimeout(() => {
          if (position < 2) refsSegment.current[position + 1].focus()
        }, 0)
      }
    }
    if (isYear) setYearPosition((prev) => (prev === 3 ? 0 : prev + 1))
  }

  const handleKeyDownDay = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') e.preventDefault()
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCanContinueTyping(false)
    e.target.select()
  }

  return (
    <div>
      <input
        type='text'
        value={day}
        onKeyUp={(e) => handleKeyPress(e, 3, 31, day, false, 0, setDay)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDownDay}
        placeholder='jj'
        maxLength={2}
        readOnly
        ref={(el) => {
          if (el) refsSegment.current[0] = el
        }}
      />
      <input
        type='text'
        value={month}
        onKeyUp={(e) => handleKeyPress(e, 1, 12, month, false, 1, setMonth)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDownDay}
        placeholder='mm'
        maxLength={2}
        readOnly
        ref={(el) => {
          if (el) refsSegment.current[1] = el
        }}
      />
      <input
        type='text'
        value={year}
        onKeyUp={(e) => handleKeyPress(e, false, 9999, year, true, 2, setYear)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDownDay}
        placeholder='aaaa'
        maxLength={4}
        readOnly
        ref={(el) => {
          if (el) refsSegment.current[2] = el
        }}
      />
    </div>
  )
})

DatePicker.displayName = ComponentName.DatePicker
export default DatePicker
