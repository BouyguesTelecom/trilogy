import React, { useContext } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg/css'

import { ComponentName } from '@/components/enumsComponentsName'
import { IconStatus, IconStatusPosition } from '@/components/icon/IconEnum'
import { StatusIconProps } from '@/components/icon/status/StatusIconProps'
import { TrilogyThemeContext } from '@/context/providerTheme.native'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

const StatusIcon = React.forwardRef(
  (
    { name, status, statusPosition, size, stretched, color, testId }: StatusIconProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
    const {
      theme: { icons },
    } = useContext(TrilogyThemeContext)

    const statusIcon = status === 'SUCCESS' ? 'tri-check-circle' : 'tri-times'

    const styles = StyleSheet.create({
      icon: {
        transform: Platform.OS === 'ios' ? (stretched && [{ skewX: '20deg' }]) || [{ skewX: '0deg' }] : [],
      },
      smallStatusIconTop: {
        position: 'absolute',
        right: 0,
        top: -3,
      },
      smallStatusIconBottom: {
        position: 'absolute',
        right: 0,
        bottom: -3,
      },
      smallWarningStatusTop: {
        position: 'absolute',
        right: 0,
        top: 0,
        minWidth: size / 2,
        height: size / 2,
        backgroundColor: getColorStyle(TrilogyColor.WARNING),
        borderRadius: 30,
      },
      smallWarningStatusBottom: {
        position: 'absolute',
        alignSelf: 'baseline',
        right: 0,
        bottom: 0,
        minWidth: size / 2,
        height: size / 2,
        backgroundColor: getColorStyle(TrilogyColor.WARNING),
        borderRadius: 30,
      },
    })

    return (
      <View testID={testId} ref={ref}>
        {icons && (
          <View>
            <WithLocalSvg
              style={styles.icon}
              asset={icons[name.toString().replace('tri-picto-', '').replace('tri-', '')]}
              width={size}
              height={size}
              color={color}
            />
            {status === IconStatus.WARNING ? (
              <View
                style={
                  statusPosition === IconStatusPosition.TOP
                    ? styles.smallWarningStatusTop
                    : styles.smallWarningStatusBottom
                }
              />
            ) : (
              <WithLocalSvg
                style={
                  statusPosition === IconStatusPosition.TOP ? styles.smallStatusIconTop : styles.smallStatusIconBottom
                }
                asset={icons[statusIcon.toString().replace('tri-picto-', '').replace('tri-', '')]}
                width={20}
                height={20}
                color={color}
              />
            )}
          </View>
        )}
      </View>
    )
  },
)

StatusIcon.displayName = ComponentName.StatusIcon
export default StatusIcon
