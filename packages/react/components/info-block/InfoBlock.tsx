import React from 'react'
import clsx from 'clsx'
import { Box, BoxContent } from '../box'
import { InfoBlockProps } from './InfoBlockProps'
import { hashClass } from '../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../context/index'

/**
 * Info Block Component
 * @param children {React.ReactNode} Children for Info Block
 * @param boxed {boolean} Boxed block
 * @param onClick {Function} OnClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const InfoBlock = ({ className, boxed, children, onClick, testId, ...others }: InfoBlockProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  if (boxed) {
    return (
      <Box onClick={onClick && onClick}>
        <BoxContent>
          <div className={hashClass(styled, clsx('info-block', className))} {...others}>
            {children}
          </div>
        </BoxContent>
      </Box>
    )
  }

  return (
    <div data-testid={testId} style={{ padding: '2.5rem' }}>
      <div onClick={onClick && onClick} className={clsx('info-block', className)} {...others}>
        {children}
      </div>
    </div>
  )
}

export default InfoBlock
