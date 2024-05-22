import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { NotificationProps } from "./NotificationProps"
import { Columns, ColumnsItem } from "../columns"
import { Button } from "../button"
import { View } from "../view"
import { Text, TextLevels } from "../text"
import { IconName } from "../icon/IconNameEnum"
import { AlertState, getAlertIconName } from "../../objects/facets/Alert"
import { getColorStyle, TrilogyColor } from "../../objects/facets/Color"
import { getInfoColorStyle } from "./NotificationEnum"
import DeletableNotification from "./deletable"
import { Icon, IconSize } from "../icon"
import { TypographyBold } from "../../objects"
import { ComponentName } from "../enumsComponentsName"

/**
 * Notification Component
 * @param hasIcon {boolean} Display icon, default true
 * @param iconName {IconName} Custom icon
 * @param title {string} Notification title content
 * @param description {string|ReactNode} Notification description content
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param buttonClick {ClickEvent} Click event for button
 * @param buttonContent {string} Button content
 * @param arrow {boolean} Notification with right arrow on right side (Uses only if not button content)
 * @param infoinfo (boolean) Small info notification use it without button and arrow
 * @param onClick {Function} onClick Event for all notification
 * @param children {React.ReactNode}
 * @param closable {Function} onClick Event on cross icon
 * @param deletable {Function | boolean} onClick Event on delete icon or slide over (), pass true if you want deletable style without swipe
 * @param read {boolean} only with notification deletable if notification is unread
 */
