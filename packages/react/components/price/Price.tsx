import React from 'react'
import clsx from 'clsx'
import { PriceProps } from './PriceProps'
import { has, is } from '../../services/classify'
import { Text } from '../text'
import { Alignable } from '../../objects'
import { checkCents } from './PriceHelpers'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'

/**
 * Price Component
 * @param variant {PriceVariant} Variant for Price (PRIMARY|SECONDARY)
 * @param amount {number} Amount for Price
 * @param mention {string} Mention for price ( (1)* )
 * @param period {string} Period for Price (mois)
 * @param showCents {boolean} Display cents
 * @param level {PriceLevel} Price custom size
 * @param huge {boolean} Price huge size
 * @param inverted {boolean} Inverted Price Color
 * @param children {React.ReactNode}
 * @param align {Alignable} Price alignement
 * @param inline {boolean} Inline display Price
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param suptitle {string} Price Suptitle
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param striked {boolean} Striked Price
 * - --------------- NATIVE PROPERTIES ----------------------------------
 */
const Price = ({
  className,
  variant,
  amount,
  mention,
  period,
  showCents,
  level,
  huge,
  inverted,
  align,
  alert,
  inline,
  testId,
  accessibilityLabel,
  striked,
  suptitle,
  ...others
}: PriceProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'price',
      !alert && variant && is(`${variant}`),
      !variant && alert && is(`${alert}`),
      level && !huge && is(`level-${level}`),
      huge && !level && is('huge'),
      inverted && is('inverted'),
      inline && is('inlined'),
      striked && is('striked'),
      suptitle && has('suptitle'),
      className,
    ),
  )

  const priceParentNode = hashClass(
    styled,
    clsx(
      (align == Alignable.ALIGNED_START && has('text-left')) ||
        (align == Alignable.ALIGNED_CENTER && has('text-centered')) ||
        (align == Alignable.ALIGNED_END && has('text-right')) ||
        '',
    ),
  )

  // const fixedCents = (n: any) => {
  //   return n.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
  // }

  const isNegative = amount < 0
  const absoluteAmount = Math.abs(amount)
  // Math.floor on negative decimal decrease its value (as expected), ex: Math.floor(-17.09) => -18
  // Use of Math.abs prevent this in our case
  const absoluteWhole = Math.floor(absoluteAmount)
  const whole = isNegative ? -absoluteWhole : absoluteWhole
  // Floating point problem Math.floor gives inconsistent results with decimals,
  // Math.round prevents it and is enough with prices decimals
  // ex: (17.09 - 17) * 100 = 8.999999999999986 > Floating point problem
  // ex: Math.round((17.09 - 17) * 100) = 9 > Expected result
  // For more informations https://floating-point-gui.de/

  // const cents = Math.floor((absoluteAmount - absoluteWhole) * 100)
  //   .toString()
  //   .padStart(2, '0')

  let cents = checkCents(absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')

  cents = (cents && cents.length === 1 && `${cents}0`) || cents

  const centsDisplayed = inline && showCents && `,${cents || '00'} €` || showCents && `€${cents || '00'}` || '€'

  if (align) {
    return (
      <div className={priceParentNode}>
        <div data-testid={testId} aria-label={accessibilityLabel} className={classes} {...others}>
          {suptitle && <span className='price-suptitle'>{suptitle}</span>}
          <Text className={'main'}>{`${whole}`}</Text>
          <span className={hashClass(styled, clsx('price-details'))}>
            <span className={hashClass(styled, clsx('cents'))}>
              {inline && centsDisplayed === '€' ? <>&nbsp;{centsDisplayed}</> : centsDisplayed}
              {mention && <sup>{mention}</sup>}
            </span>
            {period && <span className={hashClass(styled, clsx('period'))}>/{period}</span>}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div data-testid={testId} aria-label={accessibilityLabel} className={classes} {...others}>
      {suptitle && <span className='price-suptitle'>{suptitle}</span>}
      <Text className='main'>{`${whole}`}</Text>
      <span className={hashClass(styled, clsx('price-details'))}>
        <span className={hashClass(styled, clsx('cents'))}>
          {centsDisplayed || '00'}
          {mention && <sup>{mention}</sup>}
        </span>
        {period && <span className={hashClass(styled, clsx('period'))}>/{period}</span>}
      </span>
    </div>
  )
}

export default Price
