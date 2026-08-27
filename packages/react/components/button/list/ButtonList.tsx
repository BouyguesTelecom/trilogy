import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/helpers/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ButtonListDirectionEnum } from '@/components/button/list/ButtonListEnum'
import { ButtonListRef, ButtonListWebProps } from '@/components/button/list/ButtonListProps'
import { getJustifiedClassName } from '@/helpers/justifiable'

/**
 * Button List Component
 * @param children {ReactNode} ButtonList children
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param align {JustifiedAlign} Justified align
 * @param direction {ButtonListDirectionEnum} Button list direction
 * @param className {string} Additional CSS Classes
 */
const ButtonList = React.forwardRef<ButtonListRef, ButtonListWebProps>(
  ({ className, id, align, direction, testId, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()

    return (
      <div
        data-testid={testId}
        ref={ref}
        id={id}
        className={hashClass(
          styled,
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
