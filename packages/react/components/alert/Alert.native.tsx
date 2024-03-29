import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Columns, ColumnsItem } from '../columns'
import { View } from '../view'
import { Text, TextLevels } from '../text'
import { getAlertIconName, getAlertStyle } from '../../objects/facets/Alert'
import { getBackgroundOfVariant, getColorStyle, TrilogyColor } from '../../objects/facets/Color'
import { AlertProps } from './AlertProps'
import { Icon } from '../icon'
import { TypographyBold } from '../../objects'
import { ComponentName } from '../enumsComponentsName'

/**
 * Alert Component
 * @param iconName {IconName} Custom icon
 * @param title {string} Alert title content
 * @param description {string|ReactNode} Aleert description content
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param info (boolean) Small info alert use it without button and arrow
 * @param onClick {Function} onClick Event for all alert
 */

const Alert = ({ alert, iconName, title, description, onClick, display, ...others }: AlertProps): JSX.Element => {
  const backgroundColor = getBackgroundOfVariant(alert)
  const fontColor = getAlertStyle(alert) || getColorStyle(TrilogyColor.TERTIARY)
  let alertView: JSX.Element

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 10,
      borderColor: alert !== undefined ? fontColor : backgroundColor,
      paddingBottom: 10,
      borderWidth: 1,
      backgroundColor: backgroundColor,
      borderRadius: 6,
      alignItems: 'baseline',
      paddingLeft: 12,
      paddingRight: 12,
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      color: alert !== undefined ? fontColor : getColorStyle(TrilogyColor.TERTIARY),
    },
    description: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 5,
      textAlignVertical: 'center',
    },
  })

  // eslint-disable-next-line prefer-const
  alertView = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <View style={[styles.container, (others as any).style]}>
      <Columns>
        <ColumnsItem size={1}>
          <Icon style={styles.icon} name={iconName ? iconName : getAlertIconName(alert)} />
        </ColumnsItem>

        <ColumnsItem size={11}>
          <Text level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
            {title}
          </Text>
        </ColumnsItem>
      </Columns>

      {description && (
        <Columns>
          <ColumnsItem size={1} />
          <ColumnsItem size={11}>
            {typeof description.valueOf() === 'string' ? (
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

Alert.displayName = ComponentName.Alert

export default Alert
