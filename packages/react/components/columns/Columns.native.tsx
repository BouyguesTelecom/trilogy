import React, { createContext } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { View } from '../view'
import { ColumnsProps } from './ColumnsProps'
import { ComponentName } from '../enumsComponentsName'

/**
 * Columns Native Component
 * @param children {React.ReactNode}
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param gapless {boolean} Delete margins between columns
 * @param marginSize {ColumnsSize} Delete margins between columns with Size (apply is-variable)
 * @param inlined {boolean} Make colomns scrollable to vertical. Don't work with props 'marginSize'
 */

export const ColumnsContext = createContext({ inlined: false })

const Columns = ({
  children,
  centered,
  gapless,
  marginSize,
  verticalCentered,
  inlined,
  ...others
}: ColumnsProps): JSX.Element => {
  const styles = StyleSheet.create({
    columns: {
      flexDirection: 'row',
      minWidth: '100%',
    },
    centered: {
      alignSelf: 'center',
    },
    verticalAlign: {
      justifyContent: 'center',
      flex: 1,
    },
    gapless: {
      margin: 0,
      padding: 0,
    },
    variable: {
      padding: marginSize || 0,
    },
  })

  if (marginSize && !inlined) {
    return (
      <View style={[styles.columns, centered, verticalCentered && styles.verticalAlign]} {...others}>
        {children && marginSize
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.Children.map(children, (child: any) =>
              React.cloneElement(child, {
                style: [child.props.style, styles.variable],
              }),
            )
          : children}
      </View>
    )
  }

  if (gapless) {
    return (
      <View style={[styles.columns, centered, verticalCentered && styles.verticalAlign]} {...others}>
        {children && gapless
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.Children.map(children, (child: any) =>
              React.cloneElement(child, {
                style: [child.props.style, styles.gapless],
              }),
            )
          : children}
      </View>
    )
  }

  return inlined ? (
    <ColumnsContext.Provider
      value={{
        inlined: inlined,
      }}
    >
      <ScrollView
        style={{ marginLeft: 16 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {children}
      </ScrollView>
    </ColumnsContext.Provider>
  ) : (
    <View
      style={[
        styles.columns,
        centered && styles.centered,
        gapless && styles.gapless,
        verticalCentered && styles.verticalAlign,
      ]}
      {...others}
    >
      {children}
    </View>
  )
}

Columns.displayName = ComponentName.Columns

export default Columns
