import React from 'react'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import clsx from 'clsx'
import { MenuScrollingProps } from './MenuScrollingProps'
import { useTrilogyContext } from '../../../context/index'

const a11y = { role: 'scrolling-menu' }

/**
 * Menu Component
 *  @param className {string} Additionnal CSS Classes
 *  @param children {number} ReactNode} Dropdown Children
 *  @param pulled {string} left|right
 *  @param hasBackgroundWhite {boolean} If have white background
 */

const MenuScrolling = ({ className, hasBackgroundWhite, pulled, ...others }: MenuScrollingProps): JSX.Element => {
  /**
   * If no markup return p with default level 1
   */
  const { styled } = useTrilogyContext()
  const classes = ['menu', `is-pulled-${pulled ?? 'left'}`, className]
  if (hasBackgroundWhite) {
    classes.push('has-background-white')
  }
  return <aside className={hashClass(styled, clsx(classes))} {...a11y} {...others} />
}

export default MenuScrolling
