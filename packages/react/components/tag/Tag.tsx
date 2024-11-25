import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TagProps } from '@/components/tag/TagProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getColorClassName, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { is } from '@/services/classify'

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
const Tag = React.forwardRef(
  (
    { children, className, variant, inverted, small, iconName, testId, ...others }: TagProps,
    ref: React.Ref<HTMLSpanElement>,
  ): JSX.Element => {
    const tagClassNames = hashClass(
      clsx(
        'tag',
        variant && is(getColorClassName(variant as TrilogyColor | TrilogyColorValues)),
        inverted && is('inverted'),
        small && is('small'),
        className,
      ),
    )

    const tagIconClassNames = hashClass(
      clsx(variant && is(getColorClassName(variant as TrilogyColor | TrilogyColorValues))),
    )

    return (
      <span data-testid={testId} className={tagClassNames} {...others} ref={ref}>
        {iconName && <Icon className={tagIconClassNames} name={iconName} />}
        {children}
      </span>
    )
  },
)

Tag.displayName = ComponentName.Tag
export default Tag
