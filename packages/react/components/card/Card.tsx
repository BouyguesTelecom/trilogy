import { useTrilogyContext } from '@/context/TrilogyContext'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { is } from '@/services/classify'
import clsx from 'clsx'
import { createContext, CSSProperties, Ref, forwardRef } from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { CardProps, CardRef } from '@/components/card/CardProps'

export const CardContext = createContext({ horizontal: false })

/**
 * Card Component
 * @param flat {boolean} Adding border for Card content
 * @param horizontal {boolean} Horizontal Card orientation
 * @param floating {boolean} Floating card
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Loading card
 * @param reversed {boolean} Reversed card
 * @param active {boolean} Activated card
 * @param id {string} Custom id attribute
 * @param children {ReactNode} Card content
 * @param fullheight {boolean} Full height card
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param href {string} Link href (renders card as anchor)
 * @param testId {string} Test Id for Test Integration
 */
const Card = forwardRef<CardRef, CardProps>(
  (
    {
      className,
      id,
      flat,
      horizontal,
      floating,
      skeleton,
      onClick,
      reversed,
      href,
      fullheight,
      active,
      testId,
      radius,
      ...others
    },
    ref,
  ) => {
    const { styled } = useTrilogyContext()

    const hoverStyle: CSSProperties = {
      cursor: 'pointer',
    }

    const classes = hashClass(
      styled,
      clsx(
        'card',
        flat && !floating && is('flat'),
        horizontal && [is('horizontal'), is('vcentered')],
        floating && !flat && is('floating'),
        skeleton && is('loading'),
        reversed && is('reversed'),
        className,
        fullheight && is('fullheight'),
        active && is('active'),
        radius && `radius-${radius}`,
      ),
    )

    if (href) {
      return (
        <a
          data-testid={testId}
          ref={ref as Ref<HTMLAnchorElement>}
          id={id}
          href={href}
          onClick={(e) => {
            onClick?.(e)
            e.stopPropagation()
          }}
          {...others}
          className={classes}
        />
      )
    }

    return (
      <div
        data-testid={testId}
        ref={ref as Ref<HTMLDivElement>}
        id={id}
        onClick={onClick && onClick}
        className={classes}
        style={onClick && { ...hoverStyle }}
        {...others}
      />
    )
  },
)

Card.displayName = ComponentName.Card
export default Card
