import { ButtonType } from '@/components/button'
import { Title, TitleLevels, TitleMarkup } from '@/components/title'
import { useTrilogyContext } from '@/context/index'
import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { ModalProps } from './ModalProps'

const modalGeneratedId = shortid.generate()

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param panel {boolean} Panel Side Modal
 * @param accessibilityLabel {string} Accessibility label
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 */
const Modal = ({
  children,
  className,
  id,
  accessibilityLabel = 'Close',
  active,
  onClose,
  panel,
  size,
  hideCloseButton = false,
  trigger,
  title,
  ...others
}: ModalProps): JSX.Element => {
  const modal = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()
  const refsActions = useRef<Array<HTMLButtonElement | null>>([])
  const refBtnModal = useRef<any>(null)
  const refModal = useRef<HTMLDivElement>(null)
  const [, setIndexFocusable] = useState(0)

  const handleClose = React.useCallback(
    (onCloseFunc: ClickEvent | undefined, e: OnClickEvent) => {
      setDisplay(false)
      refBtnModal.current && refBtnModal.current.focus()
      setIndexFocusable(0)
      if (onCloseFunc) onCloseFunc(e)
    },
    [refBtnModal.current],
  )

  const classes = React.useMemo(
    () => hashClass(styled, clsx('modal', display && is('active'), size && is(size), panel && is('panel'), className)),
    [display, panel, className, styled],
  )

  const onKeyDown = useCallback(
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

  useEffect(() => {
    display && refsActions.current[0] && refsActions.current[0].focus()
  }, [display, refsActions?.current.length])

  useEffect(() => {
    setDisplay((prev) => {
      if (prev) {
        refBtnModal.current && refBtnModal.current.focus()
        setIndexFocusable(0)
      }
      return active || false
    })
  }, [active])

  useEffect(() => {
    if (refModal.current) {
      const footer = refModal.current.querySelector('[data-modal-footer]')
      const getCTA = footer?.querySelectorAll('button')
      if (getCTA) getCTA.forEach((el, i) => (refsActions.current[i + 1] = el))
    }
  }, [refModal.current])

  return (
    <div onKeyDown={onKeyDown} ref={refModal}>
      {trigger && React.cloneElement(trigger as React.ReactElement, { ref: refBtnModal, 'aria-haspopup': 'dialog' })}
      <div
        id={id}
        className={classes}
        role='dialog'
        aria-labelledby={modalGeneratedId}
        aria-modal={true}
        onClick={(e) => {
          if (!modal?.current?.contains(e.target as Node)) {
            handleClose(onClose, e)
          }
        }}
        {...others}
      >
        <div ref={modal} className={hashClass(styled, clsx('modal-content'))}>
          <div className={hashClass(styled, clsx('modal-header'))}>
            {hideCloseButton !== true && (
              <button
                onClick={(e: React.MouseEvent) => {
                  handleClose(onClose, e)
                }}
                className={hashClass(styled, clsx('modal-close', is('large')))}
                type={ButtonType.BUTTON}
                ref={(el) => el && (refsActions.current[0] = el)}
              >
                {accessibilityLabel && <span className='sr-only'>{accessibilityLabel}</span>}
              </button>
            )}
            <Title id={modalGeneratedId} level={TitleLevels.THREE} markup={TitleMarkup.H1}>
              {title}
            </Title>
          </div>
          {children && children}
        </div>
      </div>
    </div>
  )
}

export default Modal
