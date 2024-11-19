import clsx from 'clsx'
import React from 'react'

import { ContainerProps } from '@/components/container/ContainerProps'
import { hashClass } from '@/helpers'
import { is } from '@/services/classify'

/**
 * Container Component
 * @param children {React.ReactNode}
 * @param medium {boolean} Set medium container
 * @param className {string} Additionnal CSS Classes
 */

const Container = ({ className, medium, ...others }: ContainerProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
  const classes = hashClass(clsx('container', medium && is('medium'), className))

  return <div className={classes} ref={ref} {...others} />
}

export default React.forwardRef(Container)
