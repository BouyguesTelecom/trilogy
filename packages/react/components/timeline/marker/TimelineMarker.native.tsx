import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { TimelineMarkerProps } from "./TimelineMarkerProps"
import { Icon, IconSize } from "../../icon"
import { TimelineItemContext } from "../item/TimelineItem.native"
import { getColorStyle, TrilogyColor } from "../../../objects"
import { TimelineHeightContext } from "../Timeline.native"
import { ComponentName } from "../../enumsComponentsName"

/**
 * TimelineMarker Native Component
 * @param children {ReactNode} Text child
 */
const TimelineMarker = ({
  iconName,
  iconColor,
}: TimelineMarkerProps): JSX.Element => {
  const { active, undone, done, cancel } = useContext(TimelineItemContext)
  const { height } = useContext(TimelineHeightContext)

  const styles = StyleSheet.create({
    marker: {
      flex: 1,
      alignSelf: "flex-start",
      flexDirection: "column",
    },
    divider: {
      height: height ? height - 48 : 74,
      borderStyle: "solid",
      borderLeftWidth: 2,
      marginLeft: "auto",
      marginRight: "auto",
      borderColor:
        (active && getColorStyle(TrilogyColor.MAIN)) ||
        (undone && getColorStyle(TrilogyColor.NEUTRAL_LIGHT)) ||
        (cancel && getColorStyle(TrilogyColor.NEUTRAL_DARK)) ||
        (done && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.NEUTRAL_LIGHT),
    },
    icon: {
      alignSelf: "center",
    },
  })

  return (
    <View style={styles.marker}>
      <View style={styles.icon}>
        <Icon
          name={iconName}
          circled
          color={
            !iconColor
              ? (active && TrilogyColor.BACKGROUND) ||
                (undone && TrilogyColor.MAIN) ||
                (cancel && TrilogyColor.BACKGROUND) ||
                (done && TrilogyColor.BACKGROUND) ||
                TrilogyColor.BACKGROUND
              : iconColor
          }
          backgroundColor={
            (active && TrilogyColor.MAIN) ||
            (undone && TrilogyColor.NEUTRAL_LIGHT) ||
            (cancel && TrilogyColor.NEUTRAL_DARK) ||
            (done && TrilogyColor.MAIN) ||
            TrilogyColor.NEUTRAL_LIGHT
          }
          size={IconSize.SMALL}
        />
      </View>

      <View style={styles.divider}></View>
    </View>
  )
}

TimelineMarker.displayName = ComponentName.TimelineMarker

export default TimelineMarker
