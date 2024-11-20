import React from 'react'

import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'

interface IParams {
  active?: boolean
  onClose?: ClickEvent
  disableHandlingClickOutside?: boolean
}

export const useModal = ({ active, onClose, disableHandlingClickOutside }: IParams) => {
  try {
    const modal = React.useRef<HTMLDivElement>(null)
    const [display, setDisplay] = React.useState<boolean>(active || false)
    const refsActions = React.useRef<Array<HTMLButtonElement | null>>([])
    const refBtnModal = React.useRef<any>(null)
    const [, setIndexFocusable] = React.useState(0)

    const handleClose = React.useCallback(
      (onCloseFunc: ClickEvent | undefined, e: OnClickEvent) => {
        setDisplay(false)
        refBtnModal.current && refBtnModal.current.focus()
        if (onCloseFunc) onCloseFunc(e)
      },
      [refBtnModal],
    )

    const handleOpen = React.useCallback((onOpenFunc: ClickEvent | undefined, e: OnClickEvent) => {
      setDisplay(true)
      if (onOpenFunc) onOpenFunc(e)
    }, [])

    const handleClickOutside = React.useCallback(
      (e: Event) => {
        if (modal?.current?.contains(e.target as Node)) return
        handleClose(onClose, e)
      },
      [handleClose, modal, onClose],
    )

    React.useEffect(() => {
      setDisplay(active || false)
    }, [active])

    React.useEffect(() => {
      display && refsActions.current[0] && refsActions.current[0].focus()
    }, [display, refsActions?.current.length])

    React.useEffect(() => {
      if (display && !disableHandlingClickOutside) {
        document.addEventListener('mousedown', handleClickOutside)
      } else {
        document.removeEventListener('mousedown', handleClickOutside)
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [display, disableHandlingClickOutside])

    const onKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (display && refsActions.current) {
          const refs = refsActions.current.filter((ref) => ref)
          const { key } = event
          if (key === 'Tab') {
            event.preventDefault()
            setIndexFocusable((prev) => {
              const nextIndex = (prev + 1) % refs.length
              refs[nextIndex] && refs[nextIndex]?.focus()
              return nextIndex
            })
          }
        }
      },
      [refsActions.current.length, display],
    )

    return {
      onKeyDown,
      display,
      refBtnModal,
      modal,
      refsActions,
      handleClose,
      handleOpen,
    }
  } catch {
    return {
      display: active,
    }
  }
}
