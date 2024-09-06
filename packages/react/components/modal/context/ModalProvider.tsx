import React, { ReactNode, useCallback, useRef, useState } from 'react'
import shortid from 'shortid'
import ModalContext from './ModalContext'

interface IProps {
  children: ReactNode
}

export const ModalProvider = ({ children }: IProps) => {
  const [idDescription, setIdDescription] = useState(shortid.generate())
  const [idTitle, setIdTitle] = useState(shortid.generate())
  const [, setIndexFocusable] = useState(0)

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
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
