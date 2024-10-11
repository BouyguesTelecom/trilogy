import React, { useContext } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { ColumnsItemProps } from './ColumnsItemProps'
import { ColumnsContext } from '@/components/columns/Columns.native'
import { getAlignStyle } from '@/objects'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Columns Item Component - Columns Child
 * @param size {ColumnsSize} Size 1-12
 * @param children {React.ReactNode}
 * @param verticalCenter {boolean} Vertical center Column item
 * @param centered {boolean} center Column item
 */
const ColumnsItem = ({ children, size, verticalCenter, centered, align, ...others }: ColumnsItemProps): JSX.Element => {
  const columnsContextValues = useContext(ColumnsContext)

  const styles = StyleSheet.create({
    columnsItem: {
      width: columnsContextValues.scrollable
        ? (Dimensions.get('window').width - 80) / (12 / (size ? size : 12))
        : undefined,
      marginRight: columnsContextValues.scrollable ? 16 : 0,
      height: columnsContextValues.scrollable ? '100%' : undefined,
      flexDirection: 'column',
      flex: columnsContextValues.scrollable ? undefined : !size ? 1 : size,
      justifyContent: verticalCenter ? 'center' : 'flex-start',
      alignItems: centered ? 'center' : align ? getAlignStyle(align) : 'baseline',
      flexBasis: `${(size ? size : 4)  * 100}%`,
      flexGrow: 0,
      maxWidth: `${(size ? size : 12) / 12 * 100}%`
    },
  })

  return (
    <View style={styles.columnsItem} {...others}>
      {children}
    </View>
  )
}

ColumnsItem.displayName = ComponentName.ColumnsItem

export default ColumnsItem
