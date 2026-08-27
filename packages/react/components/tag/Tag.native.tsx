import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconSize } from '@/components/icon'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TagNativeRef, TagProps } from '@/components/tag/TagProps'
import { getRadiusStyle } from '@/helpers/radius'
import { getColorStyle } from '@/helpers/color'
import { getStatusStyle } from '@/helpers/status'
import { TrilogyColor } from '@/interfaces/Color'
import { Radius } from '@/interfaces/Radius'

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param inverted {boolean} Inverted tag
 * @param small {boolean} display small tag
 * @param iconName {IconName} display icon
 * @param testId {string} Test Id for Test Integration
 **/
const Tag = React.forwardRef<TagNativeRef, TagProps>(
  ({ label, variant, inverted, iconName, small, testId, ...others }, ref): JSX.Element => {
    const textColor = getColorStyle(inverted ? (variant as TrilogyColor) : TrilogyColor.MAIN)
    const variantBackgroundColor = getStatusStyle(variant).backgroundColor
    const invertedBackgroundColor = getColorStyle(TrilogyColor.BACKGROUND)
    const neutralBackgroundColor = getColorStyle(TrilogyColor.NEUTRAL_FADE)
    const borderFullRadius = getRadiusStyle(Radius.FULL)

    const styles = StyleSheet.create({
      tag: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: borderFullRadius,
        paddingHorizontal: 8,
        paddingVertical: 4,
        minHeight: small ? 24 : 32,
        backgroundColor:
          (inverted && invertedBackgroundColor) ||
          (variant && (variantBackgroundColor as TrilogyColor)) ||
          neutralBackgroundColor,
      },
      text: {
        alignSelf: 'center',
        alignItems: 'center',
        fontWeight: '500',
        justifyContent: 'center',
        color: textColor,
        fontSize: small ? 12 : 16,
      },
      icon: {
        marginRight: small ? 3 : 6,
      },
    })

    return (
      <View ref={ref} style={styles.tag} {...others}>
        {iconName && (
          <View style={styles.icon}>
            <Icon
              color={IconColor[variant ?? IconColor.MAIN]}
              size={small ? IconSize.SMALLER : IconSize.SMALL}
              name={iconName}
              testId={`${testId}-icon`}
            />
          </View>
        )}
        <Text style={styles.text}>{label}</Text>
      </View>
    )
  },
)

Tag.displayName = ComponentName.Tag

export default Tag
