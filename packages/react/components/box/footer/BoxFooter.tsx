import clsx from 'clsx'
import React from 'react'

import { BoxFooterProps } from '@/components/box/footer/BoxFooterProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Children
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const BoxFooter = (
  { className, children, backgroundColor, testId, ...others }: BoxFooterProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  return (
    <div
      ref={ref}
      data-testid={testId}
      className={hashClass(
        clsx('box-footer', backgroundColor && has(getBackgroundClassName(backgroundColor)), className),
      )}
      {...others}
    >
      {children}
    </div>
  )
}

export default React.forwardRef(BoxFooter)
