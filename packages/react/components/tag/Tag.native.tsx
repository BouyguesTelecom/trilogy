import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getStatusStyle } from '@/objects/facets/Status'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TagProps } from './TagProps'

/**
 * Tag Component
 * @param children {ReactNode} Add childrens for tag
 * @param variant {TagVariant} Available tag variants
 * @param inverted {boolean} Inverted tag
 * @param small {boolean} display small tag
 * @param iconName {IconName} display icon
 * @param testId {string} Test Id for Test Integration
 **/
const Tag = ({ label, variant, inverted, iconName, small, testId, ...others }: TagProps): JSX.Element => {
  const textColor = inverted ? getColorStyle(variant as TrilogyColor) : getColorStyle(TrilogyColor.MAIN)

  const backgroundColor = variant && getStatusStyle(variant).backgroundColor

  const styles = StyleSheet.create({
    tag: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'baseline',
      borderRadius: 15,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor:
        (inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
        (variant && (backgroundColor as TrilogyColor)) ||
        getColorStyle(TrilogyColor.NEUTRAL_FADE),
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
      marginTop: 1,
    },

    iconLeft: {
      marginRight: small ? 4 : 8,
    },

    button: {
      flexDirection: 'row',
    },
  })

  return (
    <View style={styles.tag} {...others}>
      {iconName && (
        <Icon
          size={small ? IconSize.SMALLER : IconSize.SMALL}
          name={iconName}
          testId={`${testId}-icon`}
        />
      )}
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

Tag.displayName = ComponentName.Tag

export default Tag
