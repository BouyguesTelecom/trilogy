import { ComponentName } from '@/components/enumsComponentsName'
import { useSegmentControl } from '@/components/segment-control/hooks/useSegmentControl'
import SegmentControlItem from '@/components/segment-control/item'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getJustifiedClassName } from '@/objects/facets/Justifiable'
import clsx from 'clsx'
import React from 'react'
import { SegmentControlProps, SegmentControlRef } from './SegmentControlProps'

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
const SegmentControl = React.forwardRef<SegmentControlRef, SegmentControlProps>(
  ({ className, id, onClick, children, activeIndex, align }, ref): JSX.Element => {
    const { activateIndex, handleClick } = useSegmentControl({ activeIndex, onClick })
    const classes = hashClass(clsx('segmented-control', align && getJustifiedClassName(align), className))

    const isActive = (index: number, childPropsActive: React.ReactNode) => {
      if (typeof childPropsActive !== 'undefined' && !activateIndex) {
        return childPropsActive
      }
      if (index === activateIndex) {
        return true
      }
    }

    return (
      <div ref={ref} id={id} className={classes}>
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
