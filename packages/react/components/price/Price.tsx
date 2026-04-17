import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import { getJustifiedClassName, getJustifyClassName } from '@/objects/facets/Justifiable'
import { has, is } from '@/services/classify'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { checkCents } from './PriceHelpers'
import { PriceProps, PriceRef } from './PriceProps'
import { Alignable } from '@/objects'

/**
 * Price Component
 * @param amount {number} Amount for Price
 * @param mention {string} Mention for price ( (1)* )
 * @param period {string} Period for Price (mois)
 * @param hideCents {boolean} Display cents
 * @param level {PriceLevel} Price custom size
 * @param inverted {boolean} Inverted Price Color
 * @param children {React.ReactNode}
 * @param align {Alignable} Price alignement @deprecated Use justify instead
 * @param justify {Justifiable} Price justification
 * @param inline {boolean} Inline display Price
 * @param accessibilityLabel {string} Accessibility label
 * @param overline {string} Price overline
 * @param oldAmount {boolean} old Amount Price
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
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
      justify,
      accessibilityLabel,
      oldAmount,
      overline,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { styled } = useTrilogyContext()
    const priceDetailsClasses = hashClass(styled, clsx('price-details'))
    const centsClasses = hashClass(styled, clsx('cents'))
    const periodClasses = hashClass(styled, clsx('period'))
    const overlineClasses = hashClass(styled, clsx('overline'))
    const srOnly = hashClass(styled, clsx('sr-only'))
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
      const wholeStrike = isNegativeStrike ? (absoluteWholeStrike === 0 ? '-0' : -absoluteWholeStrike) : absoluteWholeStrike

      let cents = checkCents(absoluteAmountStrike.toString().split(/[.,]/)[1]?.substring(0, 2) || '')
      cents = (cents && cents.length === 1 && `${cents}0`) || cents
      const centsDisplayed = (!hideCents && `€${cents}`) || '€'

      oldAmountComponent = (
        <span aria-hidden='true' className={classesStrike} {...others}>
          <span>{`${wholeStrike}`}</span>
          <span className={priceDetailsClasses}>
            <span className={centsClasses}>
              {centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
              {mention && <sup>{mention}</sup>}
            </span>
            {period && <span className={periodClasses}>/{period}</span>}
          </span>
        </span>
      )
    }

    if (amount !== undefined) {
      const isNegative = amount < 0
      const absoluteAmount = Math.abs(amount)
      const absoluteWhole = Math.floor(absoluteAmount)
      const whole = isNegative ? (absoluteWhole === 0 ? '-0' : -absoluteWhole) : absoluteWhole

      let cents = checkCents(absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')
      cents = (cents && cents.length === 1 && `${cents}0`) || cents
      const centsDisplayed = (!hideCents && `€${cents}`) || '€'
      const dataPrice = `${whole}${!hideCents && cents ? `.${cents}` : ''}`

      amountComponent = (
        <span
          aria-hidden='true'
          aria-label={accessibilityLabel}
          className={classes}
          data-price={dataPrice}
          data-testid={testId}
          {...others}
        >
          <span>{`${whole}`}</span>
          <span className={priceDetailsClasses}>
            <span className={centsClasses}>
              {centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
              {mention && <sup>{mention}</sup>}
            </span>
            {period && <span className={periodClasses}>/{period}</span>}
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
            justify
              ? is(getJustifyClassName(justify))
              : (align == Alignable.ALIGNED_START && is('justified-start')) ||
                  (align == Alignable.ALIGNED_CENTER && is('justified-center')) ||
                  (align == Alignable.ALIGNED_END && is('justified-end')) ||
                  '',
          ),
        )}
      >
        {overline && <p className={overlineClasses}>{overline}</p>}
        {oldAmountComponent}
        {amountComponent}
        {tagAmountComponent}
        {accessibilityLabel && <p className={srOnly}>{accessibilityLabel}</p>}
      </div>
    )
  },
)

Price.displayName = ComponentName.Price
export default Price
