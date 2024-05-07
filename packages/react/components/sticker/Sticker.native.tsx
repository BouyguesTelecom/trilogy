import * as React from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import { StickerProps } from "./StickerProps"
import { getAlertStyle, getColorStyle, getVariantStyle, TrilogyColor, } from "../../objects"
import { ComponentName } from "../enumsComponentsName"

/**
 * Sticker Native component
 * @param children {ReactNode} Sticker child
 * @param variant {AlertState} Sticker variant : only primary
 * @param small {boolean} Small Sticker
 * @param outlined {boolean} Outlined sticker
 * @param hat {boolean} Hat Sticker ( for box )
 * @param others
 */
const Sticker = ({
  children,
  /* deprecated*/
  variant,
  /* deprecated*/
  alert,
  small,
  /* deprecated*/
  stretched,
  hat,
  /* deprecated*/
  inverted,
  outlined,
  flag,
  ...others
}: StickerProps): JSX.Element => {
  const defaultColor = getColorStyle(TrilogyColor.MAIN)
  const styles = StyleSheet.create({
    sticker: {
      justifyContent: "center",
      paddingTop: small ? 4 : 8,
      paddingBottom: small ? 4 : 8,
      paddingLeft: small ? 8 : 16,
      paddingRight: small ? 8 : 16,
      alignSelf: hat ? "auto" : "flex-start",
      borderWidth: outlined ? 2 : 0,
      borderColor: (outlined && defaultColor) || "transparent",
      backgroundColor:
        (inverted && "white") ||
        (outlined && "white") ||
        (variant && !alert && getVariantStyle(variant)) ||
        (!variant && alert && getAlertStyle(alert)) ||
        defaultColor,
      borderTopLeftRadius:
        (hat && 8) || (!flag && !small && 24) || (!flag && small && 16) || 0,
      borderTopRightRadius: (small && 16) || (hat && 8) || 24,
      borderBottomLeftRadius:
        (!flag && !small && !hat && 24) || (!flag && small && 16) || 0,
      borderBottomRightRadius:
        (!flag && !small && !hat && 24) || (!flag && small && 16) || 0,
      marginTop: hat ? -35 : 0,
      fontSize: small ? 12 : 16,
      top: hat ? 4 : 0,
    },
    stretched: {
      transform:
        Platform.OS === "ios"
          ? (stretched && [{ skewX: "-20deg" }]) || [{ skewX: "0deg" }]
          : [],
      justifyContent: "center",
      alignItems: "center",
      height: 35,
      backgroundColor:
        (variant && !alert && getVariantStyle(variant)) ||
        (!variant && alert && getAlertStyle(alert)) ||
        defaultColor,
    },
    text: {
      lineHeight: (!small && 20) || 15,
      textAlign: "center",
      color:
        (outlined && defaultColor) ||
        (inverted && defaultColor) ||
        getColorStyle(TrilogyColor.WHITE),
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: (!small && 16) || 12,
      transform:
        Platform.OS === "ios"
          ? (stretched && [{ skewX: "20deg" }]) || [{ skewX: "0deg" }]
          : [],
    },
    stretchedAndroid: {
      justifyContent: "center",
      alignItems: "center",
      height: 35,
      backgroundColor:
        (variant && !alert && getVariantStyle(variant)) ||
        (!variant && alert && getAlertStyle(alert)) ||
        defaultColor,
    },
  })

  if (stretched && Platform.OS === "android") {
    return (
      <View
        style={
          (!small && stretched && styles.stretchedAndroid) || styles.sticker
        }
        {...others}
      >
        {children && typeof children === "string" ? (
          <Text style={styles.text}>{children}</Text>
        ) : (
          children
        )}
      </View>
    )
  }

  return (
    <View
      style={(!small && stretched && styles.stretched) || styles.sticker}
      {...others}
    >
      {children && typeof children === "string" ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </View>
  )
}

Sticker.displayName = ComponentName.Sticker

export default Sticker
