import React from 'react'
import clsx from 'clsx'
import {InfoBlockActionProps} from './InfoBlockActionProps'
import {has} from '../../../services'
import {Button, ButtonVariant} from '../../button'
import {hashClass} from '../../../helpers'
import {useTrilogyContext} from '../../../context'

/**
 * Info Block Action
 * @param children {React.ReactNode} Button text content
 * @param onClick {Function} OnClick event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const InfoBlockAction = ({className, children, onClick, testId, ...others}: InfoBlockActionProps): JSX.Element => {
  const {styled} = useTrilogyContext()
  const classes = hashClass(styled, clsx('info-block-action', has('text-centered'), className))

  return (
    <div data-testid={testId} className={classes} {...others}>
      {children && typeof children.valueOf() === 'string' ? (
        <Button onClick={onClick} variant={ButtonVariant.PRIMARY}>
          {children}
        </Button>
      ) : (
        children
      )}
    </div>
  )
}

export default InfoBlockAction
