import * as React from 'react'
import clsx from 'clsx'
import { TagListProps } from './TagListProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { is } from '@/services'
import { getJustifiedClassName } from '@/objects'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param marginless {boolean} delete margin
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TagList = ({ className, id, align, marginless, ...others }: TagListProps) => {
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      className={hashClass(
        styled,
        clsx('tags', align && is(getJustifiedClassName(align)), marginless && is('marginless'), className),
      )}
      {...others}
    />
  )
}
export default TagList
