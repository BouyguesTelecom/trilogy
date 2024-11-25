import clsx from 'clsx'
import React from 'react'

import { ButtonListWebProps } from '@/components/button/list/ButtonListProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { has } from '@/services/classify'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param centered {boolean} Centered buttons
 * @param vertical {boolean} Verical buttons
 * @param isMobile {boolean} espect mobile screen
 */

const ButtonList = React.forwardRef(
  ({ className, centered, vertical, ...others }: ButtonListWebProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    return (
      <div
        ref={ref}
        className={hashClass(clsx('buttons', className, centered && has('text-centered'), vertical && 'is-vertical'))}
        {...others}
      />
    )
  },
)

ButtonList.displayName = ComponentName.ButtonList
export default ButtonList
