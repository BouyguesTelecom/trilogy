import clsx from 'clsx'
import React from 'react'

import { BoxTableContainerProps } from '@/components/box/table-container/BoxTableContainerProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const BoxTableContainer = React.forwardRef(
  ({ className, testId, ...others }: BoxTableContainerProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    return (
      <div data-testid={testId} className={hashClass(clsx('box table-container', className))} ref={ref} {...others} />
    )
  },
)

BoxTableContainer.displayName = ComponentName.BoxTableContainer
export default BoxTableContainer
