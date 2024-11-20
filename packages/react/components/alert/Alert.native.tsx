import React from 'react'
import type { View as ViewType } from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { AlertProps } from '@/components/alert/AlertProps'
import { Columns, ColumnsItem } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { TypographyBold } from '@/objects/Typography/TypographyBold'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getStatusIconName, getStatusStyle } from '@/objects/facets/Status'

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
const Alert = (
  { banner, status, iconName, title, description, onClick, display = true, ...others }: AlertProps,
  ref: React.Ref<ViewType>,
): JSX.Element => {
  const { color, backgroundColor } = getStatusStyle(status)
  let alertView: JSX.Element

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 10,
      borderColor: status !== undefined ? color : backgroundColor,
      paddingBottom: 10,
      borderWidth: banner ? 0 : 1,
      backgroundColor: backgroundColor,
      borderRadius: banner ? 0 : 6,
      alignItems: 'baseline',
      textAlign: banner ? 'center' : 'left',
      paddingLeft: 12,
      paddingRight: 12,
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      color: status !== undefined ? color : getColorStyle(TrilogyColor.MAIN),
    },
    description: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 5,
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
      <Columns>
        <ColumnsItem size={1}>
          <Icon style={styles.icon} name={iconName ? iconName : getStatusIconName(status)} />
        </ColumnsItem>

        <ColumnsItem size={11}>
          <Text style={styles.containerTitle} level={TextLevels.ONE} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
            {title}
          </Text>
          <Spacer size={SpacerSize.ONE} />
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

  return <View ref={ref} />
}

Alert.displayName = ComponentName.Alert

export default React.forwardRef(Alert)
