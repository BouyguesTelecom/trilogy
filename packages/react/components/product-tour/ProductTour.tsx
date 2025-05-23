import React, { useEffect, useState } from 'react'
import { has, is } from '@/services'
import { ProductTourRef, ProductTourWebProps } from './ProductTourProps'
import { Icon, IconName, IconSize } from '../icon'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '../enumsComponentsName'

/**
 * Product Tour Component
 * @param children {React.ReactNode} Title child
 * @param active {boolean} Display component
 * @param arrowDirection {ArrowDirection} UP|BOTTOM||LEFT|RIGHT - Display arrow
 * @param arrowAlign {ArrowAlign} ONE_FIFTH|ONE_QUARTER|ONE_THRID|TWO_FIFTHS|THREE_FIFTHS|TWO_THIRDS|THREE_QUARTERS|FOUR_FIFTHS
 * @param closeable {boolean} Display close icon
 * @param avatarSrc {string} Display avatar if source
 * @param avatarDirection {AvatarDirection} LEFT|RIGHT
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional css classes
 */
const ProductTour = React.forwardRef<ProductTourRef, ProductTourWebProps>(({
  children,
  className,
  id,
  active,
  arrowDirection,
  arrowAlign,
  closeable,
  avatarSrc,
  avatarDirection,
  ...others
}, ref): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  const classes = hashClass(
    styled,
    clsx('product-tour', display && is('active'), avatarDirection && has(`icon-${avatarDirection}`), className),
  )

  return (
    <div ref={ref} id={id} className={classes} {...others}>
      {arrowDirection && (
        <div className={hashClass(styled, clsx('arrow', is(arrowDirection), arrowAlign && is(arrowAlign)))} />
      )}
      {avatarSrc && (
        <span className={hashClass(styled, clsx('icon', is('medium')))}>
          <img className={hashClass(styled, clsx(is('rounded')))} src={avatarSrc} />
        </span>
      )}
      {closeable && (
        <div style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)}>
          <Icon size={IconSize.SMALL} name={IconName.TIMES} className='close' />
        </div>
      )}
      <div className={hashClass(styled, clsx('product-tour-content'))}>{children}</div>
    </div>
  )
})

ProductTour.displayName = ComponentName.ProductTour
export default ProductTour