const Notification = ({
  hasIcon = true,
  iconName,
  title,
  description,
  alert,
  buttonContent,
  buttonClick,
  arrow,
  info,
  onClick,
  closable,
  deletable,
  read,
  ...others
}: NotificationProps): JSX.Element => {
  const backgroundColor = getColorStyle(TrilogyColor.BACKGROUND)
  const defaultIconSize = IconSize.SMALL
  /*
  const fontColor = getAlertStyle(alert) || getColorStyle(TrilogyColor.MAIN)
*/
  const infoColor =
    getInfoColorStyle(alert) || getInfoColorStyle(AlertState.INFO)
  const infoFontColor = TrilogyColor.MAIN

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: backgroundColor,
      paddingLeft: 16,
      paddingRight: 16,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.33,
      shadowRadius: 2.22,
      elevation: 1,
    },
    notification: {
      paddingTop: (description && 4) || 0,
      paddingLeft: 16,
      paddingRight: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    shadow: {},
    icon: {
      justifyContent: "center",
      alignItems: "center",
      position: (arrow && "absolute") || "relative",
    },
    description: {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 4,
      color: getColorStyle(TrilogyColor.MAIN),
      textAlignVertical: "center",
    },
    buttonContainer: {
      width: "100%",
      paddingTop: 17,
      paddingBottom: 17,
      backgroundColor: backgroundColor,
      paddingLeft: 12,
      paddingRight: 12,
      alignItems: "center",
      justifyContent: "center",
      textAlignVertical: "center",
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
    },
    info: {
      width: "100%",
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: infoColor,
      borderRadius: 6,
      alignItems: "baseline",
      paddingLeft: 12,
      paddingRight: 12,
    },
  })

  let notificationView: JSX.Element

  if (info && title) {
    notificationView = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <View style={[styles.info, (others as any).style]}>
        <Columns>
          {hasIcon && (
            <ColumnsItem size={1}>
              <Icon
                style={styles.icon}
                name={iconName ? iconName : getAlertIconName(alert)}
              />
            </ColumnsItem>
          )}
          {closable ? (
            <>
              <ColumnsItem size={hasIcon ? 10 : 11}>
                <Text
                  typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}
                  level={TextLevels.ONE}
                >
                  {title}
                </Text>
              </ColumnsItem>
              <ColumnsItem size={1}>
                <TouchableOpacity onPress={closable} activeOpacity={0.85}>
                  <Icon
                    style={styles.icon}
                    name={IconName.TIMES}
                    size={defaultIconSize}
                    color={infoFontColor}
                  />
                </TouchableOpacity>
              </ColumnsItem>
            </>
          ) : (
            <ColumnsItem size={hasIcon ? 11 : 12}>
              <Text
                typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}
                level={TextLevels.ONE}
              >
                {title}
              </Text>
            </ColumnsItem>
          )}
        </Columns>

        {description && (
          <Columns>
            {hasIcon && <ColumnsItem size={1} />}
            <ColumnsItem size={hasIcon ? 11 : 12}>
              {typeof description.valueOf() === "string" ? (
                <Text level={TextLevels.TWO} style={styles.description}>
                  {description}
                </Text>
              ) : (
                description
              )}
            </ColumnsItem>
          </Columns>
        )}
      </View>
    )
  } else if (description && !title && info) {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <View style={[styles.info, (others as any).style]}>
        <View style={{ width: "90%" }}>
          {typeof description.valueOf() === "string" ? (
            <Text level={TextLevels.TWO} style={styles.description}>
              {description}
            </Text>
          ) : (
            description
          )}
        </View>
      </View>
    )
  } else if (arrow && title) {
    notificationView = (
      <View style={[styles.buttonContainer, styles.container]} {...others}>
        <View style={[styles.notification]}>
          <Columns>
            {hasIcon && (
              <ColumnsItem verticalCenter size={1}>
                <Icon
                  style={styles.icon}
                  name={iconName ?? IconName.BELL}
                  size={defaultIconSize}
                />
              </ColumnsItem>
            )}

            {title && (
              <ColumnsItem verticalCenter size={hasIcon ? 10 : 11}>
                <Text level={TextLevels.ONE}>{title}</Text>
              </ColumnsItem>
            )}
            {arrow && (
              <ColumnsItem verticalCenter size={1}>
                <Icon
                  onClick={(e: unknown) => buttonClick && buttonClick(e)}
                  style={styles.icon}
                  name={IconName.ARROW_RIGHT}
                  size={defaultIconSize}
                />
              </ColumnsItem>
            )}
          </Columns>
        </View>
      </View>
    )
  } else if (buttonContent && title) {
    notificationView = (
      <View style={[styles.buttonContainer, styles.container]} {...others}>
        <View style={[styles.notification]}>
          <Columns>
            {hasIcon && (
              <ColumnsItem verticalCenter size={1}>
                <Icon
                  style={styles.icon}
                  name={iconName ?? IconName.BELL}
                  size={defaultIconSize}
                />
              </ColumnsItem>
            )}

            {title && (
              <ColumnsItem verticalCenter size={hasIcon ? 5 : 6}>
                <Text level={TextLevels.ONE}>{title}</Text>
              </ColumnsItem>
            )}
            {buttonContent && (
              <ColumnsItem size={3}>
                <View style={styles.button}>
                  <Button onClick={buttonClick} variant={"PRIMARY"}>
                    {buttonContent}
                  </Button>
                </View>
              </ColumnsItem>
            )}
          </Columns>
        </View>
      </View>
    )
  } else if (deletable) {
    notificationView = (
      <DeletableNotification
        title={title && title}
        iconName={iconName}
        deletable={deletable}
        read={read}
      />
    )
  } else {
    notificationView = (
      <View style={[styles.container, styles.shadow]} {...others}>
        <View style={[styles.notification, styles.shadow]}>
          <Columns>
            {hasIcon && (
              <ColumnsItem size={1}>
                <Icon
                  style={styles.icon}
                  name={iconName ?? IconName.BELL}
                  size={defaultIconSize}
                />
              </ColumnsItem>
            )}

            {title && (
              <ColumnsItem size={hasIcon ? 9 : 10}>
                <Text level={TextLevels.ONE}>{title}</Text>
              </ColumnsItem>
            )}
          </Columns>
          {description && (
            <Columns>
              {hasIcon && <ColumnsItem size={1} />}
              <ColumnsItem size={hasIcon ? 9 : 10}>
                <Text level={TextLevels.TWO} style={styles.description}>
                  {description}
                </Text>
              </ColumnsItem>
            </Columns>
          )}
        </View>
      </View>
    )
  }

  return onClick ? (
    <View style={styles.shadow}>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {notificationView}
      </TouchableOpacity>
    </View>
  ) : (
    notificationView
  )
}

Notification.displayName = ComponentName.Notification

export default Notification
