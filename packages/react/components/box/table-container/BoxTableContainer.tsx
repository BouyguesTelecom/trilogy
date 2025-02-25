import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { BoxTableContainerProps, BoxTableContainerRef } from './BoxTableContainerProps'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const BoxTableContainer = React.forwardRef<BoxTableContainerRef, BoxTableContainerProps>(
  ({ className, testId, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        ref={ref}
        data-testid={testId}
        className={hashClass(styled, clsx('box table-container', className))}
        {...others}
      />
    )
  },
)
BoxTableContainer.displayName = ComponentName.BoxTableContainer
export default BoxTableContainer
