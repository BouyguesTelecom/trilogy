import React, {createContext, ReactNode} from "react"
import {Dimensions, StyleSheet} from "react-native"
import {View} from "@/components/view"
import {ColumnsProps} from "./ColumnsProps"
import {ComponentName} from "@/components/enumsComponentsName"
import {ScrollView} from 'react-native'
import {SpacerSize, SpacerSizeValues} from "@/components/spacer"
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


//React.forwardRef((props:ColumnsProps, ref: React.LegacyRef<HTMLDivElement>)

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
  const styles = StyleSheet.create({
    columns: {
      flexDirection: "row",
      gap: ColumnsGapValue[(gap as ColumnsGap)] || 16,
      minWidth: "100%",
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
      <View
        style={[
          styles.columns,
          multiline && styles.multiline,
          centered,
          verticalCentered && styles.verticalAlign,
        ]}
        {...others}
      >
        {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              style: [child.props.style,
                { width: nbCols && `${100/nbCols}%` || child.props.size && `${100/12*child.props.size}%` || 'auto' },
                child.props.narrow && { flex: 'none' }
              ]
            })
          )}
      </View>
    )
  }

    return <View style={{width: Dimensions.get('screen').width, marginHorizontal: fullBleed ? -24 : 0}}>
      <ScrollView horizontal contentContainerStyle={{
        width: 'auto',
        paddingHorizontal: 24,
        justifyContent: 'space-evenly',
        gap: realGap,
      }}>
        {// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

Columns.displayName = ComponentName.Columns

export default Columns
