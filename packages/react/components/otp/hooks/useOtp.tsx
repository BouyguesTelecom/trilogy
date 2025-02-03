import React from 'react'

interface IProps {
  value?: string
  disabled?: boolean
  onChange?: (code?: string) => void
  onCompleted?: (code?: string) => void
  length: number
}

export const useOtp = ({ value, disabled, length, onChange, onCompleted }: IProps) => {
  type NumberOrNull = number | null

  const stringToCode = (str: string | undefined, codeSize: number): Array<NumberOrNull> => {
    if (!str) return new Array(codeSize).fill(null)
    return str.split('').map((char) => (char === '' ? null : Number(char)))
  }

  const codeToString = (code: NumberOrNull[]): string => {
    return code.map((char) => (char === null ? '_' : char)).join('')
  }

  const isCompleted = (myCode: NumberOrNull[]) => {
    return myCode.every((code) => code !== null)
  }

  const focusToNextInput = (target: HTMLInputElement, value?: string) => {
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null

    if (nextElementSibling) {
      if (value) nextElementSibling.value = value

      if (target.value.length) nextElementSibling.focus()
    } else {
      target.focus()
    }
  }
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null
    if (previousElementSibling) {
      previousElementSibling.focus()
    } else {
      target.focus()
    }
  }

  const updateCodeInput = (value: string, index: number, code: NumberOrNull[]): NumberOrNull[] => {
    const numberValue = Number(value)
    if (isNaN(numberValue) || value.length < 1) {
      return code
    }
    const newCodeInput = code.map((code, idx) => {
      return idx === index ? Number(value.slice(0, 1)) : code
    })
    return updateCodeInput(value.slice(1), index + 1, newCodeInput)
  }

  const inputOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e
    const target = e.target as HTMLInputElement

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      return focusToNextInput(target)
    }
    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      return focusToPrevInput(target)
    }
    if (key === 'Backspace') {
      return target.value === '' && focusToPrevInput(target)
    }
    if (key >= '0' && key <= '9') {
      focusToNextInput(target)
    }
  }

  try {
    const [codeInput, setCodeInput] = React.useState<NumberOrNull[]>(
      stringToCode(value, length) || new Array(length).fill(null),
    )

    const hasChanged = React.useRef(false)

    React.useEffect(() => {
      if (!disabled) {
        isCompleted(codeInput) && onCompleted?.(codeToString(codeInput))
      }
    }, [length, codeInput, onCompleted, disabled])

    React.useEffect(() => {
      hasChanged.current = codeInput.find((code) => code !== null) !== undefined
      if (hasChanged.current) {
        onChange?.(codeToString(codeInput))
      }
    }, [codeInput])

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      const { target } = e
      const targetValue = target.value.trim()

      if (targetValue.length > 0) {
        setCodeInput(updateCodeInput(targetValue, idx, codeInput))
      } else {
        setCodeInput(
          codeInput.map((code, index) => {
            return index === idx ? null : code
          }),
        )
      }
    }

    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const { target } = e
      target.setSelectionRange(0, target.value.length)
    }

    return { codeInput, inputOnKeyUp, inputOnFocus, inputOnChange }
  } catch {
    return {
      codeInput: stringToCode(value, length) || new Array(length).fill(null),
    }
  }
}
