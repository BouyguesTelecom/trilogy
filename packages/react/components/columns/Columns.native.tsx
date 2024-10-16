import React, {createContext, ReactNode} from "react"
import {Dimensions, StyleSheet} from "react-native"
import {View} from "@/components/view"
import {ColumnsProps} from "./ColumnsProps"
import {ComponentName} from "@/components/enumsComponentsName"
import {ScrollView} from 'react-native'

/**
 * Columns Native Component
 * @param children {React.ReactNode}
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param marginSize {ColumnsSize} Delete margins between columns with Size
 * @param scrollable {boolean} Make colomns scrollable to vertical. Don't work with props 'marginSize'
 */

export const ColumnsContext = createContext({scrollable: false})

const Columns = ({
                   children,
                   centered,
                   gap,
                   nbCols,
                   marginSize,
                   verticalCentered,
                   fullBleed,
                   scrollable,
                   multiline,
                   ...others
                 }: ColumnsProps): JSX.Element => {
  const styles = StyleSheet.create({
    columns: {
      flexDirection: "row",
      gap: gap || 16,
      minWidth: "100%",
      display: "flex",
    },
    centered: {
      alignSelf: "center",
    },
    verticalAlign: {
      justifyContent: "center",
      flex: 1,
    },
    marginSize: {
      padding: marginSize || 0,
    },
    multiline: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginRight: 24,
    }
  })

  if (!scrollable) {
    return (
      <View
        style={[
          multiline && styles.multiline || styles.columns,
          centered,
          verticalCentered && styles.verticalAlign,
        ]}
        {...others}
      >
        {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: [child.props.style, styles.marginSize],
              width: `${100/(nbCols||1) }%`,
            })
          )}
      </View>
    )
  }

  if (scrollable) {
    return <View style={{width: Dimensions.get('screen').width, marginHorizontal: fullBleed ? -24 : 0}}>
      <ScrollView horizontal contentContainerStyle={{
        width: 'auto',
        paddingHorizontal: 24,
        justifyContent: 'space-evenly',
        gap: 8
      }}>
        {
          React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: [child.props.style, {
                width: Dimensions.get('screen').width / (12 / (child.props.size || child.props.mobileSize || 12))-48,
                flexGrow: 0,
              }],
            })
          )}
      </ScrollView>
    </View>
  }
}

Columns.displayName = ComponentName.Columns

export default Columns
