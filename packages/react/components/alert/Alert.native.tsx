import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { Align } from '@/objects/facets/Alignable'
import { TypographyBold } from '@/objects/Typography/TypographyBold'
import { getStatusIconName } from '@/objects/facets/Status'
import { FC, forwardRef, useMemo } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import LibToast from 'react-native-toast-message'
import { AlertNativeRef, AlertProps, ToasterAlertPosition, ToasterStatusProps } from '@/components/alert/AlertProps'
import ToasterContext from '@/components/alert/context'
import { ToasterShowContext } from '@/components/alert/context/ToasterContextProps'
import { useBorderColor } from '@/hooks/useBorderColor'
import { useBackgroundSubtleColor } from '@/hooks/useBackgroundSubtleColor'
import { useRadius } from '@/hooks/useRadius'
import { Spacer, SpacerSize } from '@/components/spacer'

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
 * @param description {string|ReactNode} Alert description content
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param banner {boolean} Banner style alert (no border, full-width)
 * @param onClick {Function} onClick Event for all alert
 * @param display {boolean} Display Alert component
 */
const Alert = forwardRef<AlertNativeRef, AlertProps>(
  ({ banner, status, iconName, title, description, onClick, display = true, ...others }, ref): JSX.Element => {
    let alertView: JSX.Element

    const borderColor = useBorderColor(status ?? 'information')
    const backgroundColor = useBackgroundSubtleColor(status ? `${status}-subtle` : 'information-subtle')
    const borderRadius = useRadius('md')

    const containerStyles = useMemo(
      () => ({
        borderColor,
        backgroundColor,
        borderRadius: banner ? 0 : borderRadius,
        borderWidth: banner ? 0 : 1,
        textAlign: banner ? 'center' : 'left',
      }),
      [borderColor, backgroundColor, borderRadius, banner],
    )

    // eslint-disable-next-line prefer-const
    alertView = (
      <View style={[styles.container, containerStyles, (others as any).style]} ref={ref}>
        <Columns gap={4} verticalAlign={Align.START}>
          <Column narrow>
            <View>
              <Icon name={iconName ? iconName : getStatusIconName(status)} color={status} />
            </View>
          </Column>
          <Column>
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
          </Column>
          {(others as any).closable && (
            <Column narrow>
              <Pressable onPress={(others as any).closable}>
                <Icon name={IconName.TIMES} size={IconSize.SMALLER} />
              </Pressable>
            </Column>
          )}
        </Columns>
      </View>
    )

    if (onClick && display) return <Pressable onPress={onClick}>{alertView}</Pressable>

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
export const ToasterAlert: FC<{ props: ToasterStatusProps }> = ({ props }) => {
  const { title, description, iconName, status, closable, onClick } = props

  return (
    <Alert
      title={title}
      description={description}
      iconName={iconName}
      status={status}
      onClick={onClick}
      {...{
        closable: (e: any) => {
          LibToast.hide()
          closable?.(e)
        },
      }}
    />
  )
}

/**
 * Toaster provider
 * @param children {ReactNode} Custom Toast Content
 * @param duration {number} Duration in MS (Default: 5000)
 * @param offset {number} Offset position margin (Default: 10 dp)
 * @param others
 */
const toastConfig = {
  tomatoToast: ({ props }: { props: ToasterStatusProps }) => {
    'use no memo'
    return <ToasterAlert props={props} />
  },
}

export const ToasterAlertProvider = ({ children }: ToasterStatusProps): JSX.Element => {
  return (
    <ToasterContext.Provider value={{ show: showToast, hide: LibToast.hide }}>
      {children}
      <LibToast config={toastConfig} />
    </ToasterContext.Provider>
  )
}

Alert.displayName = ComponentName.Alert

export default Alert

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    gap: 8,
  },
  description: {
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  containerTitle: {
    fontWeight: 'bold',
  },
})
