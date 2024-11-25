import React from 'react'
import type { View as ViewType } from 'react-native'
import { StyleSheet } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableThProps } from '@/components/table/th/TableThProps'
import { Text } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { TypographyBold } from '@/objects/Typography/TypographyBold'

/**
 * TableTh Component
 * @param children {ReactNode} children of table TH
 */
const TableTh = React.forwardRef(({ children, ...others }: TableThProps, ref: React.Ref<ViewType>): JSX.Element => {
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
    <View style={styles.tableTh} {...others} ref={ref}>
      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]} style={styles.title}>
        {String(children)}
      </Text>
    </View>
  )
})

TableTh.displayName = ComponentName.TableTh
export default TableTh
