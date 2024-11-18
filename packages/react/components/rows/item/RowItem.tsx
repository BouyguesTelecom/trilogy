import clsx from 'clsx'
import React from 'react'

import { RowsItemProps } from '@/components/rows/item/RowItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const RowItem = ({ className, narrow, ...others }: RowsItemProps, ref: React.Ref<HTMLDivElement>) => {
  const classes = hashClass(clsx('row', narrow && is('narrow'), className))
  return <div ref={ref} className={classes} {...others} />
}

export default React.forwardRef(RowItem)
