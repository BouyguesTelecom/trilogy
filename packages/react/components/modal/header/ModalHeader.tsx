import { ButtonType } from '@/components/button/ButtonEnum'
import { useTrilogyContext } from '@/context'
import { OnClickEvent } from '@/events/OnClickEvent'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import ModalContext from '../context'
import ModalTitle from '../title/ModalTitle'
import { ModalHeaderProps } from './ModalHeaderProps'

/**
 * Modal Title Component
 * @param children {React.ReactNode}
 * @param className {string}
 */
const ModalHeader = ({ title, iconName, iconColor }: ModalHeaderProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const { pushActionRefs, handleCloseModal, setVisible, focusTriggerModal } = React.useContext(ModalContext)

  if (!title && !iconName) return <></>

  function handleClose(e: OnClickEvent) {
    setVisible(false)
    focusTriggerModal()
    if (handleCloseModal) handleCloseModal(e)
  }

  return (
    <div className={hashClass(styled, clsx('modal-header'))}>
      <button
        onClick={(e: React.MouseEvent) => {
          handleClose(e)
        }}
        className={hashClass(styled, clsx('modal-close', is('large')))}
        type={ButtonType.BUTTON}
        ref={(el) => el && pushActionRefs(0, el)}
      >
        <span className='sr-only'>Fermer</span>
      </button>

      {(title || iconName) && (
        <ModalTitle iconColor={iconColor} iconName={iconName}>
          {title}
        </ModalTitle>
      )}
    </div>
  )
}

export default ModalHeader
