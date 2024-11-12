import { IconStatus } from '@/components/icon/IconEnum'
import { IconProps } from '@/components/icon/IconProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getBackgroundClassName, getTextClassName, TrilogyColor } from '@/objects'
import { getStatusBackground, has, is } from '@/services/index'
import clsx from 'clsx'
import * as React from 'react'

const CircleIcon = ({ className, name, status, size, color, backgroundColor, testId }: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

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
    <span className={classes} data-testid={testId}>
      <i className={circledIconClasses} />
    </span>
  )
}

export default CircleIcon
