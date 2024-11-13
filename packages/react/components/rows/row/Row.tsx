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
const Row = React.forwardRef((props: RowProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { className, id, narrow, ...others } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('row', narrow && is('narrow'), className))
  return <div id={id} ref={ref} className={classes} {...others} />
})

export default Row
