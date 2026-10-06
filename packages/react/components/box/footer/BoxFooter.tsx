import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { BoxFooterProps, BoxFooterRef } from './BoxFooterProps'

/**
 * Box Footer Component
 * @param children {ReactNode} Children
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const BoxFooter = forwardRef<BoxFooterRef, BoxFooterProps>(
  ({ className, children, backgroundColor, id, testId, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        data-testid={testId}
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
