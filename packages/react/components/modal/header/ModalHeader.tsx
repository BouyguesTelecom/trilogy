import { ButtonType } from '@/components/button/ButtonEnum'
import { useTrilogyContext } from '@/context'
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
const ModalHeader = ({ closeIcon, title, iconName, handleClose, iconColor }: ModalHeaderProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  const { idTitle } = React.useContext(ModalContext)

  return (
    <>
      {closeIcon && (
        <button
          onClick={handleClose}
          className={hashClass(styled, clsx('modal-close', is('large')))}
          type={ButtonType.BUTTON}
          ref={(el) => console.log(el)}
        >
          <span className='sr-only'>Fermer</span>
        </button>
      )}
      {(title || iconName) && (
        <ModalTitle iconColor={iconColor} iconName={iconName} {...{ textId: idTitle }}>
          {title}
        </ModalTitle>
      )}
    </>
  )
}

export default ModalHeader
