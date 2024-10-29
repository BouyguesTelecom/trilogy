import * as React from "react"
import clsx from "clsx"
import { PriceProps } from "./PriceProps"
import { has, is } from "@/services/classify"
import { Text, TextMarkup } from "../text"
import { Alignable, TypographyColor, TypographyBold } from "@/objects"
import { checkCents } from "./PriceHelpers"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"
import { PriceLevel } from "./PriceEnum"

/**
 * Price Component
 * @param amount {number} Amount for Price
 * @param mention {string} Mention for price ( (1)* )
 * @param period {string} Period for Price (mois)
 * @param showCents {boolean} Display cents
 * @param level {PriceLevel} Price custom size
 * @param inverted {boolean} Inverted Price Color
 * @param children {React.ReactNode}
 * @param align {Alignable} Price alignement
 * @param inline {boolean} Inline display Price
 * @param accessibilityLabel {string} Accessibility label
 * @param testId {string} Test Id for Test Integration
 * @param overline {string} Price overline
 * @param tagAmount {number} Tag amount
 * @param tagSymbol {number} Tag symbol
 * @param strikedAmount {boolean} Striked Amount Price
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * - --------------- NATIVE PROPERTIES ----------------------------------
 * @param style {Object} Additional style
 */
const Price = ({
                 className,
                 amount,
                 mention,
                 period,
                 showCents = true,
                 level,
                 inverted,
                 align,
                 inline,
                 testId,
                 accessibilityLabel,
                 strikedAmount,
                 overline,
                 tagAmount,
                 tagSymbol,
                 ...others
               }: PriceProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      "price",
      inverted && is("inverted"),
      inline && is("inlined"),
      overline && has("suptitle"),
      className
    )
  )

  const classesStriked = hashClass(
    styled,
    clsx(
      "price",
      inverted && is("inverted"),
      inline && is("inlined"),
      strikedAmount && is("striked"),
      overline && has("suptitle"),
      className
    )
  )

  const priceParentNode = hashClass(
    styled,
    clsx(
      (align == Alignable.ALIGNED_START && has("text-left")) ||
      (align == Alignable.ALIGNED_CENTER && has("text-centered")) ||
      (align == Alignable.ALIGNED_END && has("text-right")) ||
      ""
    )
  )

  const isNegative = amount < 0
  const absoluteAmount = Math.abs(amount)
  const absoluteWhole = Math.floor(absoluteAmount)
  const whole = isNegative ? -absoluteWhole : absoluteWhole

  const isNegativeStriked = strikedAmount && strikedAmount < 0
  const absoluteAmountStriked = strikedAmount && Math.abs(strikedAmount)
  const absoluteWholeStriked = absoluteAmountStriked && Math.floor(absoluteAmountStriked)
  const wholeStriked = isNegativeStriked && absoluteWholeStriked ? -absoluteWholeStriked : absoluteWholeStriked

  let cents = checkCents(
    absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || ""
  )

  cents = (cents && cents.length === 1 && `${cents}0`) || cents

  const centsDisplayed =
    (inline && showCents && `,${cents || "00"} €`) ||
    (showCents && `€${cents || "00"}`) ||
    "€"

  const returnComponent = (
    <div className={hashClass(styled, clsx("price-container", is(`level-${level || '1'}`)) )}>
      {overline && <p className={hashClass(styled,clsx("overline"))}>{overline}</p>}
      {/* StrikedAmount Price */}
      {strikedAmount && (
        <>
          <span
            aria-hidden="true"
            data-testid={testId}
            className={classesStriked}
            {...others}
          >
            <Text markup={TextMarkup.SPAN}>{`${wholeStriked}`}</Text>
            <span className={hashClass(styled, clsx("price-details"))}>
              <span className={hashClass(styled, clsx("cents"))}>
                {inline && centsDisplayed === "€" ? (
                  <>&nbsp;{centsDisplayed}</>
                ) : (
                  centsDisplayed
                )}
                {mention && <sup>{mention}</sup>}
              </span>
              {period && (
                <span className={hashClass(styled, clsx("period"))}>/{period}</span>
              )}
            </span>
          </span>
        </>
      )}
        <span
          aria-hidden="true"
          data-testid={testId}
          aria-label={accessibilityLabel}
          className={classes}
          {...others}
        >
          <Text markup={TextMarkup.SPAN}>{`${whole}`}</Text>
          <span className={hashClass(styled, clsx("price-details"))}>
            <span className={hashClass(styled, clsx("cents"))}>
              {inline && centsDisplayed === "€" ? (
                <>&nbsp;{centsDisplayed}</>
              ) : (
                centsDisplayed
              )}
              {mention && <sup>{mention}</sup>}
            </span>
            {period && (
              <span className={hashClass(styled, clsx("period"))}>/{period}</span>
            )}
          </span>
        </span>
        {tagAmount && (
          <span {...{ role: 'paragraph' }} className={hashClass(styled, clsx(('price-tag')))}>
            <Text className={clsx('tag-amount')} markup={TextMarkup.SPAN} typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyColor.TEXT_WHITE]}>{tagAmount} {tagSymbol ? tagSymbol : '€'}</Text>
            {tagSymbol === '€' && period && <Text className={clsx('tag-period')} markup={TextMarkup.SPAN} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyColor.TEXT_WHITE]}>&nbsp;/{period}</Text>}
          </span>
        )}
        {accessibilityLabel && <p className='sr-only'>{accessibilityLabel}</p>}
    </div>
  )

  if (align) {
    return <div className={priceParentNode}>{returnComponent}</div>
  }

  return returnComponent
}

export default Price
