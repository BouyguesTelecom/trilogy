import { hashClass } from '@/helpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { RowProps } from './RowProps'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const Row = ({ className, id, narrow, ...others }: RowProps) => {
  const classes = hashClass(clsx('row', narrow && is('narrow'), className))
  return <div id={id} className={classes} {...others} />
}

export default Row
