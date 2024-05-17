import * as React from "react"
import { Animated, StyleSheet, TouchableOpacity } from "react-native"
import { View } from "../../view"
import { getColorStyle, TrilogyColor } from "../../../objects"
import { Columns, ColumnsItem } from "../../columns"
import { Icon, IconColor, IconName, IconSize } from "../../icon"
import { DeletableNotificationProps } from "./DeletableNotificationProps"
import { Text, TextLevels } from "../../text"
import Swipeable from "react-native-gesture-handler/Swipeable"
import { ClickEvent } from "../../../events/OnClickEvent"
import { ComponentName } from "../../enumsComponentsName"

interface RightActionsProps {
  dragX: Animated.AnimatedInterpolation<"string | number">;
  onPress: ClickEvent;
}

/**
 * Deletable Notification
 * @param iconName {IconName} Icon Name Type
 * @param title {string} Deletable notification title
 * @param deletable {ClickEvent | boolean} Click event, pass true if you want deletable style without swipe
 * @param read {boolean} If notification has been read
 */
const DeletableNotification = ({
  iconName,
  title,
  deletable,
  read,
}: DeletableNotificationProps): JSX.Element => {
  const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    notification: {
      paddingTop: 0,
      paddingLeft: 12,
      paddingRight: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.33,
      shadowRadius: 2.22,
      elevation: 1,
    },
    deletableContainer: {
      width: "100%",
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 12,
      backgroundColor: !read ? "#F2FAFB" : backgroundColor,
      paddingLeft: 5,
      paddingRight: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    badge: {
      alignSelf: "center",
      width: 10,
      height: 10,
      marginRight: 8,
      marginLeft: 8,
      backgroundColor: getColorStyle(TrilogyColor.ERROR),
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    swipeInfo: {
      backgroundColor: "#eeeeee",
      width: 2,
      height: 20,
      borderRadius: 6,
      alignSelf: "flex-end",
      marginLeft: !read ? 0 : 26,
    },
    rightAction: {
      justifyContent: "center",
      flex: 1,
      alignItems: "flex-end",
      paddingLeft: 16,
      paddingRight: 4,
    },
    circled: {
      width: 60,
      height: 60,
      backgroundColor: "red",
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "flex-end",
      margin: 4,
    },
  })

  const RightActions = ({ dragX, onPress }: RightActionsProps) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1.5, 0.9],
      extrapolate: "clamp",
    })
    return (
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[styles.rightAction, { transform: [{ scale }] }]}>
          <Icon
            backgroundColor={TrilogyColor.ERROR}
            color={IconColor.BACKGROUND}
            size={IconSize.SMALL}
            circled
            name={IconName.TRASH}
          />
        </Animated.View>
      </TouchableOpacity>
    )
  }

  const rightActionTrigger = (
    progress: Animated.AnimatedInterpolation<"string | number">,
    onPress: ClickEvent
  ) => {
    if (Number(JSON.stringify(progress)) > 4) {
      onPress(null)
    }
  }

  const notification = (
    <View style={[styles.deletableContainer]}>
      <View style={styles.notification}>
        <Columns>
          <ColumnsItem verticalCenter size={2}>
            <Icon
              backgroundColor={TrilogyColor.MAIN}
              color={IconColor.BACKGROUND}
              size={IconSize.SMALL}
              circled
              name={iconName ? iconName : IconName.BELL}
            />
          </ColumnsItem>
          {title && (
            <ColumnsItem verticalCenter size={12}>
              <Text
                style={{ color: getColorStyle(TrilogyColor.MAIN) }}
                level={TextLevels.TWO}
              >
                {title}
              </Text>
            </ColumnsItem>
          )}
          <ColumnsItem verticalCenter size={1}>
            <View style={{ flexDirection: "row" }}>
              {!read ? <View style={styles.badge} /> : null}
              {typeof deletable !== "boolean" && (
                <View style={styles.swipeInfo} />
              )}
            </View>
          </ColumnsItem>
        </Columns>
      </View>
    </View>
  )

  return typeof deletable !== "boolean" ? (
    <Swipeable
      renderRightActions={(progress, dragX) => {
        rightActionTrigger(progress, deletable)
        return (
          <View>
            <RightActions dragX={dragX} onPress={deletable} />
            {notification}
          </View>
        )
      }}
    />
  ) : (
    notification
  )
}

DeletableNotification.displayName = ComponentName.DeletableNotification

export default DeletableNotification
