import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { RowsItemProps } from '@/components/rows/item/RowItemProps'
import { RowsContext } from '@/components/rows/Rows.native'

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * @param children {React.ReactNode}
 */
const RowItem = React.forwardRef(
  ({ children, narrow, ...others }: RowsItemProps, ref: React.Ref<View>): JSX.Element => {
    const { gapless } = React.useContext(RowsContext)

    const styles = StyleSheet.create({
      rowItem: {
        flexGrow: (narrow && 0) || 1,
        padding: gapless ? 0 : 5,
        flexShrink: 1,
      },
    })

    return (
      <View style={styles.rowItem} ref={ref} {...others}>
        {children}
      </View>
    )
  },
)

RowItem.displayName = ComponentName.RowsItem
export default RowItem
