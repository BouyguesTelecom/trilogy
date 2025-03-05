import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { TagListProps, TagListRef } from './TagListProps'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param marginless {boolean} delete margin
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TagList = React.forwardRef<TagListRef, TagListProps>(({ className, id, align, marginless, ...others }, ref) => {
  return (
    <div
      ref={ref}
      id={id}
      className={hashClass(
        clsx('tags', align && is(getJustifiedClassName(align)), marginless && is('marginless'), className),
      )}
      {...others}
    />
  )
})

TagList.displayName = ComponentName.TagList
export default TagList
