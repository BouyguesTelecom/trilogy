import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import SelectorItem from './item'
import { Text } from '../text'
import { SelectorProps } from './SelectorProps'
import { is } from '../../services/classify'
import { getAlignClassName } from '../../objects'

/**
 * Selector Component
 * @param children {ReactNode} Children for Selector
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled Selector
 * @param clipped {boolean} Remove the separator bar
 * @param align {Alignable} Horizontal Align
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth Selector
 */
const Selector = ({
  children,
  className,
  onClick,
  activeIndex,
  disabled,
  align,
  justify,
  ...others
}: SelectorProps): JSX.Element => {
  const [activateIndex, setActivateIndex] = useState<number>(activeIndex || 0)

  const classes = clsx('selector', align && is(getAlignClassName(align)), justify && is(justify), className)

  const isActive = (index: number, childPropsActive: React.ReactNode) => {
    if (typeof childPropsActive !== 'undefined' && !activateIndex) {
      return childPropsActive
    }
    if (index === activateIndex) {
      return true
    }
  }

  const toggleActive = (e: React.MouseEvent, index: number) => {
    if (disabled) {
      return false
    }
    setActivateIndex(index)
    if (onClick) {
      onClick(e)
    }
  }

  useEffect(() => {
    setActivateIndex(activateIndex)
  }, [activateIndex])

  return (
    <div className={classes} role='tablist' {...others}>
      <ul>
        {children &&
          Array.isArray(children) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children.map((child: any, index: number) => {
            const props = {
              active: Boolean(isActive(index, child.props.active)) || false,
              key: index,
              tabIndex: index,
              onClick: (event: React.MouseEvent) => {
                toggleActive(event, index)
                if (child) {
                  if (child.props.onClick) {
                    child.props.onClick(event)
                  }
                }
              },
            }
            return typeof child.valueOf() === 'string' ? (
              <SelectorItem active={props.active} onClick={(e: unknown) => onClick?.(e)}>
                <Text>{String(child)}</Text>
              </SelectorItem>
            ) : (
              React.cloneElement(child, props)
            )
          })}
      </ul>
    </div>
  )
}

export default Selector
