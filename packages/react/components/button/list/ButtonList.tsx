import * as React from 'react'
import { ButtonListWebProps } from './ButtonListProps'
import { is } from '@/services'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'
import { getJustifiedClassName } from '@/objects'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 */

const ButtonList = ({ className, id, align, direction = 'row', ...others }: ButtonListWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <div
      id={id}
      className={hashClass(
        styled,
        clsx('buttons', className, align && is(getJustifiedClassName(align)), direction === 'column' && 'is-vertical'),
      )}
      {...others}
    />
  )
}

export default ButtonList
