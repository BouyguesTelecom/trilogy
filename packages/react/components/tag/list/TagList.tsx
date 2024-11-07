import * as React from 'react'
import clsx from 'clsx'
import { TagListProps } from './TagListProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { is } from '@/services'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param centered {boolean} Center tags
 * @param gapless {boolean} Delete margins between tags
 * @param marginless {boolean} delete margin
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TagList = React.forwardRef((props: TagListProps, ref: React.LegacyRef<HTMLElement>) => {
  const { className, id, gapless, centered, marginless, ...others } = props

  const { styled } = useTrilogyContext()

  return (
    <span
      id={id}
      ref={ref}
      className={hashClass(
        styled,
        clsx('tags', centered && is('centered'), gapless && is('gapless'), marginless && is('marginless'), className),
      )}
      {...others}
    />
  )
})
export default TagList
