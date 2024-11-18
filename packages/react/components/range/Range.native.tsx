import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { RangeProps } from '@/components/range/RangeProps'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { TypographyBold } from '@/objects/Typography/TypographyBold'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

/**
 * Range Component
 * - -------------------------- MOBILE PROPERTIES -------------------------------
 * @param min {number} min length
 * @param max {number} max length
 * @param label {string} label of range
 * @param labelValueCursorMin {string} label to display next to value display
 * @param labelValueCursorMax {string} label to display next to value display
 * @param onChange {function}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param nameMin {string} name input min
 * @param idMin {string} id input min
 * @param nameMax{string} name input max
 * @param idMax {string} id input max
 * @param gap {number} space max between min and max cursor
 * @param valueCursorMin {number} number of input min
 * @param valueCursorMax {number} number of input max
 * @param onChangeMin {function} on change min cursor
 * @param onChangeMax {function} on change max cursor
 * @param testId {string} Test Id for Test Integration
 */
const Range = (
  { min, max, label, labelValueCursorMin, labelValueCursorMax, onChange }: RangeProps,
  ref: React.Ref<View>,
): JSX.Element => {
  const [values, setValues] = React.useState<number[]>([0, 100])
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
        values={[values[0], values[1]]}
        sliderLength={width}
        onValuesChange={(e) => {
          setValues(e)
          onChange && onChange({ inputName: 'range', inputValue: e })
        }}
        min={min}
        max={max}
        step={1}
        allowOverlap={false}
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
          {labelValueCursorMin && (
            <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
              {labelValueCursorMin}
            </Text>
          )}
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
            {values[1]}
          </Text>
          {labelValueCursorMax && (
            <Text level={TextLevels.THREE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
              {labelValueCursorMax}
            </Text>
          )}
        </View>
      </View>
    </View>
  )
}

Range.displayName = ComponentName.Range

export default React.forwardRef(Range)
