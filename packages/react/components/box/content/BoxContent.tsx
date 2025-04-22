import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getBackgroundClassName } from '@/objects/atoms/Background'
import { has } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { BoxContentProps, BoxContentRef } from './BoxContentProps'

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param backgroundSrc {string} Source of background Image
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId test id
 */
const BoxContent = React.forwardRef<BoxContentRef, BoxContentProps>(
  ({ children, className, id, backgroundColor, backgroundSrc, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(
      styled,
      clsx(
        'box-content',
        backgroundColor && has(getBackgroundClassName(backgroundColor)),
        backgroundSrc && has('background'),
        className,
      ),
    )
    return (
      <div
        ref={ref}
        id={id}
        className={classes}
        {...(backgroundSrc && {
          style: {
            backgroundImage: `url(${backgroundSrc})`,
          },
        })}
        {...others}
      >
        {children}
      </div>
    )
  },
)

BoxContent.displayName = ComponentName.BoxContent
export default BoxContent
