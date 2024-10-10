import * as React from "react"
import { StyleSheet, View } from "react-native"
import { RowsProps } from "./RowsProps"
import { ComponentName } from "@/components/enumsComponentsName"

export const RowsContext = React.createContext({ gapless: false })

/**
 * Rows Component
 * @param children {React.ReactNode} Rows children
 */
const Rows = ({ children, gapless, ...others }: RowsProps): JSX.Element => {
  const styles = StyleSheet.create({
    rows: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  })

  return (
    <RowsContext.Provider value={{ gapless: gapless || false }}>
      <View style={styles.rows} {...others}>
        {children}
      </View>
    </RowsContext.Provider>

  )
}

Rows.displayName = ComponentName.Rows

export default Rows
