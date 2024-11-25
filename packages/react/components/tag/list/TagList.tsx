import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { TagListProps } from '@/components/tag/list/TagListProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param centered {boolean} Center tags
 * @param gapless {boolean} Delete margins between tags
 * @param marginless {boolean} delete margin
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TagList = React.forwardRef((props: TagListProps, ref: React.Ref<HTMLElement>) => {
  const { className, gapless, centered, marginless, ...others } = props

  return (
    <span
      ref={ref}
      className={hashClass(
        clsx('tags', centered && is('centered'), gapless && is('gapless'), marginless && is('marginless'), className),
      )}
      {...others}
    />
  )
})

TagList.displayName = ComponentName.TagList
export default TagList
