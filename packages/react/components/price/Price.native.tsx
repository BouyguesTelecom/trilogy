import { ComponentName } from '@/components/enumsComponentsName'
import { Spacer, SpacerSize } from '@/components/spacer'
import { StatesContext } from '@/context/providerStates'
import React, { useContext, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Alignable, getColorStyle, getTypographyBoldStyle, TrilogyColor, TypographyBold } from '../../objects'
import { PriceLevel } from './PriceEnum'
import { checkCents } from './PriceHelpers'
import { PriceNativeRef, PriceProps } from './PriceProps'

/**
 * Price Component
 * @param amount {number} Amount for Price
 * @param mention {string} Mention for price ( (1)* )
 * @param period {string} Period for Price (mois)
 * @param hideCents {boolean} Display cents
 * @param level {PriceLevel} Price custom size
 * @param style {Object} Additional style
 * @param inverted {boolean} Inverted Price Color
 * @param align {Alignable} Price alignement
 * @param inline {boolean} Inline display Price
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param oldAmount {boolean} Striked Amount Price
 * @param overline {string} Price overline
 */
const Price = React.forwardRef<PriceNativeRef, PriceProps>(
  (
    {
      amount,
      mention,
      period,
      hideCents = false,
      level,
      inverted,
      align,
      testId,
      accessibilityLabel,
      oldAmount,
      overline,
      ...others
    },
    ref,
  ): JSX.Element => {
    const statesContext = useContext(StatesContext)

    const isNegative = amount ? amount < 0 : false
    const absoluteAmount = amount ? Math.abs(amount) : 0
    const absoluteWhole = Math.floor(absoluteAmount)
    const whole = isNegative ? -absoluteWhole : absoluteWhole

    const cents = checkCents(absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')

    const isNegativeStriked = oldAmount && oldAmount < 0
    const absoluteAmountStriked = oldAmount && Math.abs(oldAmount)
    const absoluteWholeStriked = absoluteAmountStriked && Math.floor(absoluteAmountStriked)
    const wholeStriked = absoluteWholeStriked && isNegativeStriked ? -absoluteWholeStriked : absoluteWholeStriked

    const centsStriked =
      absoluteAmountStriked && checkCents(absoluteAmountStriked.toString().split(/[.,]/)[1]?.substring(0, 2) || '')

    const primaryColor = getColorStyle(TrilogyColor.MAIN)
    const secondaryColor = getColorStyle(TrilogyColor.MAIN)
    const invertedColor = getColorStyle(TrilogyColor.BACKGROUND)
    const neutralColor = getColorStyle(TrilogyColor.FONT_PLACEHOLDER)

    const priceLevel =
      (level == PriceLevel.ONE && 64) ||
      (level == PriceLevel.TWO && 56) ||
      (level == PriceLevel.THREE && 44) ||
      (level == PriceLevel.FOUR && 32) ||
      (level == PriceLevel.FIVE && 28) ||
      (level == PriceLevel.SIX && 24) ||
      (level == PriceLevel.SEVEN && 20) ||
      44

    const centsLevel = priceLevel * 0.4
    const suptitleLevel = priceLevel * 0.2

    const priceLevelStriked =
      (level == PriceLevel.ONE && 44) ||
      (level == PriceLevel.TWO && 32) ||
      (level == PriceLevel.THREE && 28) ||
      (level == PriceLevel.FOUR && 24) ||
      20

    const centsLevelStriked = priceLevelStriked * 0.4

    const color = useMemo(
      () =>
        (inverted && invertedColor) ||
        (statesContext.inverted && invertedColor) ||
        primaryColor ||
        (!inverted && secondaryColor) ||
        primaryColor,
      [inverted, invertedColor, statesContext.inverted, primaryColor, secondaryColor],
    )

    const strikedRotateByLevel = () => {
      return (
        (level == PriceLevel.SEVEN && (hideCents || period) && '-18deg') ||
        (level == PriceLevel.SIX && (hideCents || period) && '-19deg') ||
        (level == PriceLevel.FIVE && (hideCents || period) && '-18deg') ||
        (level == PriceLevel.FOUR && (hideCents || period) && '-16deg') ||
        (level == PriceLevel.THREE && (hideCents || period) && '-16deg') ||
        (level == PriceLevel.TWO && (hideCents || period) && '-16deg') ||
        (level == PriceLevel.ONE && (hideCents || period) && '-15deg') ||
        (level == PriceLevel.ONE && '-17deg') ||
        (level == PriceLevel.TWO && '-18deg') ||
        (level == PriceLevel.THREE && '-20deg') ||
        (level == PriceLevel.FOUR && '-18deg') ||
        (level == PriceLevel.FIVE && '-18deg') ||
        (level == PriceLevel.SIX && '-22deg') ||
        (level == PriceLevel.SEVEN && '-22deg') ||
        (!level && (hideCents || period) && '-15deg') ||
        '-20deg'
      )
    }

    const strikedBottomByLevel = () => {
      return (
        (level == PriceLevel.SEVEN && (hideCents || period) && 12) ||
        (level == PriceLevel.SIX && (hideCents || period) && 15) ||
        (level == PriceLevel.FIVE && (hideCents || period) && 18) ||
        (level == PriceLevel.FOUR && (hideCents || period) && 19) ||
        (level == PriceLevel.THREE && (hideCents || period) && 26) ||
        (level == PriceLevel.TWO && (hideCents || period) && 33) ||
        (level == PriceLevel.ONE && (hideCents || period) && 37) ||
        (level == PriceLevel.ONE && 34) ||
        (level == PriceLevel.TWO && 30) ||
        (level == PriceLevel.THREE && 24) ||
        (level == PriceLevel.FOUR && 18) ||
        (level == PriceLevel.FIVE && 16) ||
        (level == PriceLevel.SIX && 14) ||
        (level == PriceLevel.SEVEN && 12) ||
        (!level && (hideCents || period) && 25) ||
        25
      )
    }

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignSelf:
          (align && align == Alignable.ALIGNED_START && 'flex-start') ||
          (align && align == Alignable.ALIGNED_CENTER && 'center') ||
          (align && align == Alignable.ALIGNED_END && 'flex-end') ||
          'flex-start',
      },
      priceContainer: {
        padding: 0,
        paddingLeft:
          (level == PriceLevel.FIVE && 2) || (level == PriceLevel.SIX && 2) || (level == PriceLevel.SEVEN && 2) || 4,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 'auto',
        position: 'relative',
      },
      price: {
        fontWeight: (level == PriceLevel.SIX && 'normal') || (level == PriceLevel.SEVEN && 'normal') || 'bold',
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      },
      priceFontSize: {
        fontSize: priceLevel,
      },
      priceFontSizeStriked: {
        fontSize: priceLevelStriked,
      },
      priceColor: {
        color: color,
      },
      priceStrikedColor: {
        color: neutralColor,
      },
      cents: {
        fontWeight: 'bold',
        color: color,
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      },
      centsFontSize: {
        fontSize: centsLevel,
      },
      centsFontSizeStriked: {
        fontSize: centsLevelStriked,
      },
      period: {
        color: color,
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      },
      periodFontSize: {
        fontSize: centsLevel,
      },
      periodFontSizeStriked: {
        fontSize: centsLevelStriked,
      },
      inlinePeriod: {
        color: color,
        fontSize: priceLevel,
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      },
      striked: {
        position: 'absolute',
        height: 1,
        backgroundColor: (inverted && invertedColor) || neutralColor,
        width: period ? '96%' : '100%',
        transform: [{ rotate: strikedRotateByLevel() }],
        bottom: strikedBottomByLevel(),
        left: 1,
        zIndex: 20,
      },
      suptitle: {
        fontSize: suptitleLevel,
        paddingLeft: 4,
        marginBottom: -3,
        color: color,
        fontWeight: (level == PriceLevel.SIX && 'normal') || (level == PriceLevel.SEVEN && 'normal') || 'bold',
      },
      tag: {
        paddingTop:
          (level && level > 3 && 1) ||
          (level && level == 1 && 16) ||
          (level && level == 2 && 12) ||
          (level && level == 3 && 10) ||
          10,
        paddingBottom:
          (level && level > 3 && 1) ||
          (level && level == 1 && 16) ||
          (level && level == 2 && 12) ||
          (level && level == 3 && 10) ||
          10,
        paddingRight: level && level < 4 ? 10 : 6,
        paddingLeft: level && level < 4 ? 10 : 6,
        padding: level && level > 3 ? 4 : 8,
        borderRadius: 6,
        backgroundColor: getColorStyle(TrilogyColor.ACCENT),
        flexDirection: 'row',
      },
      tagArrow: {
        width: level && level > 3 ? 8 : 10,
        height: level && level > 3 ? 8 : 10,
        backgroundColor: getColorStyle(TrilogyColor.ACCENT),
        borderRadius: level && level > 3 ? 2 : 3,
        transform: [{ rotate: '45deg' }],
        marginRight: level && level > 3 ? -5 : -6,
      },
      tagTextAmount: {
        lineHeight: 0,
        fontSize: (level && level == 1 && 24) || (level && level == 2 && 18) || (level && level == 3 && 16) || 11,
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      },
      tagTextPeriod: {
        alignSelf: level && level < 4 ? 'flex-end' : 'center',
        fontSize: (level && level == 1 && 13) || (level && level == 2 && 10) || (level && level == 3 && 8) || 11,
        fontFamily: getTypographyBoldStyle(TypographyBold.TEXT_WEIGHT_SEMIBOLD),
      },
    })

    const priceText = `${whole}€${hideCents ? cents : ''}${mention ? mention : ''}${period ? ` / ${period}` : ''}`
    const priceTestId = testId ? testId : priceText ? priceText : 'NotSpecified'
    const priceAccessibilityLabel = accessibilityLabel ? accessibilityLabel : priceText ? priceText : 'NotSpecified'

    return (
      <View ref={ref}>
        {overline && <Text style={[styles.suptitle]}>{overline}</Text>}

        <View>
          <View
            style={[styles.container]}
            accessible={!!priceAccessibilityLabel}
            accessibilityLabel={priceAccessibilityLabel}
            testID={priceTestId}
            {...others}
          >
            {
              <>
                {oldAmount !== undefined && (
                  <View style={[{ flexDirection: 'row' }]}>
                    {oldAmount !== undefined && <Text style={[styles.striked]}></Text>}
                    <View style={[styles.priceContainer]}>
                      <Text
                        style={[styles.price, styles.priceFontSizeStriked, styles.priceStrikedColor]}
                      >{`${wholeStriked}`}</Text>
                    </View>
                    <View style={[styles.priceContainer]}>
                      <Text style={[styles.cents, styles.centsFontSizeStriked, styles.priceStrikedColor]}>
                        €{!hideCents && (centsStriked || '00')}
                        {mention && mention}
                      </Text>
                      <Text style={[styles.period, styles.periodFontSizeStriked, styles.priceStrikedColor]}>
                        {period && `/${period}`}
                      </Text>
                    </View>
                  </View>
                )}
                {amount !== undefined && oldAmount !== undefined && <Spacer horizontal size={SpacerSize.ONE} />}
                {amount !== undefined && (
                  <View style={[{ flexDirection: 'row' }]}>
                    <View style={[styles.priceContainer]}>
                      <Text style={[styles.price, styles.priceFontSize, styles.priceColor]}>{`${whole}`}</Text>
                    </View>
                    <View style={[styles.priceContainer]}>
                      <Text style={[styles.cents, styles.centsFontSize, styles.priceColor]}>
                        €{!hideCents && (cents || '00')}
                        {mention && mention}
                      </Text>
                      <Text style={[styles.period, styles.periodFontSize, styles.priceColor]}>
                        {period && `/${period}`}
                      </Text>
                    </View>
                  </View>
                )}
              </>
            }
          </View>
        </View>
      </View>
    )
  },
)

Price.displayName = ComponentName.Price

export default Price
