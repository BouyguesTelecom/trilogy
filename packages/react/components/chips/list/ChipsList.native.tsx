import React, { createContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { ChipsListProps } from './ChipsListProps'
import { ComponentName } from '@/components/enumsComponentsName'

export const ChipsContext = createContext({ isMultiple: false })

/**
 * ChipsList Component - Container for Chips
 * @param children {React.ReactNode}
 * @param multiple {boolean} Selection Multiple With checked icon
 */
const ChipsList = ({ children, multiple, ...others }: ChipsListProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
  })

  return (
    <ChipsContext.Provider value={{ isMultiple: multiple || false }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} {...others}>
        {children}
      </ScrollView>
    </ChipsContext.Provider>
  )
}

ChipsList.displayName = ComponentName.ChipsList

export default ChipsList
