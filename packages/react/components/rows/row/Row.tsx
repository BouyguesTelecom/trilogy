import * as React from 'react'
import { RowProps, RowRef } from './RowProps'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} Additional CSS Classes
 */
const Row = React.forwardRef<RowRef, RowProps>(({ className, id, narrow, ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('row', narrow && is('narrow'), className))
  return <div ref={ref} id={id} className={classes} {...others} />
})

Row.displayName = ComponentName.Row
export default Row
