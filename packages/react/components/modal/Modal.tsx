import { useTrilogyContext } from '@/context/index'
import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { ModalProps } from './ModalProps'
import { ButtonType } from '@/components/button'

const idTitle = shortid.generate()

/**
 * Modal Component
 * @param active {boolean} Activated Modal
 * @param title {string} Title Modal
 * @param content {string} Content text for modal
 * @param triggerContent {string} Trigger custom element
 * @param iconName IconName for icon title
 * @param iconColor IconColor for icon title
 * @param ctaCancelOnClick {Function} function for cancel button (appear when set)
 * @param ctaOnClick {Function} On Click Event CTA
 * @param onClose {Function} Additionnal close custom function
 * @param onOpen {Function} Additionnal open custom function
 * @param closeIcon {boolean} Display close icon for Modal
 * @param children {React.ReactNode}
 * @param ctaContent {string} Content cta
 * @param fullwidth {boolean} Fullwidth Modal
 * @param disableHandlingClickOutside {boolean} Disable the handling on outside click event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param contentClassNames {string} Additionnal CSS Classes for modal content
 * @param triggerMarkup {ModalMarkup} h1|h2|h3|h4|h5|h6|p|span|div|button|a
 * @param triggerClassNames {string} Additionnal CSS Classes for trigger element
 * @param panel {boolean} Panel Side Modal
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test id
 * @param ctaCancelContent {string} content of button close
 * @param footer {React.ReactNode}
 * @param footerClassNames {string} Additionnal CSS Classes for footer
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param bottom {boolean} If bottom
 * @param swipable {boolean} Swipable Native Modal
 */
const Modal = ({
  children,
  className,
  accessibilityLabel = 'Close',
  active,
  onClose,
  onOpen,
  panel,
  size,
  hideCloseButton = false,
  trigger,
  disableHandlingClickOutside = false,
  ...others
}: ModalProps): JSX.Element => {
  const modal = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()
  const refsActions = useRef<Array<HTMLButtonElement | null>>([])
  const refBtnModal = useRef<any>(null)
  const [, setIndexFocusable] = useState(0)

  const handleClickOutside = (e: Event) => {
    if (modal?.current?.contains(e.target as Node)) {
      return
    } else {
      handleClose(onClose, e)
    }
  }

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  useEffect(() => {
    display && refsActions.current[0] && refsActions.current[0].focus()
  }, [display, refsActions?.current.length])

  useEffect(() => {
    if (display && !disableHandlingClickOutside) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [display, disableHandlingClickOutside])

  const classes = React.useMemo(
    () => hashClass(styled, clsx('modal', display && is('active'), size && is(size), panel && is('panel'), className)),
    [display, panel, className, styled],
  )

  function handleClose(onCloseFunc: ClickEvent | undefined, e: OnClickEvent) {
    setDisplay(false)
    refBtnModal.current && refBtnModal.current.focus()
    if (onCloseFunc) {
      onCloseFunc(e)
    }
  }

  function handleOpen(onOpenFunc: ClickEvent | undefined, e: OnClickEvent) {
    setDisplay(true)
    if (onOpenFunc) {
      onOpenFunc(e)
    }
  }

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
      }
    },
    [refsActions.current.length, display],
  )

  return (
    <div onKeyDown={onKeyDown}>
      {trigger && React.cloneElement(trigger as React.ReactElement, { ref: refBtnModal })}
      <div className={classes} role='dialog' aria-modal={display ? 'true' : undefined} {...others}>
        <div ref={modal} className='modal-content'>
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
          {children && children}
        </div>
      </div>
    </div>
  )
}

export default Modal
