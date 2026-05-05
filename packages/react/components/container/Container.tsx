import clsx from 'clsx'
import React from 'react'

import { ContainerProps, ContainerRef } from '@/components/container/ContainerProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Container Component
 * @param children {React.ReactNode} Container child elements
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param medium {boolean} Set medium container width
 */
const Container = React.forwardRef<ContainerRef, ContainerProps>(
  ({ className, id, medium, testId, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    const classes = hashClass(styled, clsx('container', medium && is('medium'), className))

    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} id={id} className={classes} data-testid={testId} {...others} />
    )
  },
)

Container.displayName = ComponentName.Container
export default Container
