import { ButtonType } from '@/components/button'
import { ModalProps, ModalRef } from '@/components/modal/ModalProps'
import { useModal } from '@/components/modal/hooks/useModal'
import { Title, TitleLevels, TitleMarkup } from '@/components/title'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { ComponentName } from '../enumsComponentsName'

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
      panel,
      size,
      hideCloseButton = false,
      trigger,
      title,
      ...others
    },
    ref,
  ): JSX.Element => {
    const modalGeneratedId = React.useId()
    const { display, refModal, onKeyDown, handleClickModal, modal, refBtnModal, buttonRef, handleCloseModal } =
      useModal({
        active,
        onClose,
      })

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
          onClick={handleClickModal}
          {...others}
        >
          <div ref={modal} className={hashClass(clsx('modal-content'))}>
            <div className={hashClass(clsx('modal-header'))}>
              {hideCloseButton !== true && (
                <button
                  onClick={handleCloseModal}
                  className={hashClass(clsx('modal-close', is('large')))}
                  type={ButtonType.BUTTON}
                  ref={buttonRef}
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
  },
)

Modal.displayName = ComponentName.Modal

export default Modal
