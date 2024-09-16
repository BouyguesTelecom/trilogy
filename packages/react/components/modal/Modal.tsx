import { ButtonList, ButtonType } from '@/components/button'
import { Text } from '@/components/text'
import { useTrilogyContext } from '@/context/index'
import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import ModalFooter from './footer/ModalFooter'
import { ModalMarkup, ModalMarkupValues } from './ModalEnum'
import { ModalProps } from './ModalProps'
import ModalTitle from './title/ModalTitle'

const idDescription = shortid.generate()
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
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param bottom {boolean} If bottom
 * @param swipable {boolean} Swipable Native Modal
 */
const Modal = ({
  children,
  className,
  contentClassNames,
  active,
  title,
  content,
  triggerMarkup,
  triggerContent,
  triggerClassNames = 'button is-primary',
  ctaContent,
  ctaOnClick,
  onClose,
  onOpen,
  iconName,
  ctaCancelOnClick,
  closeIcon,
  iconColor,
  panel,
  footerClassNames,
  footer,
  fullwidth,
  disableHandlingClickOutside = false,
  testId,
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
    () =>
      hashClass(
        styled,
        clsx('modal', display && is('active'), panel && is('panel'), fullwidth && is('fullwidth'), className),
      ),
    [active, display, panel, className, styled],
  )
  const contentClasses = React.useMemo(
    () => hashClass(styled, clsx('modal-content', contentClassNames)),
    [contentClassNames, styled],
  )
  const footerClasses = React.useMemo(() => clsx('modal-footer', footerClassNames), [footerClassNames, styled])

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

  /**
   * key in Enum works only in TS or with number enum for JS
   * for string enum (as in this case) we need to use Object.values.includes for JS usage
   * string enum aren't reverse mapped so the first solution doesn't work
   */
  const isCorrectMarkup = (stringMarkup: ModalMarkup | ModalMarkupValues) => {
    if (stringMarkup in ModalMarkup || Object.values(ModalMarkup).includes(stringMarkup as ModalMarkup)) return true
  }
  const TriggerTag = React.useMemo(
    () => (triggerMarkup && isCorrectMarkup(triggerMarkup) ? triggerMarkup : 'button'),
    [triggerMarkup],
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
      }
    },
    [refsActions.current.length, display],
  )

  return (
    <div data-testid={testId} onKeyDown={onKeyDown}>
      {triggerContent && (
        <TriggerTag
          aria-haspopup='dialog'
          ref={refBtnModal}
          onClick={(e: React.MouseEvent) => {
            handleOpen(onOpen, e)
          }}
          className={hashClass(styled, clsx(triggerClassNames))}
        >
          {triggerContent}
        </TriggerTag>
      )}
      <div
        className={classes}
        role='dialog'
        aria-modal={display ? 'true' : undefined}
        aria-labelledby={title ? idTitle : undefined}
        {...others}
      >
        <div ref={modal} className={contentClasses}>
          {(closeIcon || title || iconName) && (
            <div className={hashClass(styled, clsx('modal-header'))}>
              {closeIcon && (
                <button
                  onClick={(e: React.MouseEvent) => {
                    handleClose(onClose, e)
                  }}
                  className={hashClass(styled, clsx('modal-close', is('large')))}
                  type={ButtonType.BUTTON}
                  ref={(el) => el && (refsActions.current[0] = el)}
                >
                  <span className='sr-only'> Fermer</span>
                </button>
              )}
              {(title || iconName) && (
                <ModalTitle iconColor={iconColor} iconName={iconName} {...{ textId: idTitle }}>
                  {title}
                </ModalTitle>
              )}
            </div>
          )}
          {(content || (children != null && children)) && (
            <div className={hashClass(styled, clsx('modal-body'))}>
              {content && typeof content === 'string' ? <Text {...{ id: idDescription }}>{content}</Text> : content}
              {children != null && children}
            </div>
          )}
          <ModalFooter className={footerClasses}>
            {((ctaOnClick != null || ctaCancelOnClick != null) && (
              <ButtonList centered className={is('flex')}>
                {ctaCancelOnClick && (
                  <button
                    onClick={(e) => {
                      handleClose(ctaCancelOnClick, e)
                    }}
                    className={hashClass(styled, clsx('button', is('secondary')))}
                    ref={(el) => (refsActions.current[1] = el)}
                  >
                    Annuler
                  </button>
                )}
                {ctaOnClick && (
                  <button
                    className={hashClass(styled, clsx('button', is('primary')))}
                    title={ctaContent}
                    ref={(el) => (refsActions.current[2] = el)}
                    onClick={ctaOnClick}
                  >
                    <span className='sr-only'> {ctaContent}</span>
                  </button>
                )}
              </ButtonList>
            )) ||
              footer}
          </ModalFooter>
        </div>
      </div>
    </div>
  )
}

export default Modal
