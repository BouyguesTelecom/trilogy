import clsx from 'clsx'
import React from 'react'

import { BoxContentProps } from '@/components/box/content/BoxContentProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId test id
 */
const BoxContent = (
  { children, className, backgroundColor, testId, ...others }: BoxContentProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const classes = hashClass(
    clsx('box-content', backgroundColor && has(getBackgroundClassName(backgroundColor)), className),
  )
  return (
    <div ref={ref} data-testid={testId} className={classes} {...others}>
      {children}
    </div>
  )
}

export default React.forwardRef(BoxContent)
