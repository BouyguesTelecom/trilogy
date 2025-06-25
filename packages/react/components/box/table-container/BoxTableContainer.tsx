import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { BoxTableContainerProps, BoxTableContainerRef } from './BoxTableContainerProps'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const BoxTableContainer = React.forwardRef<BoxTableContainerRef, BoxTableContainerProps>(
  ({ className, testId, ...others }, ref): JSX.Element => {
    return (
      <div ref={ref} data-testid={testId} className={hashClass(clsx('box table-container', className))} {...others} />
    )
  },
)
BoxTableContainer.displayName = ComponentName.BoxTableContainer
export default BoxTableContainer
