import * as React from 'react'
import { RowProps, RowRef } from '@/components/rows/row/RowProps'
import { is } from '@/helpers/classify'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const Row = React.forwardRef<RowRef, RowProps>(({ className, id, narrow, testId, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('row', narrow && is('narrow'), className))
  return <div ref={ref} id={id} className={classes} data-testid={testId} {...others} />
})

Row.displayName = ComponentName.Row
export default Row
