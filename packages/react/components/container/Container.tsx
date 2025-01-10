import clsx from 'clsx'
import React from 'react'
import type { View } from 'react-native'

import { ContainerProps } from '@/components/container/ContainerProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * Container Component
 * @param children {React.ReactNode}
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className {string} Additionnal CSS Classes
 * @param medium {boolean} Set medium container
 * @param id {string} Set id attribute
 */
const Container = React.forwardRef(
  ({ className, id, medium, ...others }: ContainerProps, ref: React.Ref<HTMLDivElement | View>): JSX.Element => {
    const classes = hashClass(clsx('container', medium && is('medium'), className))

    return <div ref={ref as React.RefObject<HTMLDivElement>} id={id} className={classes} {...others} />
  },
)

Container.displayName = ComponentName.Container

export default Container
