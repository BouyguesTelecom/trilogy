import * as React from 'react'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { RowsNativeRef, RowsProps } from './RowsProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { ColumnsGapValue, GapSize } from '@/components/columns/ColumnsTypes'

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 * @param gapless {boolean} Delete margins between row
 */
const Rows = React.forwardRef<RowsNativeRef, RowsProps>(({ children, gap, ...others }, ref): JSX.Element => {
  const realGap = (typeof gap === 'undefined' && 16) || ColumnsGapValue[gap as GapSize]
  const styles = memoStyles({
    rows: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      gap: realGap,
    },
  })

  return (
    <View ref={ref} style={styles.rows} {...others}>
      {children}
    </View>
  )
})

Rows.displayName = ComponentName.Rows

export default Rows
