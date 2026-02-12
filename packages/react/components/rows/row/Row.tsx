import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { RowProps, RowRef } from './RowProps'

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
