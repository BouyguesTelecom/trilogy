import { ButtonList } from '@/components/button'
import { Text } from '@/components/text'
import { useTrilogyContext } from '@/context/index'
import { ClickEvent, OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useContext, useEffect, useRef } from 'react'
import shortid from 'shortid'
import ModalContext from './context'
import { ModalProvider } from './context/ModalProvider'
import ModalFooter from './footer/ModalFooter'
import ModalHeader from './header/ModalHeader'
import { ModalMarkup, ModalMarkupValues } from './ModalEnum'
import { ModalProps } from './ModalProps'

const idModal = shortid.generate()

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
 * @param ariaLabelButtonClose {string} aria-label of button close
 * @param ariaLabelCta {string} aria-label of button action
 * @param ariaLabelButtonOpen {string} aria-label of open button modal
 * @param titleButtonOpen {string} title of open button modal
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param bottom {boolean} If bottom
 * @param swipable {boolean} Swipable Native Modal
 */
const ModalComponent = ({
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
  const { styled } = useTrilogyContext()

  const {
    pushActionRefs,
    setTriggerModalRef,
    focusTriggerModal,
    visible,
    setVisible,
    idDescription,
    idTitle,
    onKeyDown,
    haveTitle,
  } = useContext(ModalContext)

  const handleClickOutside = (e: Event) => {
    if (modal?.current?.contains(e.target as Node)) {
      return
    } else {
      handleClose(onClose, e)
    }
  }

  useEffect(() => {
    setVisible(active || false)
  }, [active])

  useEffect(() => {
    if (visible && !disableHandlingClickOutside) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible, disableHandlingClickOutside])

  const classes = React.useMemo(
    () =>
      hashClass(
        styled,
        clsx('modal', visible && is('active'), panel && is('panel'), fullwidth && is('fullwidth'), className),
      ),
    [active, visible, panel, className, styled],
  )
  const contentClasses = React.useMemo(
    () => hashClass(styled, clsx('modal-content', contentClassNames)),
    [contentClassNames, styled],
  )
  const footerClasses = React.useMemo(() => clsx('modal-footer', footerClassNames), [footerClassNames, styled])

  function handleClose(onCloseFunc: ClickEvent | undefined, e: OnClickEvent) {
    setVisible(false)
    focusTriggerModal()
    if (onCloseFunc) onCloseFunc(e)
  }

  function handleOpen(onOpenFunc: ClickEvent | undefined, e: OnClickEvent) {
    setVisible(true)
    if (onOpenFunc) onOpenFunc(e)
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

  return (
    <div data-testid={testId} onKeyDown={onKeyDown}>
      {triggerContent && (
        <TriggerTag
          aria-haspopup='dialog'
          ref={(el: any) => el && setTriggerModalRef(el)}
          onClick={(e: React.MouseEvent) => handleOpen(onOpen, e)}
          className={hashClass(styled, clsx(triggerClassNames))}
        >
          {triggerContent}
        </TriggerTag>
      )}
      <div
        className={classes}
        role='dialog'
        aria-modal={visible ? 'true' : undefined}
        aria-labelledby={haveTitle ? idTitle : undefined}
        {...others}
      >
        <div ref={modal} className={contentClasses}>
          <ModalHeader title={title} iconName={iconName} iconColor={iconColor} />

          {content && typeof content === 'string' ? <Text {...{ id: idDescription }}>{content}</Text> : content}
          {children != null && children}
          <ModalFooter className={footerClasses}>
            {((ctaOnClick != null || ctaCancelOnClick != null) && (
              <ButtonList centered className={is('flex')}>
                {ctaCancelOnClick && (
                  <button
                    onClick={(e) => handleClose(ctaCancelOnClick, e)}
                    className={hashClass(styled, clsx('button', is('secondary')))}
                    ref={(el) => el && pushActionRefs(1, el)}
                  >
                    Annuler
                  </button>
                )}
                {ctaOnClick && (
                  <button
                    className={hashClass(styled, clsx('button', is('primary')))}
                    title={ctaContent}
                    onClick={ctaOnClick}
                    ref={(el) => el && pushActionRefs(2, el)}
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

const Modal = (props: ModalProps) => {
  return (
    <ModalProvider handleCloseModal={props.onClose}>
      <ModalComponent {...props} />
    </ModalProvider>
  )
}

export default Modal
