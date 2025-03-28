import { ComponentName } from '@/components/enumsComponentsName'
import React, { createContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ChipsListNativeRef, ChipsListProps } from './ChipsListProps'

export const ChipsContext = createContext({ isMultiple: false })

/**
 * ChipsList Component - Container for Chips
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 */
const ChipsList = React.forwardRef<ChipsListNativeRef, ChipsListProps>(
  ({ children, multiple, scrollable = true, ...others }, ref): JSX.Element => {
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
          <View ref={ref as React.Ref<View>} style={styles.container} {...others}>
            {children}
          </View>
        )}
      </ChipsContext.Provider>
    )
  },
)

ChipsList.displayName = ComponentName.ChipsList

export default ChipsList
