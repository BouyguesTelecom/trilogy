import React, { useState } from 'react'
import SegmentControlItem from './item'
import { SegmentControlProps } from './SegmentControlProps'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'

/**
 * SegmentControl Component
 * @param children {ReactNode} Children for SegmentControl
 * @param onClick onClick event
 * @param activeIndex {number} default active SegmentControl index
 * @param disabled {boolean} disabled SegmentControl
 * - -------------- WEB PROPERTIES ---------------
 * @param className {string} Additionnal CSS Classes
 * - -------------- NATIVE PROPERTIES ---------------
 */
const SegmentControl = ({ className, id, onClick, children, activeIndex }: SegmentControlProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(styled, clsx('segmented-control', className))
  const [activateIndex, setActivateIndex] = useState<number>(activeIndex || 0)

  const isActive = (index: number, childPropsActive: React.ReactNode) => {
    if (typeof childPropsActive !== 'undefined' && !activateIndex) {
      return childPropsActive
    }
    if (index === activateIndex) {
      return true
    }
  }

  const toggleActive = (e: React.MouseEvent, index: number) => {
    setActivateIndex(index)
    if (onClick) onClick(e)
  }

  React.useEffect(() => {
    setActivateIndex(activateIndex)
  }, [activateIndex])

  return (
    <div id={id} className={classes}>
      {children &&
        Array.isArray(children) &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        children.map((child: any, index: number) => {
          const props = {
            active: Boolean(isActive(index, child.props.active)) || false,
            disabled: child.props.disabled,
            key: index,
            onClick: (event: React.MouseEvent) => {
              toggleActive(event, index)
              if (child) {
                if (child.props.onClick) {
                  child.props.onClick(event)
                }
              }
            },
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
}

export default SegmentControl
