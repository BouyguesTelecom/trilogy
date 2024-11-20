import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import LibToast from 'react-native-toast-message'

import { ToasterAlertPosition, ToasterStatusProps } from '@/components/alert/AlertProps'
import ToasterContext from '@/components/alert/context'
import { ToasterShowContext } from '@/components/alert/context/ToasterContextProps'
import { Columns, ColumnsItem } from '@/components/columns'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { View } from '@/components/view'
import { getStatusStyle } from '@/objects/facets/Status'

/**
 * Ui of the toast
 * @param title {string} Notification title content
 * @param description {string|ReactNode} Notification description content
 * @param iconName {IconName} Custom icon
 * @param status {StatusState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param onClick {Function} onClick Event for all notification
 * @param closable {Function} onClick Event on cross icon
 */
export const ToasterAlert: React.FC<{ props: ToasterStatusProps }> = ({ props }) => {
  const { title, description, iconName, status, closable, onClick } = props
  const { color, backgroundColor } = getStatusStyle(status)

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
          <ColumnsItem size={1}>{iconName && <Icon style={styles.icon} name={iconName} />}</ColumnsItem>
          <ColumnsItem>
            {title && <Title level={TitleLevels.SIX}>{title}</Title>}
            {description && (
              <>
                <Spacer size={SpacerSize.TWO} />
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
export const ToasterAlertProvider = ({ children }: ToasterStatusProps): JSX.Element => {
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

/**
 * Function call by context for showing toast
 * @param params {ToasterShowContext}
 */
const showToast: ToasterShowContext = (params: ToasterStatusProps) => {
  const { position, duration, offset, title, description, onClick, closable, onHide, iconName, status } = params

  LibToast.show({
    type: 'tomatoToast',
    position: position || ToasterAlertPosition.BOTTOM,
    bottomOffset: offset || 10,
    topOffset: offset || 10,
    visibilityTime: duration || 5000,
    onHide,
    props: { title, description, closable, iconName, alert, onClick },
  })
}
