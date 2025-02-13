import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects'
import { is } from '@/services'
import clsx from 'clsx'
import * as React from 'react'
import { ButtonListWebProps } from './ButtonListProps'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 */

const ButtonList = ({ className, id, align, direction = 'row', ...others }: ButtonListWebProps): JSX.Element => {
  return (
    <div
      id={id}
      className={hashClass(
        clsx('buttons', className, align && is(getJustifiedClassName(align)), direction === 'column' && 'is-vertical'),
      )}
      {...others}
    />
  )
}

export default ButtonList
