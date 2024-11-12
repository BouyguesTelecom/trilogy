import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useState } from 'react'
import SegmentControlItem from './item'
import { SegmentControlProps } from './SegmentControlProps'

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
const SegmentControl = ({
  className,
  onClick,
  disabled,
  marginless,
  children,
  activeIndex,
}: SegmentControlProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(clsx('segmented-control', marginless && is('marginless'), className))
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
    if (disabled) return false
    setActivateIndex(index)
    if (onClick) onClick(e)
  }

  React.useEffect(() => {
    setActivateIndex(activateIndex)
  }, [activateIndex])

  return (
    <div className={classes}>
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
