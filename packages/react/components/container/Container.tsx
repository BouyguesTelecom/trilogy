import clsx from 'clsx'
import React from 'react'

import { ContainerProps, ContainerRef } from '@/components/container/ContainerProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Container Component
 * @param children {React.ReactNode}
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additional CSS Classes
 * @param medium {boolean} Set medium container
 * @param id {string} Set id attribute
 */
const Container = React.forwardRef<ContainerRef, ContainerProps>(
  ({ className, id, medium, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('container', medium && is('medium'), className))

    return <div ref={ref as React.RefObject<HTMLDivElement>} id={id} className={classes} {...others} />
  },
)

Container.displayName = ComponentName.Container
export default Container
