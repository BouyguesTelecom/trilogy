import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { getJustifiedClassName } from '@/objects/index'
import { is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'
import { TagListProps, TagListRef } from './TagListProps'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param marginless {boolean} delete margin
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const TagList = React.forwardRef<TagListRef, TagListProps>(({ className, id, align, marginless, ...others }, ref) => {
  const { styled } = useTrilogyContext()

  return (
    <div
      ref={ref}
      id={id}
      className={hashClass(
        styled,
        clsx('tags', align && is(getJustifiedClassName(align)), marginless && is('marginless'), className),
      )}
      {...others}
    />
  )
})

TagList.displayName = ComponentName.TagList
export default TagList
