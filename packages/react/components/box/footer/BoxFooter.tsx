import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/index'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { BoxFooterProps, BoxFooterRef } from './BoxFooterProps'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Children
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id
 */
const BoxFooter = React.forwardRef<BoxFooterRef, BoxFooterProps>(
  ({ className, children, backgroundColor, id, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        ref={ref}
        id={id}
        className={hashClass(
          styled,
          clsx('box-footer', backgroundColor && has(getBackgroundClassName(backgroundColor)), className),
        )}
        {...others}
      >
        {children}
      </div>
    )
  },
)

BoxFooter.displayName = ComponentName.BoxFooter
export default BoxFooter
