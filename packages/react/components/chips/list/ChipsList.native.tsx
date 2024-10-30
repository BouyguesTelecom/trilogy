import React, { createContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ChipsListProps } from './ChipsListProps'
import { ComponentName } from '@/components/enumsComponentsName'

export const ChipsContext = createContext({ isMultiple: false })

/**
 * ChipsList Component - Container for Chips
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 * @param scrollable {boolean} If multiple Chips make scrollable List
 */
const ChipsList = ({ children, multiple, scrollable = true, ...others }: ChipsListProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
  })

  return (
    <ChipsContext.Provider value={{ isMultiple: multiple || false }}>
      {scrollable ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} {...others}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.container} {...others}>
          {children}
        </View>
      )}
    </ChipsContext.Provider>
  )
}

ChipsList.displayName = ComponentName.ChipsList

export default ChipsList
