import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ColumnsItemProps } from './ColumnsItemProps'
import { ColumnsContext } from '@/components/columns/Columns.native'
import { getAlignStyle } from '@/objects'
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
const ColumnsItem = ({ children, size, mobileSize, verticalCentered, centered, align, ...others }: ColumnsItemProps): JSX.Element => {
  const columnsContextValues = useContext(ColumnsContext)

  const realSize = size || mobileSize

  const styles = StyleSheet.create({
    columnsItem: {
      height: columnsContextValues.scrollable ? '100%' : undefined,
      flex: !realSize ? 1 : realSize,
      justifyContent: verticalCentered ? 'center' : 'flex-start',
      alignItems: centered ? 'center' : align ? getAlignStyle(align) : 'baseline',
      flexBasis: `${(realSize ? realSize / 12 : 12)  * 100}%`,
      flexGrow: 0,
      maxWidth: `${(realSize ? realSize : 12) / 12 * 100}%`
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
