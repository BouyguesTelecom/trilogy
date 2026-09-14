import * as React from "react"
import {  } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { TableThNativeRef, TableThProps } from "./TableThProps"
import { View } from "@/components/view"
import { Text } from "@/components/text"
import { getColorStyle, TrilogyColor, TypographyBold } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * TableTh Component
 * @param children {ReactNode} children of table TH
 */
const TableTh = React.forwardRef<TableThNativeRef, TableThProps>(({ children, ...others }, ref): JSX.Element => {
  const styles = memoStyles({
    tableTh: {
      flexDirection: "column",
      flex: 1,
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      padding: 10,
      borderRightColor: getColorStyle(TrilogyColor.STROKE_FADE),
      borderRightWidth: 0.2,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
    },
  })

  return (
    <View ref={ref} style={styles.tableTh} {...others}>
      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]} style={styles.title}>
        {String(children)}
      </Text>
    </View>
  )
})

TableTh.displayName = ComponentName.TableTh

export default TableTh
