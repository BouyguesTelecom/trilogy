import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { StackProps, StackRef } from './StackProps'

const Stack = React.forwardRef<StackRef, StackProps>(({ className, id, gap, direction = 'column', ...others }, ref) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('stack', gap && has(`gap-${gap}`), direction && is(direction), className))

  return <div ref={ref} id={id} className={classes} {...others} />
})

Stack.displayName = ComponentName.Stack
export default Stack
