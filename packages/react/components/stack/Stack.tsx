import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { DirectionEnum } from '@/objects/facets/Direction'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import React from 'react'
import { StackMarkup, StackProps, StackRef } from './StackProps'

const isCorrectMarkup = (stringMarkup: string) => {
  return stringMarkup in StackMarkup || Object.values(StackMarkup).includes(stringMarkup as StackMarkup)
}

const Stack = React.forwardRef<StackRef, StackProps>(
  ({ className, id, gap, markup = 'div', direction, ...others }, ref) => {
    const Tag = (markup && isCorrectMarkup(markup) ? markup : 'p') as React.ElementType
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx('stack', gap && has(`gap-${gap}`), direction === DirectionEnum.COLUMN && is('vertical'), className),
    )

    return <Tag ref={ref} id={id} className={classes} {...others} />
  },
)

Stack.displayName = ComponentName.Stack
export default Stack
