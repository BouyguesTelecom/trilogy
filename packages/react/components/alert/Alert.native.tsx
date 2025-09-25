import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { View } from '@/components/view'
import { getStatusIconName, getStatusStyle } from '@/objects/facets/Status'
import { Alignable, TrilogyColor, TypographyBold } from '@/objects/index'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import LibToast from 'react-native-toast-message'
import { Row, Rows } from '../rows'
import { AlertNativeRef, AlertProps, ToasterAlertPosition, ToasterStatusProps } from './AlertProps'
import ToasterContext from './context'
import { ToasterShowContext } from './context/ToasterContextProps'

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
    props: { title, description, closable, iconName, alert, onClick, status },
  })
}

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Aleert description content
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param info (boolean) Small info alert use it without button and arrow
 * @param onClick {Function} onClick Event for all alert
 * @param display {Boolean} Display Alert component
 */
const Alert = React.forwardRef<AlertNativeRef, AlertProps>(
  ({ banner, status, iconName, title, description, onClick, display = true, ...others }, ref): JSX.Element => {
    const { color, backgroundColor } = getStatusStyle(status)
    let alertView: JSX.Element

    const styles = StyleSheet.create({
      container: {
        width: '100%',
        paddingTop: 12,
        borderColor: status !== undefined ? color : backgroundColor,
        paddingBottom: 12,
        borderWidth: banner ? 0 : 1,
        backgroundColor: backgroundColor,
        borderRadius: banner ? 0 : 6,
        alignItems: 'baseline',
        textAlign: banner ? 'center' : 'left',
        paddingLeft: 12,
        paddingRight: 12,
      },
      description: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        paddingLeft: 8,
      },
      containerTitle: {
        paddingLeft: 8,
        fontWeight: 'bold',
      },
    })

    // eslint-disable-next-line prefer-const
    alertView = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <View style={[styles.container, (others as any).style]} ref={ref}>
        <Columns gap={2} verticalAlign={Alignable.ALIGNED_START}>
          <Column narrow>
            <View style={{ marginTop: -2 }}>
              <Icon name={iconName ? iconName : getStatusIconName(status)} color={status || TrilogyColor.MAIN} />
            </View>
          </Column>
          <Column>
            <Rows gap={description ? 2 : 0}>
              <Row>
                <Text style={[styles.containerTitle]} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
                  {title}
                </Text>
              </Row>
              <Row>
                {description && typeof description.valueOf() === 'string' ? (
                  <Text level={TextLevels.TWO} style={styles.description}>
                    {description}
                  </Text>
                ) : (
                  <View style={styles.description}>{description}</View>
                )}
              </Row>
            </Rows>
          </Column>
        </Columns>
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
  },
)

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
  })

  return (
    <View style={styles.toaster}>
      <TouchableOpacity style={styles.toasterContainer} onPress={onClick}>
        <Columns>
          <Column size={1}>{iconName && <Icon name={iconName} color={status || TrilogyColor.MAIN} />}</Column>
          <Column>
            {title && <Title level={TitleLevels.SIX}>{title}</Title>}
            {description && (
              <>
                <Spacer size={SpacerSize.TWO} />
                <Text level={TextLevels.THREE}>{description}</Text>
              </>
            )}
          </Column>
          {closable && (
            <Column size={1}>
              <TouchableOpacity
                onPress={(e) => {
                  LibToast.hide()
                  closable(e)
                }}
              >
                <Icon name={IconName.TIMES} size={IconSize.SMALL} />
              </TouchableOpacity>
            </Column>
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

Alert.displayName = ComponentName.Alert

export default Alert
