import React, {useMemo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {PriceProps} from './PriceProps'
import {PriceVariant, PriceLevel} from './PriceEnum'
import {Alignable, getAlertStyle, getColorStyle, TrilogyColor} from '../../objects'
import {checkCents} from './PriceHelpers'
import {ComponentName} from '../enumsComponentsName'

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
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param inline {boolean} Inline display Price
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param suptitle {string} Price Suptitle
 */
const Price = ({
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
  // const cents = Math.floor(Math.round((absoluteAmount - absoluteWhole) * 100))
  //   .toString()
  //   .padStart(2, '0')

  const cents = checkCents(absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || '')

  const primaryColor = getColorStyle(TrilogyColor.MAIN)
  const secondaryColor = getColorStyle(TrilogyColor.MAIN)
  const invertedColor = getColorStyle(TrilogyColor.WHITE)

  const priceLevel =
    (huge && 45) ||
    (level == PriceLevel.LEVEL1 && 64) ||
    (level == PriceLevel.LEVEL2 && 56) ||
    (level == PriceLevel.LEVEL3 && 44) ||
    (level == PriceLevel.LEVEL4 && 32) ||
    (level == PriceLevel.LEVEL5 && 28) ||
    (level == PriceLevel.LEVEL6 && 24) ||
    (level == PriceLevel.LEVEL7 && 20) ||
    44
  const centsLevel = priceLevel * 0.4
  const suptitleLevel = priceLevel * 0.2

  const color = useMemo(
    () =>
      (inverted && !striked && invertedColor) ||
      (inverted && striked && '#b0b0b0') ||
      (alert && getAlertStyle(alert)) ||
      (!striked && !inverted && variant === PriceVariant.PRIMARY && primaryColor) ||
      (!striked && !inverted && variant === PriceVariant.SECONDARY && secondaryColor) ||
      (striked && !inverted && (!variant || variant === PriceVariant.PRIMARY) && '#8999a7') ||
      (striked && !inverted && variant === PriceVariant.SECONDARY && '#8cc9d9') ||
      primaryColor,
    [inverted, striked, alert, variant],
  )

  const strikedRotateByLevel = () => {
    return (
      (huge && '-16deg') ||
      (level == PriceLevel.LEVEL7 && (showCents || period) && '-18deg') ||
      (level == PriceLevel.LEVEL6 && (showCents || period) && '-19deg') ||
      (level == PriceLevel.LEVEL5 && (showCents || period) && '-18deg') ||
      (level == PriceLevel.LEVEL4 && (showCents || period) && '-16deg') ||
      (level == PriceLevel.LEVEL3 && (showCents || period) && '-16deg') ||
      (level == PriceLevel.LEVEL2 && (showCents || period) && '-16deg') ||
      (level == PriceLevel.LEVEL1 && (showCents || period) && '-15deg') ||
      (level == PriceLevel.LEVEL1 && '-17deg') ||
      (level == PriceLevel.LEVEL2 && '-18deg') ||
      (level == PriceLevel.LEVEL3 && '-20deg') ||
      (level == PriceLevel.LEVEL4 && '-18deg') ||
      (level == PriceLevel.LEVEL5 && '-18deg') ||
      (level == PriceLevel.LEVEL6 && '-22deg') ||
      (level == PriceLevel.LEVEL7 && '-22deg') ||
      (!level && (showCents || period) && '-15deg') ||
      '-20deg'
    )
  }

  const strikedBottomByLevel = () => {
    return (
      (huge && 32) ||
      (level == PriceLevel.LEVEL7 && (showCents || period) && 12) ||
      (level == PriceLevel.LEVEL6 && (showCents || period) && 15) ||
      (level == PriceLevel.LEVEL5 && (showCents || period) && 18) ||
      (level == PriceLevel.LEVEL4 && (showCents || period) && 19) ||
      (level == PriceLevel.LEVEL3 && (showCents || period) && 26) ||
      (level == PriceLevel.LEVEL2 && (showCents || period) && 33) ||
      (level == PriceLevel.LEVEL1 && (showCents || period) && 37) ||
      (level == PriceLevel.LEVEL1 && 34) ||
      (level == PriceLevel.LEVEL2 && 30) ||
      (level == PriceLevel.LEVEL3 && 24) ||
      (level == PriceLevel.LEVEL4 && 18) ||
      (level == PriceLevel.LEVEL5 && 16) ||
      (level == PriceLevel.LEVEL6 && 14) ||
      (level == PriceLevel.LEVEL7 && 12) ||
      (!level && (showCents || period) && 25) ||
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
        (inline && 0) ||
        (level == PriceLevel.LEVEL5 && 2) ||
        (level == PriceLevel.LEVEL6 && 2) ||
        (level == PriceLevel.LEVEL7 && 2) ||
        4,
      flexDirection: 'column',
      justifyContent: 'center',
      width: 'auto',
      position: 'relative',
    },
    price: {
      fontSize: priceLevel,
      fontWeight: (level == PriceLevel.LEVEL6 && 'normal') || (level == PriceLevel.LEVEL7 && 'normal') || 'bold',
      color: color,
    },
    cents: {
      fontWeight: 'bold',
      color: color,
      fontSize: centsLevel,
    },
    period: {
      color: color,
      fontSize: centsLevel,
    },
    inlinePeriod: {
      color: color,
      fontSize: priceLevel,
    },
    striked: {
      position: 'absolute',
      height: 1,
      backgroundColor:
        (inverted && invertedColor) ||
        (variant === PriceVariant.PRIMARY && primaryColor) ||
        (variant === PriceVariant.SECONDARY && secondaryColor) ||
        primaryColor,
      width: period ? '96%' : '100%',
      transform: [{rotate: inline ? '-10deg' : strikedRotateByLevel()}],
      bottom: strikedBottomByLevel(),
      left: 1,
      zIndex: 20,
    },
    suptitle: {
      fontSize: suptitleLevel,
      paddingLeft: 4,
      marginBottom: -3,
      color: color,
      fontWeight: (level == PriceLevel.LEVEL6 && 'normal') || (level == PriceLevel.LEVEL7 && 'normal') || 'bold',
    },
  })

  const priceText = `${whole}€${showCents ? cents : ''}${mention ? mention : ''}${period ? ` / ${period}` : ''}`
  const priceTestId = testId ? testId : priceText ? priceText : 'NotSpecified'
  const priceAccessibilityLabel = accessibilityLabel ? accessibilityLabel : priceText ? priceText : 'NotSpecified'

  return (
    <>
      {suptitle && <Text style={styles.suptitle}>{suptitle}</Text>}
      <View
        style={styles.container}
        accessible={!!priceAccessibilityLabel}
        accessibilityLabel={priceAccessibilityLabel}
        testID={priceTestId}
        {...others}
      >
        {inline ? (
          <View style={[styles.priceContainer, {flexDirection: 'row'}]}>
            {striked && <Text style={styles.striked}></Text>}
            <Text style={styles.price}>
              {whole}€{showCents && cents}
            </Text>
            <Text style={styles.inlinePeriod}>
              {mention}
              {period && ` / ${period}`}
            </Text>
          </View>
        ) : (
          <View style={[{flexDirection: 'row'}]}>
            {striked && <Text style={styles.striked}></Text>}
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{`${whole}`}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.cents}>
                €{showCents && (cents || '00')}
                {mention && mention}
              </Text>
              <Text style={styles.period}>{period && `/${period}`}</Text>
            </View>
          </View>
        )}
      </View>
    </>
  )
}

Price.displayName = ComponentName.Price

export default Price
