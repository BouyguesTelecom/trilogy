import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import LibToast from 'react-native-toast-message'
import { AlertNativeRef, AlertProps, ToasterAlertPosition, ToasterStatusProps } from '@/components/alert/AlertProps'
import ToasterContext from '@/components/alert/context'
import { ToasterShowContext } from '@/components/alert/context/ToasterContextProps'
import { getStatusIconName } from '@/helpers/status'
import { TrilogyColor } from '@/interfaces/Color'
import { TypographyBold } from '@/interfaces/TypographyBold'
import FlexBox from '@/components/flex-box/FlexBox.native'
import FlexItem from '@/components/flex-box/flex-item/FlexItem.native'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'
import { useTheme } from '@/hooks/useTheme'
import { getThemeBackgroundSubtle, getThemeBorderColor } from '@/helpers/getThemeColors'

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
    const { theme, mode } = useTheme()
    const isClosable = Boolean((others as any).closable)
    const colorStyle = mode === 'dark' ? darkStyles : lightStyles

    const containerStyle = useMemo(() => {
      if (!theme) return
      return {
        borderRadius: theme.radius.radiusSm,
        borderColor: theme.colors[status ? getThemeBorderColor(status) : 'borderInformation'],
        backgroundColor: theme.colors[status ? getThemeBackgroundSubtle(status) : 'bgInformationSubtle'],
      }
    }, [theme, status])

    return (
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={onClick ? 0.85 : 1}
        style={[
          generalStyles.container,
          status && colorStyle[status],
          banner && generalStyles.banner,
          onClick && generalStyles.onClickContainer,
          containerStyle,
          (others as any).style,
        ]}
      >
        <FlexBox ref={ref}>
          <View style={generalStyles.icon}>
            <Icon name={iconName ? iconName : getStatusIconName(status)} color={status || TrilogyColor.MAIN} />
          </View>

          <FlexItem>
            <Text
              style={[generalStyles.containerTitle]}
              level={TextLevels.ONE}
              typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}
            >
              {title}
            </Text>
            {description && <Spacer size={SpacerSize.ONE} />}
            {description && typeof description.valueOf() === 'string' ? (
              <Text level={TextLevels.TWO} style={generalStyles.description}>
                {description}
              </Text>
            ) : (
              <View style={generalStyles.description}>{description}</View>
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

  return (
    <View style={generalStyles.toaster}>
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

const generalStyles = StyleSheet.create({
  container: {
    width: '100%',
    pointerEvents: 'none',
    padding: 12,
    borderWidth: 1,
    borderRadius: THEME_TRILOGY.radius.radiusSm,
    borderColor: THEME_TRILOGY.colors.light.borderInformation,
    backgroundColor: THEME_TRILOGY.colors.light.bgInformationSubtle,
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
  banner: {
    borderWidth: 0,
    borderRadius: 0,
    textAlign: 'center',
  },
  toaster: {
    padding: 24,
  },
  onClickContainer: {
    pointerEvents: 'auto',
  },
})

const lightStyles = StyleSheet.create({
  ERROR: {
    borderColor: THEME_TRILOGY.colors.light.borderError,
    backgroundColor: THEME_TRILOGY.colors.light.bgErrorSubtle,
  },
  SUCCESS: {
    borderColor: THEME_TRILOGY.colors.light.borderSuccess,
    backgroundColor: THEME_TRILOGY.colors.light.bgSuccessSubtle,
  },
  WARNING: {
    borderColor: THEME_TRILOGY.colors.light.borderWarning,
    backgroundColor: THEME_TRILOGY.colors.light.bgWarningSubtle,
  },
  INFORMATION: {
    borderColor: THEME_TRILOGY.colors.light.borderInformation,
    backgroundColor: THEME_TRILOGY.colors.light.bgInformationSubtle,
  },
})

const darkStyles = StyleSheet.create({
  ERROR: {
    borderColor: THEME_TRILOGY.colors.dark.borderError,
    backgroundColor: THEME_TRILOGY.colors.dark.bgErrorSubtle,
  },
  SUCCESS: {
    borderColor: THEME_TRILOGY.colors.dark.borderSuccess,
    backgroundColor: THEME_TRILOGY.colors.dark.bgSuccessSubtle,
  },
  WARNING: {
    borderColor: THEME_TRILOGY.colors.dark.borderWarning,
    backgroundColor: THEME_TRILOGY.colors.dark.bgWarningSubtle,
  },
  INFORMATION: {
    borderColor: THEME_TRILOGY.colors.dark.borderInformation,
    backgroundColor: THEME_TRILOGY.colors.dark.bgInformationSubtle,
  },
})
