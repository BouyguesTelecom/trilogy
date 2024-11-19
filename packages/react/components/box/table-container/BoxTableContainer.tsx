import clsx from 'clsx'
import React from 'react'

import { BoxTableContainerProps } from '@/components/box/table-container/BoxTableContainerProps'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const BoxTableContainer = (
  { className, testId, ...others }: BoxTableContainerProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  return (
    <div data-testid={testId} className={hashClass(clsx('box table-container', className))} ref={ref} {...others} />
  )
}

export default React.forwardRef(BoxTableContainer)
