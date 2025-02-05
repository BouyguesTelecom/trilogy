import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import React from 'react'

interface IProps {
  active?: boolean
  onClose?: ClickEvent
}

export const useModal = ({ active, onClose }: IProps) => {
  try {
    const modal = React.useRef<HTMLDivElement>(null)
    const [display, setDisplay] = React.useState<boolean>(active || false)

    const refsActions = React.useRef<Array<HTMLButtonElement | null>>([])
    const refBtnModal = React.useRef<any>(null)
    const refModal = React.useRef<HTMLDivElement>(null)
    const [, setIndexFocusable] = React.useState(0)

    const handleClose = React.useCallback(
      (onCloseFunc: ClickEvent | undefined, e: OnClickEvent) => {
        setDisplay(false)
        refBtnModal.current && refBtnModal.current.focus()
        setIndexFocusable(0)
        if (onCloseFunc) onCloseFunc(e)
      },
      [refBtnModal.current],
    )

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
          if (key === 'Escape') {
            event.preventDefault()
            setDisplay(false)
            refBtnModal.current && refBtnModal.current.focus()
            setIndexFocusable(0)
            onClose && onClose()
          }
        }
      },
      [refsActions.current.length, display],
    )

    const handleClickModal = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!modal?.current?.contains(e.target as Node)) {
          handleClose(onClose, e)
        }
      },
      [modal, handleClose],
    )

    const handleCloseModal = React.useCallback(
      (e: React.MouseEvent) => {
        handleClose(onClose, e)
      },
      [handleClose, onClose],
    )

    const buttonRef = React.useCallback(
      (el: HTMLButtonElement | null) => el && refsActions && (refsActions.current[0] = el),
      [],
    )

    React.useEffect(() => {
      display && refsActions.current[0] && refsActions.current[0].focus()
    }, [display, refsActions?.current.length])

    React.useEffect(() => {
      setDisplay((prev) => {
        if (prev) {
          refBtnModal.current && refBtnModal.current.focus()
          setIndexFocusable(0)
        }
        return active || false
      })
    }, [active])

    React.useEffect(() => {
      if (refModal.current) {
        const footer = refModal.current.querySelector('[data-modal-footer]')
        const getCTA = footer?.querySelectorAll('button')
        if (getCTA) getCTA.forEach((el, i) => (refsActions.current[i + 1] = el))
      }
    }, [refModal.current])

    return {
      modal,
      display,
      onKeyDown,
      handleClickModal,
      refModal,
      refBtnModal,
      handleCloseModal,
      buttonRef,
    }
  } catch {
    return { display: active || false }
  }
}
