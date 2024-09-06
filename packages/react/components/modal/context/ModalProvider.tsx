import { ClickEvent } from '@/events/OnClickEvent'
import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import shortid from 'shortid'
import ModalContext from './ModalContext'

interface IProps {
  children: ReactNode
  handleCloseModal?: ClickEvent
}

export const ModalProvider = ({ children, handleCloseModal }: IProps) => {
  const idDescription = useMemo(() => shortid.generate(), [])
  const idTitle = useMemo(() => shortid.generate(), [])
  const [, setIndexFocusable] = useState(0)
  const [visible, setVisible] = useState<boolean>(false)
  const [haveTitle, setHaveTitle] = useState<boolean>(false)

  const refsActions = useRef<Array<HTMLButtonElement | null>>([])
  const refBtnModal = useRef<any>(null)

  const pushActionRefs = useCallback(
    (index: number, element: HTMLButtonElement) => {
      refsActions.current[index] = element
    },
    [refsActions],
  )

  const tabNavigate = (event: React.KeyboardEvent<HTMLDivElement>) => {
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

  const focusFirstCta = () => {
    refsActions.current[0] && refsActions.current[0].focus()
  }

  const focusTriggerModal = () => {
    refBtnModal.current && refBtnModal.current.focus()
  }

  const setTriggerModalRef = (el: any) => {
    refBtnModal.current = el
  }

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (visible) tabNavigate(event)
    },
    [visible],
  )

  useEffect(() => {
    visible && focusFirstCta()
  }, [visible])

  return (
    <ModalContext.Provider
      value={{
        idDescription,
        idTitle,
        pushActionRefs,
        tabNavigate,
        focusFirstCta,
        focusTriggerModal,
        setTriggerModalRef,
        visible,
        setVisible,
        handleCloseModal,
        onKeyDown,
        haveTitle,
        setHaveTitle,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
