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
 * @param inline {boolean} Inline display Price
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
      level,
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
    const tagAmountComponent = null

    if (oldAmount !== undefined) {
      const isNegativeStrike = oldAmount && oldAmount < 0
      const absoluteAmountStrike = oldAmount && Math.abs(oldAmount)
      const absoluteWholeStrike = absoluteAmountStrike && Math.floor(absoluteAmountStrike)
      const wholeStrike = isNegativeStrike && absoluteWholeStrike ? -absoluteWholeStrike : absoluteWholeStrike

      let cents = checkCents(absoluteAmountStrike.toString().split(/[.,]/)[1]?.substring(0, 2) || '')
      cents = (cents && cents.length === 1 && `${cents}0`) || cents
      const centsDisplayed = (!hideCents && `€${cents}`) || '€'

      oldAmountComponent = (
        <span aria-hidden='true' className={classesStrike} {...others}>
          <Text markup={TextMarkup.SPAN}>{`${wholeStrike}`}</Text>
          <span className={hashClass(styled, clsx('price-details'))}>
            <span className={hashClass(styled, clsx('cents'))}>
              {centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
              {mention && <sup>{mention}</sup>}
            </span>
            {period && <span className={hashClass(styled, clsx('period'))}>/{period}</span>}
          </span>
        </span>
      )
    }

    if (amount !== undefined) {
      const isNegative = amount < 0
      const absoluteAmount = Math.abs(amount)
      const absoluteWhole = Math.floor(absoluteAmount)
      const whole = isNegative ? -absoluteWhole : absoluteWhole

      let cents = checkCents(absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')
      cents = (cents && cents.length === 1 && `${cents}0`) || cents
      const centsDisplayed = (!hideCents && `€${cents}`) || '€'

      amountComponent = (
        <span aria-hidden='true' aria-label={accessibilityLabel} className={classes} {...others}>
          <Text markup={TextMarkup.SPAN}>{`${whole}`}</Text>
          <span className={hashClass(styled, clsx('price-details'))}>
            <span className={hashClass(styled, clsx('cents'))}>
              {centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
              {mention && <sup>{mention}</sup>}
            </span>
            {period && <span className={hashClass(styled, clsx('period'))}>/{period}</span>}
          </span>
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
            is(`level-${level || '1'}`),
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
        {tagAmountComponent}
        {accessibilityLabel && <p className={hashClass(styled, clsx('sr-only'))}>{accessibilityLabel}</p>}
      </div>
    )
  },
)

Price.displayName = ComponentName.Price
export default Price
