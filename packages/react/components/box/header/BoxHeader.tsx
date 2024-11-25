import clsx from 'clsx'
import React from 'react'

import { BoxHeaderProps } from '@/components/box/header/BoxHeaderProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { Text } from '@/components/text'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param help {string} Box Header Help Sticker
 * @param variant {TrilogyColor} Box Header backgroundColor
 * @param others
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */

const BoxHeader = React.forwardRef(
  (
    { children, className, help, variant, testId, ...others }: BoxHeaderProps,
    ref: React.Ref<HTMLHeadElement>,
  ): JSX.Element => {
    const classes = hashClass(clsx('box-header', className, variant && has(getBackgroundClassName(variant))))

    return (
      <header data-testid={testId} className={classes} ref={ref} {...others}>
        {children && typeof children.valueOf() === 'string' ? <p>{children}</p> : children}
        {help && (
          <Text testId={testId && `${testId}-help`} className='box-header-help sticker is-small is-success'>
            {String(children)}
          </Text>
        )}
      </header>
    )
  },
)
BoxHeader.displayName = ComponentName.BoxHeader
export default BoxHeader
