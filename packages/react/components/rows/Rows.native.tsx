import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { RowsProps } from '@/components/rows/RowsProps'

export const RowsContext = React.createContext({ gapless: false })

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * @param gapless {boolean} Delete margins between row
 */
const Rows = ({ children, gapless, ...others }: RowsProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    rows: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  })

  return (
    <RowsContext.Provider value={{ gapless: gapless || false }}>
      <View style={styles.rows} ref={ref} {...others}>
        {children}
      </View>
    </RowsContext.Provider>
  )
}

Rows.displayName = ComponentName.Rows

export default React.forwardRef(Rows)
