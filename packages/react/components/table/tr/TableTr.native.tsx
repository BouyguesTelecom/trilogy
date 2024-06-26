import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { TableTrPropsNative } from './TableTrProps'
import { View } from '@/components/view'
import { Text, TextLevels } from '@/components/text'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/components/../objects'

/**
 * TableTr Component
 * @param children {ReactNode} Rows children
 * @param expandable {boolean} Lines can display additional information
 * @param expanded {ReactNode|string} Expended Table TR content
 */
const TableTr = ({
  children,
  expandable,
  expanded,
  ...others
}: TableTrPropsNative): JSX.Element => {
  const [isExpanded, setIsExpended] = useState<boolean>(false)

  const styles = StyleSheet.create({
    tableTr: {
      flexDirection: "row",
      flex: 1,
    },
    expendable: {
      width: "100%",
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_DARK, 1),
      padding: 10,
    },
  })

  const handleExpendedContent = () => {
    setIsExpended(!isExpanded)
  }

  if (expandable) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => handleExpendedContent()}
          style={styles.tableTr}
          {...others}
        >
          {children}
        </TouchableOpacity>
        {isExpanded && expanded && typeof expanded.valueOf() === "string" && (
          <View style={styles.expendable}>
            <Text level={TextLevels.FOUR}>{String(expanded)}</Text>
          </View>
        )}
        {isExpanded && expanded && React.isValidElement(expanded) && (
          <View style={styles.expendable}>{expanded}</View>
        )}
      </View>
    )
  }

  return (
    <View style={styles.tableTr} {...others}>
      {children}
    </View>
  )
}

TableTr.displayName = ComponentName.TableTr

export default TableTr
