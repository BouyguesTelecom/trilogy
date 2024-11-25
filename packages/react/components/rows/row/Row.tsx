import * as React from 'react'
import { RowProps } from './RowProps'
import { is } from '@/services/classify'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const Row = ({ className, id, narrow, ...others }: RowProps) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('row', narrow && is('narrow'), className))
  return <div id={id} className={classes} {...others} />
}

export default Row
