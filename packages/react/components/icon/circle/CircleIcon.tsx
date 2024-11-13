import clsx from 'clsx'
import React from 'react'

import { IconStatus } from '@/components/icon/IconEnum'
import { IconProps } from '@/components/icon/IconProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName, getTextClassName } from '@/objects/atoms'
import { TrilogyColor } from '@/objects/facets/Color'
import { getStatusBackground, has, is } from '@/services/index'

const CircleIcon = (
  { className, name, status, size, color, backgroundColor, testId }: IconProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const background =
    (backgroundColor && has(getBackgroundClassName(backgroundColor))) ||
    getStatusBackground(status || '', IconStatus.INFO) ||
    has(getBackgroundClassName(TrilogyColor.MAIN))

  const classes = hashClass(
    clsx(
      'icon',
      color ? has(getTextClassName(color)) : has('text-white'),
      color ? is(color) : is(TrilogyColor.BACKGROUND),
      [is(`${size}`)],
      is('circled'),
      background,
      className,
    ),
  )

  const circledIconClasses = hashClass(clsx(name))

  return (
    <span className={classes} data-testid={testId} ref={ref}>
      <i className={circledIconClasses} />
    </span>
  )
}

export default React.forwardRef(CircleIcon)
