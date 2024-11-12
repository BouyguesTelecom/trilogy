import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { has, is } from '@/services'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Icon, IconName, IconSize } from '../icon'
import { ProductTourWebProps } from './ProductTourProps'

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
 * @param className {string} Additionnal css classes
 */
const ProductTour = ({
  children,
  className,
  active,
  arrowDirection,
  arrowAlign,
  closeable,
  avatarSrc,
  avatarDirection,
  ...others
}: ProductTourWebProps): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(active || false)
  const { styled } = useTrilogyContext()

  useEffect(() => {
    setDisplay(active || false)
  }, [active])

  const classes = hashClass(
    clsx('product-tour', display && is('active'), avatarDirection && has(`icon-${avatarDirection}`), className),
  )

  return (
    <div className={classes} {...others}>
      {arrowDirection && <div className={hashClass(clsx('arrow', is(arrowDirection), arrowAlign && is(arrowAlign)))} />}
      {avatarSrc && (
        <span className={hashClass(clsx('icon', is('medium')))}>
          <img className={hashClass(clsx(is('rounded')))} src={avatarSrc} />
        </span>
      )}
      {closeable && (
        <div style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)}>
          <Icon size={IconSize.SMALL} name={IconName.TIMES} className='close' />
        </div>
      )}
      <div className={hashClass(clsx('product-tour-content'))}>{children}</div>
    </div>
  )
}

export default ProductTour
