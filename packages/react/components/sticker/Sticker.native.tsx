import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { StickerProps } from '@/components/sticker/StickerProps'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { getVariantStyle } from '@/objects/facets/Variant'

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param variant {StatusState} Sticker variant : primary only
 * @param small {boolean} Small Sticker
 * @param hat {boolean} Hat Sticker ( for box )
 * @param outlined {boolean} Outlined sticker
 * @param others
 */
const Sticker = React.forwardRef(
  ({ children, variant, small, hat, outlined, ...others }: StickerProps, ref: React.Ref<View>): JSX.Element => {
    const defaultColor = getColorStyle(TrilogyColor.MAIN)
    const styles = StyleSheet.create({
      sticker: {
        justifyContent: 'center',
        paddingTop: small ? 4 : 8,
        paddingBottom: small ? 4 : 8,
        paddingLeft: small ? 8 : 16,
        paddingRight: small ? 8 : 16,
        alignSelf: hat ? 'auto' : 'flex-start',
        borderWidth: outlined ? 2 : 0,
        borderColor: (outlined && defaultColor) || 'transparent',
        backgroundColor: (outlined && 'white') || (variant && getVariantStyle(variant)) || defaultColor,
        borderTopLeftRadius: (hat && 8) || (!small && 24) || (small && 16) || 0,
        borderTopRightRadius: (small && 16) || (hat && 8) || 24,
        borderBottomLeftRadius: (!small && !hat && 24) || (small && 16) || 0,
        borderBottomRightRadius: (!small && !hat && 24) || (small && 16) || 0,
        marginTop: hat ? -35 : 0,
        fontSize: small ? 12 : 16,
        top: hat ? 4 : 0,
      },
      text: {
        lineHeight: (!small && 20) || 15,
        textAlign: 'center',
        color: (outlined && defaultColor) || getColorStyle(TrilogyColor.BACKGROUND),
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: (!small && 16) || 12,
        transform: Platform.OS === 'ios' ? [{ skewX: '0deg' }] : [],
      },
    })

    return (
      <View style={styles.sticker} ref={ref} {...others}>
        {children && typeof children === 'string' ? <Text style={styles.text}>{children}</Text> : children}
      </View>
    )
  },
)

Sticker.displayName = ComponentName.Sticker
export default Sticker
