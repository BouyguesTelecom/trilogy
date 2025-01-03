import { hashClass } from '@/helpers'
import { Alignable } from '@/objects'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { Text, TextMarkup } from '../text'
import { checkCents } from './PriceHelpers'
import { PriceProps } from './PriceProps'

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
const Price = ({
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
}: PriceProps): JSX.Element => {
  const classes = hashClass(clsx('price', inverted && is('inverted'), overline && has('suptitle'), className))

  const classesStrike = hashClass(
    clsx('price', inverted && is('inverted'), oldAmount && 'strike', overline && has('suptitle'), className),
  )

  let amountComponent = null
  let oldAmountComponent = null
  const tagAmountComponent = null

  if (oldAmount) {
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
        <span className={hashClass(clsx('price-details'))}>
          <span className={hashClass(clsx('cents'))}>
            {centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
            {mention && <sup>{mention}</sup>}
          </span>
          {period && <span className={hashClass(clsx('period'))}>/{period}</span>}
        </span>
      </span>
    )
  }

  if (amount) {
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
        <span className={hashClass(clsx('price-details'))}>
          <span className={hashClass(clsx('cents'))}>
            {centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
            {mention && <sup>{mention}</sup>}
          </span>
          {period && <span className={hashClass(clsx('period'))}>/{period}</span>}
        </span>
      </span>
    )
  }

  return (
    <div
      id={id}
      className={hashClass(
        clsx(
          'price-container',
          is(`level-${level || '1'}`),
          (align == Alignable.ALIGNED_START && is('justified-left')) ||
            (align == Alignable.ALIGNED_CENTER && is('justified-center')) ||
            (align == Alignable.ALIGNED_END && is('justified-right')) ||
            '',
        ),
      )}
    >
      {overline && <p className={hashClass(clsx('overline'))}>{overline}</p>}
      {oldAmountComponent}
      {amountComponent}
      {tagAmountComponent}
      {accessibilityLabel && <p className='sr-only'>{accessibilityLabel}</p>}
    </div>
  )
}

export default Price
