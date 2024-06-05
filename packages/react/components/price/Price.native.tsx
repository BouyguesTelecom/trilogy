import React, {useContext, useMemo} from "react"
import {StyleSheet, Text, View} from "react-native"
import { Text as TrilogyText } from '../text'
import {PriceProps} from "./PriceProps"
import {PriceLevel} from "./PriceEnum"
import {Alignable, getAlertStyle, getColorStyle, TrilogyColor, TypographyBold, TypographyColor} from "../../objects"
import {checkCents} from "./PriceHelpers"
import {ComponentName} from "../enumsComponentsName"
import {StatesContext} from "../../context/providerStates"

/**
 * Price Component
 * @param amount {number} Amount for Price
 * @param mention {string} Mention for price ( (1)* )
 * @param period {string} Period for Price (mois)
 * @param showCents {boolean} Display cents
 * @param level {PriceLevel} Price custom size
 * @param style {Object} Additional style
 * @param inverted {boolean} Inverted Price Color
 * @param children {React.ReactNode}
 * @param align {Alignable} Price alignement
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param inline {boolean} Inline display Price
 * @param testId {string} id for test
 * @param accessibilityLabel {string}
 * @param suptitle {string} Price Suptitle
 * @param tagAmount {number} Tag amount
 * @param tagSymbol {number} Tag symbol
 */
