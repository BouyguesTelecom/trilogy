import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconSize } from '@/components/icon'
import { SpacerSize } from '@/components/spacer'
import { TimelineItemContext } from '@/components/timeline/item/TimelineItem.native'
import { TimelineMarkerNativeRef, TimelineMarkerProps } from '@/components/timeline/marker/TimelineMarkerProps'
import { TimelineHeightContext } from '@/components/timeline/Timeline.native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { useContext, forwardRef } from 'react'
import { View } from 'react-native'
import { Theme } from '@/constants/theme'
import { memoStyles } from '@/helpers/memoStyles'
import { BackgroundColor } from '@/interfaces/colors'

/**
 * TimelineMarker Native Component
 * @param iconName {IconName} Icon Name - sample : IconName.CHECK
 * @param iconColor {IconColor} Icon Color
 * @param testId {string} Test Id for Test Integration
 */
const TimelineMarker = forwardRef<TimelineMarkerNativeRef, TimelineMarkerProps>(({ iconName }, ref): JSX.Element => {
  const { active, done, cancel } = useContext(TimelineItemContext)
  const { height } = useContext(TimelineHeightContext)

  const styles = memoStyles({
    marker: {
      flex: 1,
      alignSelf: 'flex-start',
      flexDirection: 'column',
    },
    divider: {
      borderRadius: Theme.radius.full,
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
            (active && IconColor.INVERSE) ||
            (cancel && IconColor.PRIMARY) ||
            (done && IconColor.INVERSE) ||
            IconColor.INVERSE
          }
          backgroundColor={
            (active && BackgroundColor.SECONDARY) ||
            (cancel && BackgroundColor.SECONDARY_SUBTLE) ||
            (done && BackgroundColor.PRIMARY) ||
            BackgroundColor.SECONDARY_SUBTLE
          }
          size={IconSize.SMALL}
        />
      </View>

      <View style={styles.divider}></View>
    </View>
  )
})

TimelineMarker.displayName = ComponentName.TimelineMarker

export default TimelineMarker
