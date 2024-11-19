import React, { createContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { ChipsListProps } from '@/components/chips/list/ChipsListProps'
import { ComponentName } from '@/components/enumsComponentsName'

export const ChipsContext = createContext({ isMultiple: false })

/**
 * ChipsList Component - Container for Chips
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 */
const ChipsList = (
  { children, multiple, scrollable = true, ...others }: ChipsListProps,
  ref: React.Ref<ScrollView | View>,
): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
  })

  return (
    <ChipsContext.Provider value={{ isMultiple: multiple || false }}>
      {scrollable ? (
        <ScrollView
          ref={ref as React.Ref<ScrollView>}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          {...others}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={styles.container} ref={ref as React.Ref<View>} {...others}>
          {children}
        </View>
      )}
    </ChipsContext.Provider>
  )
}

ChipsList.displayName = ComponentName.ChipsList

export default React.forwardRef(ChipsList)
