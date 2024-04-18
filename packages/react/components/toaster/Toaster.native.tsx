import * as React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import LibToast from "react-native-toast-message"
import { ToasterPosition, ToasterProps } from "./ToasterProps"
import { View } from "../view"
import { Title } from "../title"
import { Text, TextLevels } from "../text"
import { Icon, IconName, IconSize } from "../icon"
import { Columns, ColumnsItem } from "../columns"
import { getAlertStyle, getBackgroundOfVariant, TrilogyColor, } from "../../objects"
import { Spacer, SpacerSize } from "../spacer"
import ToasterContext from "./context"
import { ToasterShowContext } from "./context/ToasterContextProps"
import { ComponentName } from "../enumsComponentsName"

/**
 * Function call by context for showing toast
 * @param params {ToasterShowContext}
 */
const showToast: ToasterShowContext = (params: ToasterProps) => {
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
    position: position || ToasterPosition.BOTTOM,
    bottomOffset: offset || 10,
    topOffset: offset || 10,
    visibilityTime: duration || 5000,
    onHide,
    props: { title, description, closable, iconName, alert, onClick },
  })
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
const Toaster: React.FC<{ props: ToasterProps }> = ({ props }) => {
  const { title, description, iconName, alert, closable, onClick } = props

  const color =
    getAlertStyle(alert) || getBackgroundOfVariant(TrilogyColor.INFO)

  const backgroundColor = getBackgroundOfVariant(alert)

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
            {title && <Title>{title}</Title>}
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
const ToasterProvider = ({ children }: ToasterProps): JSX.Element => {
  const toastConfig = {
    tomatoToast: Toaster,
  }

  return (
    <ToasterContext.Provider value={{ show: showToast, hide: LibToast.hide }}>
      {children}
      <LibToast config={toastConfig} />
    </ToasterContext.Provider>
  )
}

ToasterProvider.displayName = ComponentName.ToasterProvider

export default ToasterProvider
