import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { BoxHeaderProps } from '@/components/box/header/BoxHeaderProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * Box Header Component
 * @param children {React.ReactNode} Childrens
 * @param help {string} Box Header Help Sticker
 * @param variant {TrilogyColor} Box Header backgroundColor
 * @param others
 */
const BoxHeader = ({ children, variant, help, ...others }: BoxHeaderProps, ref: React.Ref<View>): JSX.Element => {
  const statesContext = useContext(StatesContext)

  const headerBgc = variant ? getColorStyle(variant) : getColorStyle(TrilogyColor.MAIN)
  const textColor = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    boxHeader: {
      width: '100%',
      backgroundColor: headerBgc,
      padding: 10,
      paddingLeft: 16,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      marginTop: (statesContext.active && -2) || (statesContext.flat && -1) || 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      color: textColor,
      fontSize: 15,
      fontWeight: '600',
      textAlign: 'center',
    },
    helpContainer: {
      alignSelf: 'center',
    },
    help: {
      fontSize: 12,
      color: textColor,
      fontWeight: '600',
      lineHeight: 15,
    },
  })

  return (
    <View style={[styles.boxHeader]} ref={ref} {...others}>
      {children && typeof children.valueOf() === 'string' ? (
        <Text style={styles.text}>{String(children)}</Text>
      ) : (
        children
      )}

      {help && (
        <View style={styles.helpContainer}>
          <Text style={styles.help}>{help}</Text>
        </View>
      )}
    </View>
  )
}

BoxHeader.displayName = ComponentName.BoxHeader

export default React.forwardRef(BoxHeader)
