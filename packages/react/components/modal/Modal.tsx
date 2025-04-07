import { ButtonType } from '@/components/button'
import { ModalProps, ModalRef } from '@/components/modal/ModalProps'
import { Title, TitleLevels, TitleMarkup } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import { accessibilityLabelButtonClose } from '@trilogy-ds/locales/lib/modal.json'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { useModal } from './hooks/useModal'

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
    { children, className, id, active, onClose, panel, size, hideCloseButton = false, trigger, title, ...others },
    ref,
  ): JSX.Element => {
    const { display, refModal, onKeyDown, refBtnModal, modalContentRef, handleClose } = useModal({
      active,
      onClose,
    })

    const modalGeneratedId = React.useId()
    const classes = hashClass(clsx('modal', display && is('active'), size && is(size), panel && is('panel'), className))

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
          onClick={
            handleClose
              ? (e) => {
                  if (!modalContentRef?.current?.contains(e.target as Node)) {
                    handleClose(onClose, e)
                  }
                }
              : undefined
          }
          {...others}
        >
          <div ref={modalContentRef} className={hashClass(clsx('modal-content'))}>
            <div className={hashClass(clsx('modal-header'))}>
              {hideCloseButton !== true && (
                <button
                  onClick={
                    handleClose
                      ? (e: React.MouseEvent) => {
                          handleClose(onClose, e)
                        }
                      : undefined
                  }
                  className={hashClass(clsx('modal-close', is('large')))}
                  type={ButtonType.BUTTON}
                >
                  <span className={hashClass(clsx('sr-only'))}>{accessibilityLabelButtonClose}</span>
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
