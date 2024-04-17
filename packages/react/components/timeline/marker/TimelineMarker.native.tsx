import React, {useContext} from 'react'
import {StyleSheet, View} from 'react-native'
import {TimelineMarkerProps} from './TimelineMarkerProps'
import {Icon, IconSize} from '../../icon'
import {TimelineItemContext} from '../item/TimelineItem.native'
import {getColorStyle, TrilogyColor} from '../../../objects'
import {TimelineHeightContext} from '../Timeline.native'
import {ComponentName} from '../../enumsComponentsName'

/**
 * TimelineMarker Native Component
 * @param children {ReactNode} Text child
 */
const TimelineMarker = ({iconName, iconColor}: TimelineMarkerProps): JSX.Element => {
  const {active, undone, done, cancel} = useContext(TimelineItemContext)
  const {height} = useContext(TimelineHeightContext)

  const styles = StyleSheet.create({
    marker: {
      flex: 1,
      alignSelf: 'flex-start',
      flexDirection: 'column',
    },
    divider: {
      height: height ? height - 48 : 74,
      borderStyle: 'solid',
      borderLeftWidth: 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor:
        (active && getColorStyle(TrilogyColor.MAIN)) ||
        (undone && getColorStyle(TrilogyColor.GREY_LIGHT)) ||
        (cancel && getColorStyle(TrilogyColor.GREY_DISABLED)) ||
        (done && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.GREY_LIGHT),
    },
    icon: {
      alignSelf: 'center',
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
              ? (active && TrilogyColor.WHITE) ||
              (undone && TrilogyColor.MAIN) ||
              (cancel && TrilogyColor.GREY_LIGHT) ||
              (done && TrilogyColor.WHITE) ||
              TrilogyColor.WHITE
              : iconColor
          }
          backgroundColor={
            (active && TrilogyColor.MAIN) ||
            (undone && TrilogyColor.GREY_LIGHT) ||
            (cancel && TrilogyColor.GREY_LIGHT) ||
            (done && TrilogyColor.MAIN) ||
            TrilogyColor.GREY_LIGHT
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
