import * as React from 'react'
import { BoxFooterProps } from './BoxFooterProps'
import { getBackgroundClassName } from '@/objects'
import { has } from '@/services/classify'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

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
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      className={hashClass(
        styled,
        clsx('box-footer', backgroundColor && has(getBackgroundClassName(backgroundColor)), className),
      )}
      {...others}
    >
      {children}
    </div>
  )
}

export default BoxFooter
