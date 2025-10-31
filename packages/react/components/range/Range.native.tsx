import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor, TypographyBold } from '@/objects'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextLevels } from '../text'
import { RangeNativeProps, RangeNativeRef } from './RangeProps'

/**
 * Range Component
 * @param min {number} min length
 * @param max {number} max length
 * @param label {string} label of range
 * @param labelValueCursorMin {string} label to display next to value display
 * @param onChange {function}
 * @param value {number[]} array of values
 * @param simple {boolean} display one cursor
 * @param unit {string} display unit of values
 */
const Range = React.forwardRef<RangeNativeRef, RangeNativeProps>(
  ({ min, max, label, unit, onChange, value, simple }, ref): JSX.Element => {
    const [values, setValues] = React.useState<number[]>(value || simple ? [0] : [0, 100])
    const [width, setWidth] = React.useState<number>(0)

    const styles = StyleSheet.create({
      marker: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      markerLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -6,
      },
    })

    const Marker = (): JSX.Element => <View style={styles.marker}></View>

    return (
      <View
        ref={ref}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout
          setWidth(width)
        }}
      >
        <View style={{ marginBottom: -4 }}>
          <Text level={TextLevels.THREE}>{label && label}</Text>
        </View>

        <MultiSlider
          values={values}
          sliderLength={width}
          onValuesChange={(e) => {
            setValues(e)
            onChange && onChange({ inputName: 'range', inputValue: e })
          }}
          min={min}
          max={max}
          step={1}
          allowOverlap={simple}
          snapped
          customMarker={Marker}
          selectedStyle={{
            backgroundColor: getColorStyle(TrilogyColor.MAIN),
            height: 4,
          }}
          unselectedStyle={{
            backgroundColor: '#e1e1e1',
            height: 4,
          }}
        />
        <View style={styles.markerLabels}>
          <View style={{ flexDirection: 'row' }}>
            <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
              {values[0]}
            </Text>
            {unit && (
              <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                {unit}
              </Text>
            )}
          </View>

          {!simple && (
            <View style={{ flexDirection: 'row' }}>
              <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                {values[1]}
              </Text>
              {unit && (
                <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                  {unit}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    )
  },
)

Range.displayName = ComponentName.Range

export default Range
