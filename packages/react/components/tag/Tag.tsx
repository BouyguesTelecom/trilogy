import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { Icon } from '../icon'
import { TagProps } from './TagProps'

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param inverted {boolean} Inverted tag
 * @param small {boolean} display small tag
 * @param iconName {IconName} display icon
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 **/
const Tag = ({ children, className, variant, inverted, small, iconName, testId, ...others }: TagProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const tagClassNames = hashClass(
    styled,
    clsx(
      'tag',

      variant && is(getColorClassName(variant as TrilogyColor | TrilogyColorValues)),
      inverted && is('inverted'),
      small && is('small'),
      className,
    ),
  )

  const tagIconClassNames = hashClass(
    styled,
    clsx(variant && is(getColorClassName(variant as TrilogyColor | TrilogyColorValues))),
  )

  return (
    <span data-testid={testId} className={tagClassNames} {...others}>
      {iconName && <Icon className={tagIconClassNames} name={iconName} />}
      {children}
    </span>
  )
}

export default Tag
