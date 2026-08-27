import * as React from 'react'
import clsx from 'clsx'
import { TagListProps, TagListRef } from '@/components/tag/list/TagListProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getJustifiedClassName } from '@/helpers/justifiable'
import { is } from '@/helpers/classify'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param id {string} Custom id attribute
 *  - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param marginless {boolean} delete margin
 * @param align {string} Alignment of the tags
 * @param testId {string} Test Id for Test Integration
 */
const TagList = React.forwardRef<TagListRef, TagListProps>(
  ({ className, id, align, marginless, testId, ...others }, ref) => {
    const { styled } = useTrilogyContext()

    return (
      <div
        data-testid={testId}
        ref={ref}
        id={id}
        className={hashClass(
          styled,
          clsx('tags', align && is(getJustifiedClassName(align)), marginless && is('marginless'), className),
        )}
        {...others}
      />
    )
  },
)

TagList.displayName = ComponentName.TagList
export default TagList
