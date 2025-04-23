import { ButtonType } from '@/components/button'
import { Title, TitleLevels, TitleMarkup } from '@/components/title'
import { useTrilogyContext } from '@/context/index'
import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import { accessibilityLabelButtonClose } from '@trilogy-ds/locales/lib/modal.json'
import clsx from 'clsx'
import React, { KeyboardEvent, useCallback, useEffect, useId, useRef, useState } from 'react'
import { ComponentName } from '../enumsComponentsName'
import { ModalProps, ModalRef } from './ModalProps'

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
const Modal = React.forwardRef<ModalRef, ModalProps>(
  (
    {
      children,
      className,
      id,
      accessibilityLabel = 'Close',
      active,
      onClose,
      unClosable,
      panel,
      size,
      hideCloseButton = false,
      trigger,
      title,
      ...others
    },
    ref,
  ): JSX.Element => {
    const modalContentRef = useRef<HTMLDivElement>(null)
    const [display, setDisplay] = useState<boolean>(active || false)
    const { styled } = useTrilogyContext()
    const refBtnModal = useRef<any>(null)
    const refModal = useRef<HTMLDivElement>(null)
    const modalGeneratedId = useId()
    const focusableElementsRef = useRef<NodeListOf<HTMLElement> | null>(null)
    const currentFocusIndexRef = useRef<number>(0)

    const handleClose = React.useCallback(
      (onCloseFunc: ClickEvent | undefined, e: OnClickEvent) => {
        if (!unClosable) {
          setDisplay(false)
          refBtnModal.current && refBtnModal.current.focus()
          if (onCloseFunc) onCloseFunc(e)
        }
      },
      [refBtnModal.current],
    )

    const classes = hashClass(
      styled,
      clsx('modal', display && is('active'), size && is(size), panel && is('panel'), className),
    )

    const onKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
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

        if (!unClosable && display && e.key === 'Escape') {
          e.preventDefault()
          setDisplay(false)
          refBtnModal.current && refBtnModal.current.focus()
          currentFocusIndexRef.current = 0
          onClose && onClose()
        }
      },
      [display, focusableElementsRef, currentFocusIndexRef, refBtnModal, onClose],
    )

    useEffect(() => {
      setDisplay((prev) => {
        if (prev) {
          refBtnModal.current && refBtnModal.current.focus()
          currentFocusIndexRef.current = 0
        }
        return active || false
      })
    }, [active, currentFocusIndexRef, refBtnModal])

    useEffect(() => {
      !hideCloseButton && display && focusableElementsRef.current && focusableElementsRef.current[0].focus()
    }, [hideCloseButton, display, focusableElementsRef])

    useEffect(() => {
      if (modalContentRef.current) {
        focusableElementsRef.current = modalContentRef.current.querySelectorAll(
          'button:not(:disabled), input:not(:disabled), a, select:not(:disabled), textarea:not(:disabled), details:not([aria-disabled="true"]) > summary',
        )
      }
    }, [modalContentRef, focusableElementsRef])

    return (
      <div onKeyDown={onKeyDown} ref={refModal}>
        {trigger && React.cloneElement(trigger as React.ReactElement, { ref: refBtnModal, 'aria-haspopup': 'dialog' })}
        <div
          ref={ref}
          id={id}
          className={classes}
          role='dialog'
          aria-labelledby={modalGeneratedId}
          aria-modal={true}
          onClick={(e) => {
            if (!modalContentRef?.current?.contains(e.target as Node)) {
              handleClose(onClose, e)
            }
          }}
          {...others}
        >
          <div ref={modalContentRef} className={hashClass(styled, clsx('modal-content'))}>
            <div className={hashClass(styled, clsx('modal-header'))}>
              {!hideCloseButton && (
                <button
                  onClick={(e: React.MouseEvent) => {
                    handleClose(onClose, e)
                  }}
                  className={hashClass(styled, clsx('modal-close', is('large')))}
                  type={ButtonType.BUTTON}
                >
                  <span className={hashClass(styled, clsx('sr-only'))}>{accessibilityLabelButtonClose}</span>
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
  },
)

Modal.displayName = ComponentName.Modal

export default Modal
