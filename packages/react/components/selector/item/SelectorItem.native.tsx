import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SelectorItemProps } from './SelectorItemProps'
import { Text, TextLevels } from '../../text'
import { getColorStyle, TrilogyColor } from '../../../objects/facets/Color'
import { Spacer, SpacerSize } from '../../spacer'

/**
 * Selector Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param inverted {boolean} change style to inverted item
 * @param end {boolean} Change last SelectorItem style to SECONDAY color
 */
const SelectorItem = ({
  active,
  children,
  onClick,
  inverted,
  end,
  selectorIndex,
  testId,
  accessibilityLabel,
  ...others
}: SelectorItemProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)

  const styles = StyleSheet.create({
    selectorItem: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 75,
      height: 36,
      borderRadius: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      backgroundColor: 'transparent',
      borderColor: inverted ? getColorStyle(TrilogyColor.WHITE) : getColorStyle(TrilogyColor.TERTIARY),
      borderWidth: 1,
    },
    text: {
      color: activeItem ? getColorStyle(TrilogyColor.WHITE) : getColorStyle(TrilogyColor.TERTIARY),
      textAlign: 'center',
      paddingBottom: 10,
    },
    invertedText: {
      color: activeItem ? getColorStyle(TrilogyColor.TERTIARY) : getColorStyle(TrilogyColor.WHITE),
      textAlign: 'center',
      paddingBottom: 10,
    },
    active: {
      backgroundColor: inverted ? getColorStyle(TrilogyColor.WHITE) : getColorStyle(TrilogyColor.TERTIARY),
      borderColor: inverted ? getColorStyle(TrilogyColor.TERTIARY) : getColorStyle(TrilogyColor.WHITE),
    },
    end: {
      backgroundColor: getColorStyle(TrilogyColor.WHITE),
      borderColor: getColorStyle(TrilogyColor.SECONDARY),
    },
    endText: {
      color: getColorStyle(TrilogyColor.SECONDARY),
      textAlign: 'center',
      paddingBottom: 10,
    },
    firstItem: {
      marginLeft: 15,
    },
  })

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  return (
    <>
      {selectorIndex === 0 && <View style={styles.firstItem} />}
      <TouchableOpacity
        testID={testId}
        accessibilityLabel={accessibilityLabel}
        accessible={!!accessibilityLabel}
        style={[styles.selectorItem, activeItem && styles.active, end && styles.end]}
        onPress={(e?: unknown) => {
          setActiveItem(active || false)
          if (onClick) {
            onClick(e)
          }
        }}
        {...others}
      >
        {children && typeof children.valueOf() === 'string' && (
          <Text style={end ? styles.endText : inverted ? styles.invertedText : styles.text} level={TextLevels.TWO}>
            {String(children)}
          </Text>
        )}
      </TouchableOpacity>
      <Spacer horizontal size={SpacerSize.SMALL} />
    </>
  )
}

SelectorItem.displayName = 'SelectorItem'

export default SelectorItem
