import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has } from '@/helpers/classify'
import clsx from 'clsx'
import * as React from 'react'
import { BoxContentProps, BoxContentRef } from '@/components/box/content/BoxContentProps'
import { getBackgroundClassName } from "@/helpers/background";

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const BoxContent = React.forwardRef<BoxContentRef, BoxContentProps>(
  ({ children, className, id, backgroundColor, backgroundSrc, testId, ...others }, ref): JSX.Element => {
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
        data-testid={testId}
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
