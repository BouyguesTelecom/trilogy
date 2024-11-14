import React, { useState } from 'react'
import type { View as ViewType } from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TableTrPropsNative } from '@/components/table/tr/TableTrProps'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * TableTr Component
 * @param children {ReactNode} Rows children
 * @param expandable {boolean} Lines can display additional information
 * @param expanded {ReactNode|string} Expended Table TR content
 */
const TableTr = (
  { children, expandable, expanded, ...others }: TableTrPropsNative,
  ref: React.Ref<ViewType>,
): JSX.Element => {
  const [isExpanded, setIsExpended] = useState<boolean>(false)

  const styles = StyleSheet.create({
    tableTr: {
      flexDirection: 'row',
      flex: 1,
    },
    expendable: {
      width: '100%',
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
      padding: 10,
    },
  })

  const handleExpendedContent = () => {
    setIsExpended(!isExpanded)
  }

  if (expandable) {
    return (
      <View ref={ref}>
        <TouchableOpacity onPress={() => handleExpendedContent()} style={styles.tableTr} {...others}>
          {children}
        </TouchableOpacity>
        {isExpanded && expanded && typeof expanded.valueOf() === 'string' && (
          <View style={styles.expendable}>
            <Text level={TextLevels.FOUR}>{String(expanded)}</Text>
          </View>
        )}
        {isExpanded && expanded && React.isValidElement(expanded) && <View style={styles.expendable}>{expanded}</View>}
      </View>
    )
  }

  return (
    <View style={styles.tableTr} ref={ref} {...others}>
      {children}
    </View>
  )
}

TableTr.displayName = ComponentName.TableTr

export default React.forwardRef(TableTr)
