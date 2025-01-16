import { ColumnsGapValue, GapSize } from '@/components/columns/ColumnsTypes'
import { ComponentName } from '@/components/enumsComponentsName'
import { View } from '@/components/view'
import { Alignable, getAlignStyle } from '@/objects'
import React, { createContext, useState } from 'react'
import { Dimensions, LayoutChangeEvent, ScrollView, StyleSheet } from 'react-native'
import { ColumnsProps } from './ColumnsProps'

/**
 * Columns Native Component
 * @param children {React.ReactNode}
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param scrollable {boolean} Makes columns vertically scrollable.
 * @param gap {GapSize} Gap between columns
 */

export const ColumnsContext = createContext({ scrollable: false })

const Columns = ({
  children,
  align,
  gap,
  verticalAlign,
  fullBleed,
  scrollable,
  multiline,
  ...others
}: ColumnsProps): JSX.Element => {
  const [width, setWidth] = useState(0)
  const [enlarge, setEnlarge] = useState(0)

  const onLayoutHandler = (event: LayoutChangeEvent) => {
    if (!width) {
      const { width } = event.nativeEvent.layout
      if (fullBleed) {
        setEnlarge((Dimensions.get('screen').width - width) / 2)
      }
      setWidth(width)
    }
  }
  const realGap = (typeof gap === 'undefined' && 16) || ColumnsGapValue[gap as GapSize]

  const styles = StyleSheet.create({
    columns: {
      width: width ? width + enlarge * 2 : '100%',
      marginHorizontal: -enlarge,
      paddingHorizontal: enlarge,
      flexDirection: 'row',
      gap: realGap,
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    centered: {
      alignSelf: 'center',
    },
    verticalAlign: {
      alignItems: getAlignStyle(verticalAlign),
    },
    multiline: {
      flexWrap: 'wrap',
    },
    scrollContainer: {
      width: 'auto',
      paddingHorizontal: enlarge,
      justifyContent: 'space-around',
      gap: realGap,
    },
    mobile: {
      flexDirection: 'column',
    },
  })

  if (!scrollable) {
    return (
      <>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <View
          style={[
            styles.columns,
            multiline && styles.multiline,
            align === Alignable.ALIGNED_CENTER && styles.centered,
            verticalAlign && styles.verticalAlign,
          ]}
          {...others}
          {...{ onLayout: onLayoutHandler }}
        >
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.Children.map(children, (child: any) => {
              return (
                child &&
                React.cloneElement(child, {
                  style: [
                    {
                      height: scrollable ? '100%' : undefined,
                      flex: child.props.narrow ? 0 : 1,
                      flexGrow: child.props.size || child.props.narrow ? 0 : 1,
                      flexShrink: child.props.narrow ? 1 : 0,
                      flexBasis: child.props.size
                        ? (child.props.size / 12) * width -
                          realGap * ((React.Children.count(children) - 1) / React.Children.count(children))
                        : 'auto',
                    },
                  ],
                })
              )
            })
          }
        </View>
      </>
    )
  }

  return (
    <View
      style={{
        width: `100% + ${enlarge * 2}px`,
        marginHorizontal: -enlarge,
      }}
      {...{ onLayout: onLayoutHandler }}
    >
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.Children.map(children, (child: any) => {
            return React.cloneElement(child, {
              style: [
                child.props.style,
                {
                  width: child.props?.size
                    ? (child.props?.size / 12) * width -
                      realGap * ((React.Children.count(children) - 1) / React.Children.count(children))
                    : child.props?.narrow
                    ? 'auto'
                    : width - 2 * realGap,
                },
              ],
              scrollable: true,
            })
          })
        }
      </ScrollView>
    </View>
  )
}

Columns.displayName = ComponentName.Columns

export default Columns
