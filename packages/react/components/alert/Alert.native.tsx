import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Columns, ColumnsItem } from "@/components/columns"
import { Spacer, SpacerSize } from "@/components/spacer"
import { View } from "@/components/view"
import { Text, TextLevels } from "@/components/text"
import { Title, TitleLevels } from "@/components/title"
import { getAlertIconName, getAlertStyle } from "@/objects/facets/Alert"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { AlertProps, ToasterAlertPosition, ToasterAlertProps } from "./AlertProps"
import { Icon, IconName, IconSize } from "@/components/icon"
import { TypographyBold } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"
import ToasterContext from "./context"
import LibToast from "react-native-toast-message"
import { ToasterShowContext } from "./context/ToasterContextProps"

/**
 * Function call by context for showing toast
 * @param params {ToasterShowContext}
 */
const showToast: ToasterShowContext = (params: ToasterAlertProps) => {
  const {
    position,
    duration,
    offset,
    title,
    description,
    onClick,
    closable,
    onHide,
    iconName,
    alert,
  } = params

  LibToast.show({
    type: "tomatoToast",
    position: position || ToasterAlertPosition.BOTTOM,
    bottomOffset: offset || 10,
    topOffset: offset || 10,
    visibilityTime: duration || 5000,
    onHide,
    props: { title, description, closable, iconName, alert, onClick },
  })
}

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Aleert description content
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param info (boolean) Small info alert use it without button and arrow
 * @param onClick {Function} onClick Event for all alert
 */
const Alert = ({
  alert,
  iconName,
  title,
  description,
  onClick,
  display,
  ...others
}: AlertProps): JSX.Element => {
  const backgroundColor = getColorStyle(alert as TrilogyColor, 1)
  const fontColor = getAlertStyle(alert) || getColorStyle(TrilogyColor.MAIN)
  let alertView: JSX.Element

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingTop: 10,
      borderColor: alert !== undefined ? fontColor : backgroundColor,
      paddingBottom: 10,
      borderWidth: 1,
      backgroundColor: backgroundColor,
      borderRadius: 6,
      alignItems: "baseline",
      paddingLeft: 12,
      paddingRight: 12,
    },
    icon: {
      justifyContent: "center",
      alignItems: "center",
      color: alert !== undefined ? fontColor : getColorStyle(TrilogyColor.MAIN),
    },
    description: {
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 5,
      textAlignVertical: "center",
      paddingLeft: 8,
    },
    containerTitle: {
      paddingLeft: 8,
      fontWeight: "bold",
    },
  })

  // eslint-disable-next-line prefer-const
  alertView = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <View style={[styles.container, (others as any).style]}>
      <Columns>
        <ColumnsItem size={1}>
          <Icon
            style={styles.icon}
            name={iconName ? iconName : getAlertIconName(alert)}
          />
        </ColumnsItem>

        <ColumnsItem size={11}>
          <Text
            style={styles.containerTitle}
            level={TextLevels.ONE}
            typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}
          >
            {title}
          </Text>
          <Spacer size={SpacerSize.SMALLER} />
        </ColumnsItem>
      </Columns>

      {description && (
        <Columns>
          <ColumnsItem size={1} />
          <ColumnsItem size={11}>
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

  if (onClick && display)
    return (
      <View>
        <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
          {alertView}
        </TouchableOpacity>
      </View>
    )

  if (!onClick && display) return alertView

  return <View />
}

/**
 * Ui of the toast
 * @param title {string} Notification title content
 * @param description {string|ReactNode} Notification description content
 * @param iconName {IconName} Custom icon
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all notification
 * @param closable {Function} onClick Event on cross icon
 */
export const ToasterAlert: React.FC<{ props: ToasterAlertProps }> = ({ props }) => {
  const { title, description, iconName, alert, closable, onClick } = props

  const color = getAlertStyle(alert) || getColorStyle(TrilogyColor.MAIN)
  const backgroundColor = getColorStyle(alert as TrilogyColor, 1)

  const styles = StyleSheet.create({
    toaster: {
      padding: 24,
    },
    toasterContainer: {
      borderWidth: 1,
      borderColor: color,
      backgroundColor: backgroundColor,
      padding: 14,
      borderRadius: 6,
    },
    icon: {
      fontSize: 16,
      color: color,
      marginTop: 1.5,
    },
  })

  return (
    <View style={styles.toaster}>
      <TouchableOpacity style={styles.toasterContainer} onPress={onClick}>
        <Columns>
          <ColumnsItem size={1}>
            {iconName && <Icon style={styles.icon} name={iconName} />}
          </ColumnsItem>
          <ColumnsItem>
            {title && <Title level={TitleLevels.SIX}>{title}</Title>}
            {description && (
              <>
                <Spacer size={SpacerSize.SMALL} />
                <Text level={TextLevels.THREE}>{description}</Text>
              </>
            )}
          </ColumnsItem>
          {closable && (
            <ColumnsItem size={1}>
              <TouchableOpacity
                onPress={(e) => {
                  LibToast.hide()
                  closable(e)
                }}
              >
                <Icon name={IconName.TIMES} size={IconSize.SMALL} />
              </TouchableOpacity>
            </ColumnsItem>
          )}
        </Columns>
      </TouchableOpacity>
    </View>
  )
}

/**
 * Toaster provider
 * @param children {React.ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param others
 */
export const ToasterAlertProvider = ({ children }: ToasterAlertProps): JSX.Element => {
  const toastConfig = {
    tomatoToast: ToasterAlert,
  }

  return (
    <ToasterContext.Provider value={{ show: showToast, hide: LibToast.hide }}>
      {children}
      <LibToast config={toastConfig} />
    </ToasterContext.Provider>
  )
}

Alert.displayName = ComponentName.Alert

export default Alert
