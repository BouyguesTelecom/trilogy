import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { forwardRef, useMemo, useCallback } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import LibToast from 'react-native-toast-message'
import { AlertNativeRef, AlertProps, ToasterAlertPosition, ToasterStatusProps } from '@/components/alert/AlertProps'
import ToasterContext from '@/components/alert/context'
import { ToasterShowContext } from '@/components/alert/context/ToasterContextProps'
import { getStatusIconName } from '@/helpers/status'
import { useThemeRadius } from '@/hooks/useThemeRadius'
import { useThemeBackgroundSubtle } from '@/hooks/useThemeBackground'
import { useThemeTextColor } from '@/hooks/useThemeTextColor'
import { TrilogyColor } from '@/interfaces/Color'
import { TypographyBold } from '@/interfaces/TypographyBold'
import FlexBox from '@/components/flex-box/FlexBox.native'
import FlexItem from '@/components/flex-box/flex-item/FlexItem.native'

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Alert description content
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param banner {boolean} Banner style alert (no border, full-width)
 * @param onClick {Function} onClick Event for all alert
 * @param display {boolean} Display Alert component
 */
const Alert = forwardRef<AlertNativeRef, AlertProps>(
  ({ banner, status, iconName, title, description, onClick, display = true, ...others }, ref): JSX.Element => {
    const backgroundColor = useThemeBackgroundSubtle(status)
    const { radiusSm } = useThemeRadius()
    const color = useThemeTextColor(status)
    const isClosable = useMemo(() => (others as any).closable, [others])

    const styles = useMemo(
      () =>
        StyleSheet.create({
          container: {
            width: '100%',
            borderColor: status !== undefined ? color : backgroundColor,
            borderWidth: banner ? 0 : 1,
            backgroundColor: backgroundColor,
            borderRadius: banner ? 0 : radiusSm,
            textAlign: banner ? 'center' : 'left',
            padding: 12,
            pointerEvents: onClick ? 'auto' : 'none',
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
          icon: {
            marginTop: -2,
          },
        }),
      [banner, status, color, backgroundColor, radiusSm, onClick],
    )

    return (
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={onClick ? 0.85 : 1}
        style={[styles.container, (others as any).style]}
      >
        <FlexBox ref={ref}>
          <View style={styles.icon}>
            <Icon name={iconName ? iconName : getStatusIconName(status)} color={status || TrilogyColor.MAIN} />
          </View>

          <FlexItem>
            <Text style={[styles.containerTitle]} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
              {title}
            </Text>
            {description && <Spacer size={SpacerSize.ONE} />}
            {description && typeof description.valueOf() === 'string' ? (
              <Text level={TextLevels.TWO} style={styles.description}>
                {description}
              </Text>
            ) : (
              <View style={styles.description}>{description}</View>
            )}
          </FlexItem>
          {isClosable && (
            <TouchableOpacity onPress={(others as any).closable}>
              <Icon name={IconName.TIMES} size={IconSize.SMALL} />
            </TouchableOpacity>
          )}
        </FlexBox>
      </TouchableOpacity>
    )
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
  const styles = useMemo(
    () =>
      StyleSheet.create({
        toaster: {
          padding: 24,
        },
      }),
    [],
  )

  return (
    <View style={styles.toaster}>
      <Alert
        title={title}
        description={description}
        iconName={iconName}
        status={status}
        onClick={onClick}
        {...{
          closable: (e: any) => {
            LibToast.hide()
            closable && closable(e)
          },
        }}
      />
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

  const showToast: ToasterShowContext = useCallback((params: ToasterStatusProps) => {
    const { position, duration, offset, title, description, onClick, closable, onHide, iconName, status } = params
    LibToast.show({
      type: 'tomatoToast',
      position: position || ToasterAlertPosition.BOTTOM,
      bottomOffset: offset || 10,
      topOffset: offset || 10,
      visibilityTime: duration || 5000,
      onHide,
      props: { title, description, closable, iconName, onClick, status },
    })
  }, [])

  return (
    <ToasterContext.Provider value={{ show: showToast, hide: LibToast.hide }}>
      {children}
      <LibToast config={toastConfig} />
    </ToasterContext.Provider>
  )
}

Alert.displayName = ComponentName.Alert

export default Alert
