import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { ColumnsContext } from '@/components/columns/Columns.native'
import { ColumnsItemProps } from '@/components/columns/item/ColumnsItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * @param mobileSize {ColumnsSize} if size is missing.
 * @param children {React.ReactNode}
 * @param verticalCentered {boolean} Vertical center Column item
 * @param centered {boolean} center Column item
 * @param align { Alignable | AlignableValues} align content
 */
const ColumnsItem = React.forwardRef(
  (
    { children, size, mobileSize, verticalCentered, ...others }: ColumnsItemProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
    const columnsContextValues = useContext(ColumnsContext)

    const realSize = size || mobileSize

    const styles = StyleSheet.create({
      columnsItem: {
        height: columnsContextValues.scrollable ? '100%' : undefined,
        flex: !realSize ? 1 : realSize,
        justifyContent: verticalCentered ? 'center' : 'flex-start',
        flexBasis: `${(realSize ? realSize / 12 : 12) * 100}%`,
        flexGrow: 0,
        maxWidth: `${((realSize ? realSize : 12) / 12) * 100}%`,
      },
    })

    return (
      <View ref={ref} style={styles.columnsItem} {...others}>
        {children}
      </View>
    )
  },
)

ColumnsItem.displayName = ComponentName.ColumnsItem
export default ColumnsItem
