import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { BoxContentProps } from './BoxContentProps'

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId test id
 */
const BoxContent = ({ children, className, id, backgroundColor, ...others }: BoxContentProps): JSX.Element => {
  const classes = hashClass(
    clsx('box-content', backgroundColor && has(getBackgroundClassName(backgroundColor)), className),
  )
  return (
    <div id={id} className={classes} {...others}>
      {children}
    </div>
  )
}

export default BoxContent
