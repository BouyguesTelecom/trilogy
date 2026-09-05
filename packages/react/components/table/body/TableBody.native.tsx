import * as React from "react"
import { Text, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { TableBodyNativeRef, TableBodyProps } from "./TableBodyProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * TableBody Component
 * @param children {ReactNode} Children of Table Body
 */
const TableBody = React.forwardRef<TableBodyNativeRef, TableBodyProps>(({ children, ...others }, ref): JSX.Element => {
  const styles = memoStyles({
    body: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  })

  return (
    <View ref={ref} style={styles.body} {...others}>
      {children && typeof children.valueOf() === "string" ? (
        <Text>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )
})

TableBody.displayName = ComponentName.TableBody

export default TableBody
