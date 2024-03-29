import React from 'react'
import { OptionsProps } from './OptionsProps'
import { is } from '../../services'
import { hashClass } from '../../helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context'

/**
 * Options Component
 * @param className {string} Additionnal CSS Classes
 * @param inverted {boolean} Inverted options
 * @param children {React.ReactNode}
 */
const Options = ({ className, inverted, testId, ...others }: OptionsProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('options', inverted && is('inverted'), className))
  return <div data-testid={testId} className={classes} {...others} />
}

export default Options
