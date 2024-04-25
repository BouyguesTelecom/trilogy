import * as React from "react"
import { StyleSheet } from "react-native"
import { TableThProps } from "./TableThProps"
import { View } from "../../view"
import { Text } from "../../text"
import { getColorStyle, TrilogyColor, TypographyBold } from "../../../objects"
import { ComponentName } from "../../enumsComponentsName"

/**
 * TableTh Component
 * @param children {ReactNode} children of table TH
 */
const TableTh = ({ children, ...others }: TableThProps): JSX.Element => {
  const styles = StyleSheet.create({
    tableTh: {
      flexDirection: "column",
      flex: 1,
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_DARK, 1),
      padding: 10,
      borderRightColor: getColorStyle(TrilogyColor.NEUTRAL_DARK, 1),
      borderRightWidth: 0.2,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
    },
  })

  return (
    <View style={styles.tableTh} {...others}>
      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]} style={styles.title}>
        {String(children)}
      </Text>
    </View>
  )
}

TableTh.displayName = ComponentName.TableTh

export default TableTh
