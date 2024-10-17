import React, {createContext, useState} from "react"
import {Dimensions, LayoutChangeEvent, StyleSheet} from "react-native"
import {View} from "@/components/view"

import {Title} from "@/components/title"


import {ColumnsProps} from "./ColumnsProps"
import {ComponentName} from "@/components/enumsComponentsName"
import {ScrollView} from 'react-native'
import {ColumnsGap, ColumnsGapValue} from "@/components/columns/ColumnsTypes"

/**
 * Columns Native Component
 * @param children {React.ReactNode}
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param marginSize {ColumnsSize} Delete margins between columns with Size
 * @param scrollable {boolean} Make colomns scrollable to vertical. Don't work with props 'marginSize'
 * @param gap {ColumnsGap} Gap between columns
 */

export const ColumnsContext = createContext({scrollable: false})

const Columns = ({
                   children,
                   centered,
                   gap,
                   nbCols,
                   verticalCentered,
                   fullBleed,
                   scrollable,
                   multiline,
                   ...others
                 }: ColumnsProps): JSX.Element => {

  const [width, setWidth] = useState(0)

  const onLayoutHandler = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setWidth(width)
  }

  const styles = StyleSheet.create({
    columns: {
      flexDirection: "row",
      gap: ColumnsGapValue[(gap as ColumnsGap)] || 16,
//      minWidth: "100%",
      display: "flex",
      justifyContent: 'space-evenly',
    },
    centered: {
      alignSelf: "center",
    },
    verticalAlign: {
      justifyContent: "center",
      flex: 1,
    },
    multiline: {
      flexWrap: "wrap",
    }
  })

  const realGap =  ColumnsGapValue[(gap as ColumnsGap)] || 16

  if (!scrollable) {
    return (
      <>
        {/* eslint-disable-next-line react/jsx-no-undef */}
    <View style={[
      styles.columns,
          multiline && styles.multiline,
          centered,
          verticalCentered && styles.verticalAlign,
        ]}
        {...others}
        {...{ onLayout: onLayoutHandler }}
      >
        {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: [child.props.style,
                { width: nbCols && (width/nbCols) - realGap || child.props.size && (width*child.props.size/12) - realGap || 'auto' },
                child.props.narrow && { flex: 'none' }
              ]
            })
          )}
      </View>
      </>
    )
  }

    return <View style={{width: width, marginHorizontal: fullBleed ? -24 : 0}} {...{ onLayout: onLayoutHandler }}>
      <ScrollView horizontal contentContainerStyle={{
        width: 'auto',
        paddingHorizontal: 24,
        justifyContent: 'space-around',
        gap: realGap,
      }}>
        {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: [child.props.style, {
                width: width / (12 / (child.props.size || child.props.mobileSize || 12))-48,
                flexGrow: 0,
              }],
            })
          )}
      </ScrollView>
    </View>
}

Columns.displayName = ComponentName.Columns

export default Columns
