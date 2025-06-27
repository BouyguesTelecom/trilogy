import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects'
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
    return (
      <div
        ref={ref}
        id={id}
        className={hashClass(
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
