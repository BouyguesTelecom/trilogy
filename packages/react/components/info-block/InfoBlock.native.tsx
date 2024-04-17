import * as React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { InfoBlockProps } from "./InfoBlockProps"
import { getColorStyle, TrilogyColor } from "../../objects/facets/Color"
import { ComponentName } from "../enumsComponentsName"

/**
 * Info Block Component
 * @param children {React.ReactNode} Children for Info Block
 * @param boxed {boolean} Boxed block
 * @param onClick {Function} onClick Event
 */
const InfoBlock = ({
  children,
  boxed,
  onClick,
  ...others
}: InfoBlockProps): JSX.Element => {
  const styles = StyleSheet.create({
    infoBlock: {
      width: "100%",
      minHeight: 30,
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 15,
      paddingBottom: 15,
    },
    shadow: {
      shadowColor: "rgba(0,0,0,.1)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    outBoxed: {
      width: "100%",
      minHeight: 30,
      backgroundColor: "transparent",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
  })

  let infoBlockView: JSX.Element

  if (boxed) {
    infoBlockView = (
      <View style={[styles.infoBlock, styles.shadow]} {...others}>
        {children}
      </View>
    )
  } else {
    infoBlockView = (
      <View style={styles.outBoxed} {...others}>
        {children}
      </View>
    )
  }

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {infoBlockView}
      </TouchableOpacity>
    </View>
  ) : (
    infoBlockView
  )
}

InfoBlock.displayName = ComponentName.InfoBlock

export default InfoBlock
