import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import React from 'react'

interface IProps {
  active?: boolean
  onClose?: ClickEvent
}

export const useModal = ({ active, onClose }: IProps) => {
  try {
    const modalContentRef = React.useRef<HTMLDivElement>(null)
    const [display, setDisplay] = React.useState<boolean>(active || false)
    const refBtnModal = React.useRef<any>(null)
    const refModal = React.useRef<HTMLDivElement>(null)
    const focusableElementsRef = React.useRef<NodeListOf<HTMLElement> | null>(null)
    const currentFocusIndexRef = React.useRef<number>(0)

    const handleClose = React.useCallback(
      (onCloseFunc: ClickEvent | undefined, e: OnClickEvent) => {
        setDisplay(false)
        refBtnModal.current && refBtnModal.current.focus()
        if (onCloseFunc) onCloseFunc(e)
      },
      [refBtnModal.current],
    )

    const onKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (display && e.key === 'Tab') {
          e.preventDefault()
          if (focusableElementsRef.current) {
            const currentIndex = currentFocusIndexRef.current
            const offset = e.shiftKey ? -1 : 1

            const nextIndex =
              (currentIndex + offset + focusableElementsRef.current.length) % focusableElementsRef.current.length

            currentFocusIndexRef.current = nextIndex
            focusableElementsRef.current[nextIndex].focus()
          }
        }

        if (display && e.key === 'Escape') {
          e.preventDefault()
          setDisplay(false)
          refBtnModal.current && refBtnModal.current.focus()
          currentFocusIndexRef.current = 0
          onClose && onClose()
        }
      },
      [display, focusableElementsRef, currentFocusIndexRef, refBtnModal, onClose],
    )
    React.useEffect(() => {
      setDisplay((prev) => {
        if (prev) {
          refBtnModal.current && refBtnModal.current.focus()
          currentFocusIndexRef.current = 0
        }
        return active || false
      })
    }, [active, currentFocusIndexRef, refBtnModal])

    React.useEffect(() => {
      display && focusableElementsRef.current && focusableElementsRef.current[0].focus()
    }, [display, focusableElementsRef])

    React.useEffect(() => {
      if (modalContentRef.current) {
        focusableElementsRef.current = modalContentRef.current.querySelectorAll(
          'button:not(:disabled), input:not(:disabled), a, select:not(:disabled), textarea:not(:disabled), details:not([aria-disabled="true"]) > summary',
        )
      }
    }, [modalContentRef, focusableElementsRef])

    return {
      display,
      onKeyDown,
      refModal,
      refBtnModal,
      modalContentRef,
      handleClose,
    }
  } catch {
    return { display: active || false }
  }
}
