import clsx from 'clsx'
import React from 'react'

import { ComponentName } from '@/components/enumsComponentsName'
import { useSegmentControl } from '@/components/segment-control/hook/useSegmentControl'
import SegmentControlItem from '@/components/segment-control/item'
import { SegmentControlProps } from '@/components/segment-control/SegmentControlProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'

/**
 * SegmentControl Component
 * @param children {ReactNode} Children for SegmentControl
 * @param onClick onClick event
 * @param activeIndex {number} default active SegmentControl index
 * @param disabled {boolean} disabled SegmentControl
 * @param marginless {boolean} delete margin
 * - -------------- WEB PROPERTIES ---------------
 * @param className {string} Additionnal CSS Classes
 * - -------------- NATIVE PROPERTIES ---------------
 * @param inverted {boolean} invert color SegmentControl
 */
const SegmentControl = React.forwardRef(
  (
    { className, onClick, disabled, marginless, children, activeIndex }: SegmentControlProps,
    ref: React.Ref<HTMLDivElement>,
  ): JSX.Element => {
    const classes = hashClass(clsx('segmented-control', marginless && is('marginless'), className))
    const { activateIndex, handleClick } = useSegmentControl({ activeIndex, disabled, onClick })

    const isActive = (index: number, childPropsActive: React.ReactNode) => {
      if (typeof childPropsActive !== 'undefined' && !activateIndex) {
        return childPropsActive
      }
      if (index === activateIndex) {
        return true
      }
    }

    return (
      <div className={classes} ref={ref}>
        {children &&
          Array.isArray(children) &&
          children.map((child, index) => {
            const props = {
              active: Boolean(isActive(index, child.props.active)) || false,
              disabled: child.props.disabled,
              key: index,
              onClick: handleClick
                ? (e: React.MouseEvent<Element, MouseEvent>) => handleClick(e, index, child)
                : undefined,
            }

            return child && typeof child.valueOf() === 'string' ? (
              <SegmentControlItem
                disabled={props.disabled}
                active={props.active}
                key={props.key}
                onClick={(e: unknown) => onClick?.(e)}
              >
                {child}
              </SegmentControlItem>
            ) : (
              React.cloneElement(child, props)
            )
          })}
      </div>
    )
  },
)

SegmentControl.displayName = ComponentName.SegmentControl
export default SegmentControl
