import React from 'react'
import { IconProps } from '../IconProps'
import { IconStatus } from '../IconEnum'
import { getStatusBackground, has, is } from '../../../services/index'
import { getBackgroundClassName } from '../../../objects/atoms/Background'
import { getTextClassName } from '../../../objects/atoms/Text'
import { TrilogyColor } from '../../../objects/facets/Color'
import clsx from 'clsx'
import { hashClass } from '../../../helpers/hashClassesHelpers'
import { useTrilogyContext } from '../../../context/index'

const CircleIcon = ({ className, name, status, size, color, backgroundColor, testId }: IconProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const background =
    (backgroundColor && has(getBackgroundClassName(backgroundColor))) ||
    getStatusBackground(status || '', IconStatus.TERTIARY) ||
    has(getBackgroundClassName(TrilogyColor.TERTIARY))

  const classes = hashClass(
    styled,
    clsx(
      'icon',
      color ? has(getTextClassName(color)) : has('text-white'),
      color ? is(color) : is(TrilogyColor.WHITE),
      [is(`${size}`)],
      is('circled'),
      background,
      className,
    ),
  )

  const circledIconClasses = hashClass(styled, clsx(name))

  return (
    <span className={classes} data-testid={testId}>
      <i className={circledIconClasses} />
    </span>
  )
}

export default CircleIcon