const Price = ({
                 amount,
                 mention,
                 period,
                 showCents,
                 level,
                 inverted,
                 align,
                 alert,
                 inline,
                 testId,
                 accessibilityLabel,
                 striked,
                 suptitle,
                 style,
                 tagAmount,
                 tagSymbol,
                 ...others
               }: PriceProps): JSX.Element => {
  const statesContext = useContext(StatesContext)

  const isNegative = amount < 0
  const absoluteAmount = Math.abs(amount)
  const absoluteWhole = Math.floor(absoluteAmount)
  const whole = isNegative ? -absoluteWhole : absoluteWhole

  const cents = checkCents(
    absoluteAmount.toString().split(/[.,]/)[1]?.substring(0, 2) || ""
  )

  const primaryColor = getColorStyle(TrilogyColor.MAIN)
  const secondaryColor = getColorStyle(TrilogyColor.MAIN)
  const invertedColor = getColorStyle(TrilogyColor.BACKGROUND)

  const priceLevel =
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
      (statesContext.inverted && invertedColor) ||
      (inverted && striked && getColorStyle(TrilogyColor.FONT, 1)) ||
      (alert && getAlertStyle(alert)) ||
      (!striked && !inverted && primaryColor) ||
      (!striked && !inverted && secondaryColor) ||
      (striked && !inverted && getColorStyle(TrilogyColor.FONT, 1)) ||
      primaryColor,
    [inverted, striked, alert]
  )

  const strikedRotateByLevel = () => {
    return (
      (level == PriceLevel.LEVEL7 && (showCents || period) && "-18deg") ||
      (level == PriceLevel.LEVEL6 && (showCents || period) && "-19deg") ||
      (level == PriceLevel.LEVEL5 && (showCents || period) && "-18deg") ||
      (level == PriceLevel.LEVEL4 && (showCents || period) && "-16deg") ||
      (level == PriceLevel.LEVEL3 && (showCents || period) && "-16deg") ||
      (level == PriceLevel.LEVEL2 && (showCents || period) && "-16deg") ||
      (level == PriceLevel.LEVEL1 && (showCents || period) && "-15deg") ||
      (level == PriceLevel.LEVEL1 && "-17deg") ||
      (level == PriceLevel.LEVEL2 && "-18deg") ||
      (level == PriceLevel.LEVEL3 && "-20deg") ||
      (level == PriceLevel.LEVEL4 && "-18deg") ||
      (level == PriceLevel.LEVEL5 && "-18deg") ||
      (level == PriceLevel.LEVEL6 && "-22deg") ||
      (level == PriceLevel.LEVEL7 && "-22deg") ||
      (!level && (showCents || period) && "-15deg") ||
      "-20deg"
    )
  }

  const strikedBottomByLevel = () => {
    return (
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
      flexDirection: "row",
      alignSelf:
        (align && align == Alignable.ALIGNED_START && "flex-start") ||
        (align && align == Alignable.ALIGNED_CENTER && "center") ||
        (align && align == Alignable.ALIGNED_END && "flex-end") ||
        "flex-start",
    },
    priceContainer: {
      padding: 0,
      paddingLeft:
        (inline && 0) ||
        (level == PriceLevel.LEVEL5 && 2) ||
        (level == PriceLevel.LEVEL6 && 2) ||
        (level == PriceLevel.LEVEL7 && 2) ||
        4,
      flexDirection: "column",
      justifyContent: "center",
      width: "auto",
      position: "relative",
    },
    price: {
      fontSize: priceLevel,
      fontWeight:
        (level == PriceLevel.LEVEL6 && "normal") ||
        (level == PriceLevel.LEVEL7 && "normal") ||
        "bold",
      color: color,
      fontFamily: "poppins-semibold"
    },
    cents: {
      fontWeight: "bold",
      color: color,
      fontSize: centsLevel,
      fontFamily: "poppins-semibold"
    },
    period: {
      color: color,
      fontSize: centsLevel,
      fontFamily: "poppins-semibold"
    },
    inlinePeriod: {
      color: color,
      fontSize: priceLevel,
      fontFamily: "poppins-semibold"
    },
    striked: {
      position: "absolute",
      height: 1,
      backgroundColor: (inverted && invertedColor) || primaryColor,
      width: period ? "96%" : "100%",
      transform: [{rotate: inline ? "-10deg" : strikedRotateByLevel()}],
      bottom: strikedBottomByLevel(),
      left: 1,
      zIndex: 20,
    },
    suptitle: {
      fontSize: suptitleLevel,
      paddingLeft: 4,
      marginBottom: -3,
      color: color,
      fontWeight:
        (level == PriceLevel.LEVEL6 && "normal") ||
        (level == PriceLevel.LEVEL7 && "normal") ||
        "bold",
    },
    tag: {
      paddingTop: level && level > 3 && 1 || level && level == 1 && 16 || level && level == 2 && 12 || level && level == 3 && 10 || 10,
      paddingBottom: level && level > 3 && 1 || level && level == 1 && 16 || level && level == 2 && 12 || level && level == 3 && 10 || 10,
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
      transform: [{ rotate: '45deg'}],
      marginRight: level && level > 3 ? -5 : -6,
    },
    tagTextAmount: {
      lineHeight: 0,
      fontSize: level && level == 1 && 24 || level && level == 2 && 18 || level && level == 3 && 16 || 11,
      fontFamily: "poppins-semibold"
    },
    tagTextPeriod: {
      alignSelf: level && level < 4 ? 'flex-end' : 'center',
      fontSize: level && level == 1 && 13 || level && level == 2 && 10 || level && level == 3 && 8 || 11,
      fontFamily: "poppins-semibold"
    }
  })

  const priceText = `${whole}€${showCents ? cents : ""}${
    mention ? mention : ""
  }${period ? ` / ${period}` : ""}`
  const priceTestId = testId ? testId : priceText ? priceText : "NotSpecified"
  const priceAccessibilityLabel = accessibilityLabel
    ? accessibilityLabel
    : priceText
      ? priceText
      : "NotSpecified"

  return (
    <View style={tagAmount ? {flexDirection: 'row', alignItems: 'center'} : {}}>
      {suptitle && <Text style={[styles.suptitle, style?.suptitle]}>{suptitle}</Text>}
      <View
        style={[styles.container, style?.container]}
        accessible={!!priceAccessibilityLabel}
        accessibilityLabel={priceAccessibilityLabel}
        testID={priceTestId}
        {...others}
      >
        {inline ? (
          <View style={[styles.priceContainer, {flexDirection: "row"}]}>
            {striked && <Text style={[styles.striked, style?.striked]}></Text>}
            <Text style={[styles.price, style?.price]}>
              {whole}€{showCents && cents}
            </Text>
            <Text style={[styles.inlinePeriod, style?.inlinePeriod]}>
              {mention}
              {period && ` / ${period}`}
            </Text>
          </View>
        ) : (
          <View style={[{flexDirection: "row"}]}>
            {striked && <Text style={[styles.striked, style?.striked]}></Text>}
            <View style={[styles.priceContainer, style?.priceContainer]}>
              <Text style={[styles.price, style?.price]}>{`${whole}`}</Text>
            </View>
            <View style={[styles.priceContainer, style?.priceContainer]}>
              <Text style={[styles.cents, style?.cents]}>
                €{showCents && (cents || "00")}
                {mention && mention}
              </Text>
              <Text style={[styles.period, style?.period]}>{period && `/${period}`}</Text>
            </View>
          </View>
        )}
      </View>
      {tagAmount && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
          <View style={styles.tagArrow} />
          <View style={styles.tag}>
            <TrilogyText style={styles.tagTextAmount} typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD, TypographyColor.TEXT_WHITE]}>{tagAmount} {tagSymbol ? tagSymbol : '€'}</TrilogyText>
            {tagSymbol === '€' && period && <TrilogyText style={styles.tagTextPeriod} typo={[TypographyBold.TEXT_WEIGHT_NORMAL, TypographyColor.TEXT_WHITE]}> /{period}</TrilogyText>}
          </View>
        </View>
      )}
    </View>
  )
}

Price.displayName = ComponentName.Price

export default Price
