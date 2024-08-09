import React, { useEffect, useRef } from "react"
import { Animated, StyleSheet } from "react-native"
import { ProgressProps } from "./ProgressProps"
import { View } from "@/components/view"
import { Text, TextLevels } from "@/components/text"
import { getStatusStyle, getColorStyle, TrilogyColor } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param percent {number} Progress percent
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param stacked {boolean} Stacked progress
 * @param uniqueLegend {stringabsolute} Unique legend
 * @param firstExtremLegend {string} First extremity legend, only with secondExtremLegend property
 * @param secondExtremLegend {string} Second extremity legend, only with firstExtremLegend property
 */
const Progress = ({
  children,
  percent,
  status,
  stacked,
  uniqueLegend,
  firstExtremLegend,
  secondExtremLegend,
  ...others
}: ProgressProps): JSX.Element => {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    typeof percent === "number" &&
      Animated.timing(animation, {
        toValue: percent,
        duration: 1000,
        useNativeDriver: false,
      }).start()
  }, [animation, percent])

  const height = 6
  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  })

  const styles = StyleSheet.create({
    progress: {
      flexDirection: "row",
      width: "100%",
      height: height,
      backgroundColor: getColorStyle(TrilogyColor.FONT, 1),
      borderRadius: 15,
    },
    percent: {
      alignSelf: "flex-start",
      height: height,
      backgroundColor: getStatusStyle(status) || getColorStyle(TrilogyColor.MAIN),
      borderRadius: 15,
    },
    progressItemFirst: {
      borderTopStartRadius: 6,
      borderBottomLeftRadius: 6,
    },
    progressItemSecond: {
      borderTopEndRadius: 6,
      borderBottomRightRadius: 6,
    },
    test: {
      width: 20,
      backgroundColor: "#333",
      height: 6,
    },
    uniqueLegend: {
      textAlign: "center",
      paddingTop: 5,
      fontWeight: "500",
    },
    extremLegend: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 5,
      fontWeight: "500",
    },
  })

  if (stacked) {
    return (
      <View style={styles.progress} {...others}>
        {Array.isArray(children) &&
          children.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (child: any, index: number) =>
              (child &&
                child.type.name === "ProgressItem" &&
                React.cloneElement(child, {
                  key: index,
                  style: [
                    index === 0 && styles.progressItemFirst,
                    index === children.length - 1 && styles.progressItemSecond,
                    {
                      backgroundColor: getStatusStyle(child.props.status),
                      height: height,
                    },
                  ],
                })) ||
              child
          )}
      </View>
    )
  }

  return (
    <>
      <View style={styles.progress} {...others}>
        <Animated.View style={[styles.percent, { width }]}>
          {children}
        </Animated.View>
      </View>
      {uniqueLegend && (
        <Text style={styles.uniqueLegend} level={TextLevels.THREE}>
          {uniqueLegend}
        </Text>
      )}
      {firstExtremLegend && secondExtremLegend && !uniqueLegend && (
        <View style={styles.extremLegend}>
          <Text level={TextLevels.THREE}>{firstExtremLegend}</Text>
          <Text level={TextLevels.THREE}>{secondExtremLegend}</Text>
        </View>
      )}
    </>
  )
}

Progress.displayName = ComponentName.Progress

export default Progress
