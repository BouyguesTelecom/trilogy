import React, { useEffect, useRef } from "react"
import { Animated, StyleSheet } from "react-native"
import { ProgressNativeRef, ProgressProps } from "./ProgressProps"
import { View } from "@/components/view"
import { Text, TextLevels } from "@/components/text"
import { getStatusStyle, getColorStyle, TrilogyColor } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param stacked {boolean} Stacked progress
 * @param legendCenter {stringabsolute} Unique legend
 * @param legendStart {string} First extremity legend, only with legendEnd property
 * @param legendEnd {string} Second extremity legend, only with legendStart property
 */
const Progress = React.forwardRef<ProgressNativeRef, ProgressProps>(({
                    children,
                    value,
                    max = 100,
                    status,
                    legendCenter,
                    legendStart,
                    legendEnd,
                    stacked,
                    ...others
                  }, ref): JSX.Element => {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    typeof value === "number" &&
    Animated.timing(animation, {
      toValue: value,
      duration: 1000,
      useNativeDriver: false,
    }).start()
  }, [animation, value])

  const height = 6
  const width = animation.interpolate({
    inputRange: [0, max],
    outputRange: ["0%", `${max}%`],
    extrapolate: "clamp",
  })

  const styles = StyleSheet.create({
    progress: {
      flexDirection: "row",
      width: "100%",
      height: height,
      backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: 15,
    },
    percent: {
      alignSelf: "flex-start",
      height: height,
      backgroundColor: getStatusStyle(status).color,
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
    legendCenter: {
      textAlign: "center",
      paddingTop: 5,
      fontWeight: "500",
      alignSelf: "center"
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
                child.type.name === 'ProgressItem' &&
                React.cloneElement(child, {
                  key: index,
                  style: [
                    index === 0 && styles.progressItemFirst,
                    index === children.length - 1 && styles.progressItemSecond,
                    { backgroundColor: getStatusStyle(child.props.alert), height: height },
                  ],
                })) ||
              child,
          )}
      </View>
    )
  }

  return (
    <>
      <View ref={ref} style={styles.progress} {...others}>
        <Animated.View style={[styles.percent, { width }]} />
      </View>
      {legendCenter && (
        <Text style={styles.legendCenter} level={TextLevels.THREE}>
          {legendCenter}
        </Text>
      )}
      {legendStart && legendEnd && !legendCenter && (
        <View style={styles.extremLegend}>
          <Text level={TextLevels.THREE}>{legendStart}</Text>
          <Text level={TextLevels.THREE}>{legendEnd}</Text>
        </View>
      )}
    </>
  )
})

Progress.displayName = ComponentName.Progress

export default Progress
