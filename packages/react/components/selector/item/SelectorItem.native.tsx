import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { SelectorItemProps } from "./SelectorItemProps"
import { Text, TextLevels } from "../../text"
import { getColorStyle, TrilogyColor } from "../../../objects/facets/Color"
import { Spacer, SpacerSize } from "../../spacer"

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
                        accessibilityActivate = true,
                        ...others
                      }: SelectorItemProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)

  const styles = StyleSheet.create({
    selectorItem: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      minWidth: 75,
      borderRadius: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 7,
      paddingBottom: 7,
      backgroundColor: "transparent",
      borderColor: inverted
        ? getColorStyle(TrilogyColor.BACKGROUND)
        : getColorStyle(TrilogyColor.MAIN),
      borderWidth: 1,
    },
    text: {
      color: activeItem
        ? getColorStyle(TrilogyColor.BACKGROUND)
        : getColorStyle(TrilogyColor.MAIN),
      textAlign: "center",
    },
    invertedText: {
      color: activeItem
        ? getColorStyle(TrilogyColor.MAIN)
        : getColorStyle(TrilogyColor.BACKGROUND),
      textAlign: "center",
    },
    active: {
      backgroundColor: inverted
        ? getColorStyle(TrilogyColor.BACKGROUND)
        : getColorStyle(TrilogyColor.MAIN),
      borderColor: inverted
        ? getColorStyle(TrilogyColor.MAIN)
        : getColorStyle(TrilogyColor.BACKGROUND),
    },
    end: {
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      borderColor: getColorStyle(TrilogyColor.INFO),
    },
    endText: {
      color: getColorStyle(TrilogyColor.INFO),
      textAlign: "center",
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
        accessible={accessibilityActivate}
        style={[
          styles.selectorItem,
          activeItem && styles.active,
          end && styles.end,
        ]}
        onPress={(e?: unknown) => {
          setActiveItem(active || false)
          if (onClick) {
            onClick(e)
          }
        }}
        {...others}
      >
        {children && typeof children.valueOf() === "string" && (
          <Text
            style={
              end
                ? styles.endText
                : inverted
                  ? styles.invertedText
                  : styles.text
            }
            level={TextLevels.TWO}
          >
            {String(children)}
          </Text>
        )}
      </TouchableOpacity>
      <Spacer horizontal size={SpacerSize.SMALL} />
    </>
  )
}

SelectorItem.displayName = "SelectorItem"

export default SelectorItem
