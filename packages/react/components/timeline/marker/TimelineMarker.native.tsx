import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon/index.native'
import { SpacerSize } from '@/components/spacer/index.native'
import { TimelineItemContext } from '@/components/timeline/item/TimelineItem.native'
import { TimelineMarkerNativeRef, TimelineMarkerProps } from '@/components/timeline/marker/TimelineMarkerProps'
import { TimelineHeightContext } from '@/components/timeline/Timeline.native'
import { getColorStyle, TrilogyColor } from '@/objects/index.native'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * TimelineMarker Native Component
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param testId {string} Test Id for Test Integration
 */
const TimelineMarker = React.forwardRef<TimelineMarkerNativeRef, TimelineMarkerProps>(
  ({ iconName }, ref): JSX.Element => {
    const { active, done, cancel } = useContext(TimelineItemContext)
    const { height } = useContext(TimelineHeightContext)

    const styles = StyleSheet.create({
      marker: {
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'column',
      },
      divider: {
        top: SpacerSize.TWO,
        height: height ? height - 48 : 74,
        borderStyle: 'solid',
        borderLeftWidth: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor:
          (active && getColorStyle(TrilogyColor.MAIN)) ||
          (cancel && getColorStyle(TrilogyColor.NEUTRAL)) ||
          (done && getColorStyle(TrilogyColor.MAIN)) ||
          getColorStyle(TrilogyColor.NEUTRAL),
      },
      icon: {
        alignSelf: 'center',
      },
    })

    return (
      <View ref={ref} style={styles.marker}>
        <View style={styles.icon}>
          <Icon
            name={iconName}
            circled
            color={
              (active && TrilogyColor.BACKGROUND) ||
              (cancel && TrilogyColor.NEUTRAL_FADE) ||
              (done && TrilogyColor.BACKGROUND) ||
              TrilogyColor.BACKGROUND
            }
            backgroundColor={
              (active && TrilogyColor.MAIN) ||
              (cancel && TrilogyColor.NEUTRAL) ||
              (done && TrilogyColor.MAIN) ||
              TrilogyColor.NEUTRAL
            }
            size={IconSize.SMALL}
          />
        </View>

        <View style={styles.divider}></View>
      </View>
    )
  },
)

TimelineMarker.displayName = ComponentName.TimelineMarker

export default TimelineMarker
