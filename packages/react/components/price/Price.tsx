import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { Alignable } from '@/objects'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { Text, TextMarkup } from '../text'
import { checkCents } from './PriceHelpers'
import { PriceProps, PriceRef } from './PriceProps'
import { PriceLevel } from './PriceEnum'
import { useMemo } from 'react'

/**
 * Price Component
 * @param amount {number} Amount for Price
 * @param mention {string} Mention for price ( (1)* )
 * @param period {string} Period for Price (mois)
 * @param hideCents {boolean} Display cents
 * @param level {PriceLevel} Price custom size
 * @param inverted {boolean} Inverted Price Color
 * @param children {React.ReactNode}
 * @param align {Alignable} Price alignement
 * @param accessibilityLabel {string} Accessibility label
 * @param overline {string} Price overline
 * @param oldAmount {boolean} old Amount Price
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * - --------------- NATIVE PROPERTIES ----------------------------------
 */
const Price = React.forwardRef<PriceRef, PriceProps>(
  (
    {
      className,
      id,
      amount,
      mention,
      period,
      hideCents = false,
      level = PriceLevel.ONE,
      inverted,
      align,
      accessibilityLabel,
      oldAmount,
      overline,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()

    const classes = hashClass(styled, clsx('price', inverted && is('inverted'), overline && has('suptitle'), className))

    const classesStrike = hashClass(
      styled,
      clsx('price', inverted && is('inverted'), oldAmount && 'strike', overline && has('suptitle'), className),
    )

    let amountComponent = null
    let oldAmountComponent = null

    const getAmountContent = useMemo(
      () => (amount: number, cents: string) =>
        (
          <>
            <Text markup={TextMarkup.SPAN}>{`${amount}`}</Text>
            <span className={hashClass(styled, clsx('price-details'))}>
              <span className={hashClass(styled, clsx('cents'))}>
                &nbsp;€{hideCents ? '' : cents}
                {mention && <sup>{mention}</sup>}
              </span>
              {period && <span className={hashClass(styled, clsx('period'))}>/{period}</span>}
            </span>
          </>
        ),
      [hideCents, mention, period, styled],
    )

    if (oldAmount !== undefined) {
      const wholeStrike = oldAmount < 0 ? Math.ceil(oldAmount) : Math.floor(oldAmount)

      const oldCents = checkCents(oldAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')
      const oldCentsDisplayed = (!hideCents && `€${oldCents}`) || '€'

      oldAmountComponent = (
        <span aria-hidden='true' className={classesStrike} {...others}>
          {getAmountContent(wholeStrike, oldCentsDisplayed)}
        </span>
      )
    }

    if (amount !== undefined) {
      const whole = amount < 0 ? Math.ceil(amount) : Math.floor(amount)

      const cents = checkCents(amount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')
      const centsDisplayed = (!hideCents && `€${cents}`) || '€'

      amountComponent = (
        <span aria-hidden='true' aria-label={accessibilityLabel} className={classes} {...others}>
          {getAmountContent(whole, centsDisplayed)}
        </span>
      )
    }

    return (
      <div
        ref={ref}
        id={id}
        className={hashClass(
          styled,
          clsx(
            'price-container',
            is(`level-${level}`),
            (align == Alignable.ALIGNED_START && is('justified-start')) ||
              (align == Alignable.ALIGNED_CENTER && is('justified-center')) ||
              (align == Alignable.ALIGNED_END && is('justified-end')) ||
              '',
          ),
        )}
      >
        {overline && <p className={hashClass(styled, clsx('overline'))}>{overline}</p>}
        {oldAmountComponent}
        {amountComponent}
        {accessibilityLabel && <p className={hashClass(styled, clsx('sr-only'))}>{accessibilityLabel}</p>}
      </div>
    )
  },
)

Price.displayName = ComponentName.Price
export default Price
