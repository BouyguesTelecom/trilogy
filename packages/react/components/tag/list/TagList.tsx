import React from 'react'
import clsx from 'clsx'
import { TagListProps } from './TagListProps'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'
import { is } from '../../../services/classify'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param centered {boolean} Center tags
 * @param gapless {boolean} Delete margins between tags
 * @param marginless {boolean}
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TagList = ({ className, gapless, centered, marginless, ...others }: TagListProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <span
      className={hashClass(
        styled,
        clsx('tags', centered && is('centered'), gapless && is('gapless'), marginless && is('marginless'), className),
      )}
      {...others}
    />
  )
}
export default TagList
