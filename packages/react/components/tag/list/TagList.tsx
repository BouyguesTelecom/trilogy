import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { TagListProps } from './TagListProps'

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
  const { className, gapless, centered, marginless, ...others } = props

  const { styled } = useTrilogyContext()

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
export default TagList
