import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { BoxFooterProps } from './BoxFooterProps'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Children
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param id
 * @param others
 */
const BoxFooter = ({ className, children, backgroundColor, id, ...others }: BoxFooterProps): JSX.Element => {
  return (
    <div
      id={id}
      className={hashClass(
        clsx('box-footer', backgroundColor && has(getBackgroundClassName(backgroundColor)), className),
      )}
      {...others}
    >
      {children}
    </div>
  )
}

export default BoxFooter
