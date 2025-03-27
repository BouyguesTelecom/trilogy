import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import { is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ButtonListDirectionEnum } from './ButtonListEnum'
import { ButtonListRef, ButtonListWebProps } from './ButtonListProps'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param id
 * @param align
 * @param direction
 */
const ButtonList = React.forwardRef<ButtonListRef, ButtonListWebProps>(
  ({ className, id, align, direction, ...others }, ref): JSX.Element => {
    return (
      <div
        ref={ref}
        id={id}
        className={hashClass(
          clsx(
            'buttons',
            className,
            align && is(getJustifiedClassName(align)),
            direction === ButtonListDirectionEnum.COLUMN && is('vertical'),
          ),
        )}
        {...others}
      />
    )
  },
)

ButtonList.displayName = ComponentName.ButtonList
export default ButtonList
