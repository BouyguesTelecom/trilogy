import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context/TrilogyContext'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import { is } from '@/services/classify'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { ButtonListDirectionEnum } from '@/components/button/list/ButtonListEnum'
import { ButtonListRef, ButtonListWebProps } from '@/components/button/list/ButtonListProps'

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
const ButtonList = forwardRef<ButtonListRef, ButtonListWebProps>(
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
