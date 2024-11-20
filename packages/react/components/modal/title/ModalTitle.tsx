import clsx from 'clsx'
import React from 'react'

import TextIcon from '@/components/icon/text/TextIcon'
import { ModalTitleProps } from '@/components/modal/title/ModalTitleProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Modal Title Component
 * @param children {string}
 * @param iconName {IconName} IconName for icon title
 * @param iconColor {IconColor} IconColor for icon title
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 */
const ModalTitle = ({ children, className, iconColor, iconName, ...others }: ModalTitleProps): JSX.Element => {
  const { textId } = others as any

  return (
    <div className={hashClass(clsx('modal-title', className))}>
      {iconName ? (
        <TextIcon
          markup='p'
          color={iconColor}
          size={'large'}
          name={iconName}
          content={children}
          position='up'
          textId={textId}
          textAriaLevel={1}
          textRole='heading'
        />
      ) : (
        children
      )}
    </div>
  )
}

export default ModalTitle
