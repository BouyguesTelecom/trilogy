import React, { useEffect, useRef, useState } from 'react'

interface HandleChangeSelectProps {
  selectValue: string
  selectName: string
  selectId: string
  disabled: boolean
}
export const useAccessibility = (
  isOpenSelect: boolean,
  handleChangeSelect: ({ selectValue, selectName, selectId, disabled }: HandleChangeSelectProps) => void,
  setIsOpenSelect: React.Dispatch<React.SetStateAction<boolean>>,
  optionRefs: React.RefObject<Array<HTMLDivElement | null>>,
  selectRef: React.RefObject<HTMLDivElement | null>,
  handleFocusCurrentOption: () => void,
) => {
  const selectInputRef = useRef('')
  const [isDebounce, setIsDebounce] = useState(false)

  useEffect(() => {
    if (isDebounce) {
      const timeoutId = setTimeout(() => {
        selectInputRef.current = ''
        setIsDebounce(false)
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [isDebounce])

  const arrowNavigateOptions = React.useCallback(
    (direction: number) => {
      if (isOpenSelect && optionRefs.current != null) {
        const currentIndex = optionRefs.current.findIndex((ref) => ref === document.activeElement)
        let newIndex = currentIndex + direction
        if (optionRefs.current[newIndex]?.dataset.isDisabled && direction === -1) newIndex--
        if (optionRefs.current[newIndex]?.dataset.isDisabled && direction === 1) newIndex++
        if (newIndex >= 0 && newIndex < optionRefs.current.length) {
          optionRefs.current[newIndex]?.focus()
        }
      }
    },
    [isOpenSelect, optionRefs],
  )

  const wordNavigateOptions = React.useCallback(
    (key: string) => {
      const isValidateString = /^\p{L}+$/u.test(key)
      if (optionRefs.current === null) return
      let focusedIndex = optionRefs.current.findIndex((ref) => ref === document.activeElement)

      const isTextExist = optionRefs.current.findIndex(
        (ref) => ref?.dataset.textcontent?.toLowerCase() === selectInputRef.current.toLowerCase(),
      )

      const sameLetters = selectInputRef.current
        .split('')
        .every((letter) => letter.toLowerCase() === selectInputRef.current[0].toLowerCase())

      const setSelectOption = (index: number) => {
        if (optionRefs.current === null) return
        handleChangeSelect({
          selectValue: optionRefs.current[index]?.dataset.index as string,
          selectName: optionRefs.current[index]?.dataset.textcontent as string,
          selectId: optionRefs.current[index]?.dataset.id as string,
          disabled: false,
        })
      }

      switch (true) {
        case isTextExist !== -1:
          isOpenSelect && optionRefs.current[isTextExist]?.focus()
          !isOpenSelect && setSelectOption(isTextExist)
          break
        case isValidateString && (selectInputRef.current.length === 1 || sameLetters):
          if (!isOpenSelect) focusedIndex = optionRefs.current.findIndex((ref) => ref?.dataset?.isActive === 'true')
          for (let i = 1; i < optionRefs.current.length; i++) {
            const nextIndex = (focusedIndex + i) % optionRefs.current.length
            if (optionRefs.current[nextIndex]?.dataset.textcontent?.charAt(0).toLowerCase() === key.toLowerCase()) {
              isOpenSelect && optionRefs.current[nextIndex]?.focus()
              !isOpenSelect && setSelectOption(nextIndex)
              break
            }
          }
          break
        default:
          return
      }
    },
    [optionRefs, isOpenSelect, selectInputRef],
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent, child?: React.ReactElement) => {
      switch (e.key) {
        case ' ':
          e.preventDefault()
          if (child) {
            selectRef.current?.focus()
            handleChangeSelect({
              selectValue: child.props.value,
              selectName: child.props.children || child.props.label,
              selectId: child.props.id,
              disabled: false,
            })
          } else {
            handleFocusCurrentOption()
          }
          setIsOpenSelect((prev: boolean) => !prev)
          break
        case 'ArrowUp':
          e.preventDefault()
          arrowNavigateOptions(-1)
          break
        case 'ArrowDown':
          e.preventDefault()
          arrowNavigateOptions(1)
          break
        case 'Enter':
          e.preventDefault()
          break
        default:
          selectInputRef.current = selectInputRef.current + e.key
          wordNavigateOptions(e.key)
          setIsDebounce(true)
          break
      }
    },
    [arrowNavigateOptions, selectRef, selectInputRef.current],
  )

  return {
    handleKeyDown,
  }
}
