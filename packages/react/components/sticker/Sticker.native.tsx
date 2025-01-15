import * as React from 'react'
import {Platform, StyleSheet, View} from 'react-native'
import {StickerProps} from './StickerProps'
import {getColorStyle, getVariantStyle, TrilogyColor} from '@/objects'
import {ComponentName} from '@/components/enumsComponentsName'
import {Text} from '@/components/text'
import {Icon, IconSize} from "@/components/icon";

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param hat {boolean} Hat Sticker ( for box )
 * @param outlined {boolean} Outlined sticker
 * @param iconName {IconName} Icon
 * @param others
 */
const Sticker = ({ variant, small, outlined, label, iconName, ...others }: StickerProps): JSX.Element => {
  const defaultColor = getColorStyle(TrilogyColor.MAIN)
  const styles = StyleSheet.create({
    sticker: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: small ? 4 : 8,
      paddingBottom: small ? 4 : 8,
      paddingLeft: small ? 8 : 16,
      paddingRight: small ? 8 : 16,
      alignSelf: 'flex-start',
      borderWidth: outlined ? 2 : 0,
      borderColor: (outlined && defaultColor) || 'transparent',
      backgroundColor: (outlined && 'white') || (variant && getVariantStyle(variant)) || defaultColor,
      borderTopLeftRadius: (!small && 24) || (small && 16) || 0,
      borderTopRightRadius: (small && 16) || 24,
      borderBottomLeftRadius: (!small && 24) || (small && 16) || 0,
      borderBottomRightRadius: (!small && 24) || (small && 16) || 0,
      marginTop: 0,
      fontSize: small ? 12 : 16,
      top: 0,
      alignItems: 'center',
      textAlign: 'center'
    },
    text: {
      lineHeight: (!small && 20) || 15,
      textAlign: 'center',
      color: (outlined && defaultColor) || getColorStyle(TrilogyColor.BACKGROUND),
      justifyContent: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: (!small && 16) || 12,
      transform: Platform.OS === 'ios' ? [{ skewX: '0deg' }] : [],
      marginLeft: (iconName && small && 4) || (iconName && !small && 5) || 0,
      marginTop: 1
    },
  })

  return (
    <View style={styles.sticker} {...others}>
      {iconName && <Icon color={TrilogyColor.BACKGROUND} size={small ? IconSize.SMALLER : IconSize.SMALL} name={iconName} />}
      {label && <Text style={styles.text}>{label}</Text>}
    </View>
  )
}

Sticker.displayName = ComponentName.Sticker

export default Sticker
