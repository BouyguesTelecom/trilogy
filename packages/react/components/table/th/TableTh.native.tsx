import { ComponentName } from '@/components/enumsComponentsName'
import { Text } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor, TypographyBold } from '@/objects/index'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { TableThNativeRef, TableThProps } from './TableThProps'

/**
 * TableTh Component
 * @param children {ReactNode} children of table TH
 */
const TableTh = React.forwardRef<TableThNativeRef, TableThProps>(({ children, ...others }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    tableTh: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      padding: 10,
      borderRightColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      borderRightWidth: 0.2,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
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
