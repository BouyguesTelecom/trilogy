import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { RowProps, RowRef } from './RowProps'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const Row = React.forwardRef<RowRef, RowProps>(({ className, id, narrow, ...others }, ref) => {
  const classes = hashClass(clsx('row', narrow && is('narrow'), className))
  return <div ref={ref} id={id} className={classes} {...others} />
})

Row.displayName = ComponentName.Row
export default Row
