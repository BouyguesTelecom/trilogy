import React from 'react'
import { ToolbarWebProps } from './ToolbarProps'
import { has } from '../../services/classify'
import { getBackgroundClassName } from '../../objects'
import { hashClass } from '../../helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context'

/**
 * Toolbar Component
 * @param children {ReactNode}
 * @param className {string} Additionnal CSS Classes
 * @param background {BackgroundStyle} Custom background color
 */
const Toolbar = ({ className, background, ...others }: ToolbarWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx('toolbar', background && has(getBackgroundClassName(background)), className),
  )
  return <div className={classes} {...others} />
}

export default Toolbar
