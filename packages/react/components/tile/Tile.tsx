import React from 'react'
import clsx from 'clsx'
import { Text } from '../text'
import { TileProps } from './TileProps'
import { TileMarkup } from './TileEnum'
import { is } from '../../services'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'

/**
 * Tile Component
 * @param children {ReactNode} Tile Children
 * @param className {string} Additionnal CSS Classes
 * @param onClick {Function} onClick Event
 * @param to {string} link to url
 * @param ancestor {boolean} Tile is an ancestor
 * @param child {boolean} Tile is a child
 * @param parent {boolean} Tile is a parent
 * @param vertical {boolean} Tile is vertical
 * @param markup {TileMarkup} HTML element : div|a
 * @param routerLink Custom Router Link as props
 */
const Tile = ({
  children,
  className,
  ancestor,
  child,
  markup = TileMarkup.DIV,
  onClick,
  to,
  parent,
  vertical,
  routerLink,
  testId,
  ...others
}: TileProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'tile',
      ancestor && is('ancestor'),
      child && is('child'),
      parent && is('parent'),
      vertical && is('vertical'),
      className,
    ),
  )

  const Tag = markup

  const content: React.ReactNode = Array.isArray(children) ? (
    children.map((child: React.ReactNode, index: number) => {
      return child && typeof child.valueOf() === 'string' ? <Text key={index}>{String(child)}</Text> : child
    })
  ) : children && typeof children.valueOf() === 'string' ? (
    <Text>{String(children)}</Text>
  ) : (
    children
  )

  if (routerLink && to) {
    const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
    return (
      <RouterLink className={classes} onClick={onClick} to={to} {...others}>
        {content}
      </RouterLink>
    )
  }
  return (
    <Tag data-testid={testId} className={classes} {...others} onClick={onClick}>
      {content}
    </Tag>
  )
}

export default Tile
