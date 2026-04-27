import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxContext } from '../context/boxContext'
import { BoxHeaderNativeRef, BoxHeaderProps } from './BoxHeaderProps'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param variant {TrilogyColor} Box Header backgroundColor
 */
const BoxHeader = React.forwardRef<BoxHeaderNativeRef, BoxHeaderProps>(
  ({ children, variant, ...others }, ref): JSX.Element => {
    const statesContext = useContext(StatesContext)
    const boxContext = useContext(BoxContext)
    const centered = false
    const pulledLeft = false
    const pulledRight = false
    const help = ''

    const headerBgc = variant ? getColorStyle(variant) : getColorStyle(TrilogyColor.MAIN)
    const textColor = getColorStyle(TrilogyColor.BACKGROUND)

    const styles = StyleSheet.create({
      boxHeader: {
        width: '100%',
        backgroundColor: headerBgc,
        padding: 10,
        paddingLeft: 16,
        borderTopLeftRadius: boxContext?.highlighted ? 4 : 6,
        borderTopRightRadius: 6,
        marginTop: (statesContext.active && -2) || (statesContext.flat && -1) || 0,
        justifyContent: 'space-between',
        alignItems:
          (centered && 'center') || (pulledRight && 'flex-end') || (pulledLeft && 'flex-start') || 'flex-start',
        flexDirection: 'row',
      },
      text: {
        color: textColor,
        fontSize: 15,
        fontWeight: '600',
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
      <View
        style={[styles.boxHeader]}
        ref={ref}
        {...others}
        onLayout={() => {
          boxContext.setHeader(true)
        }}
      >
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
  },
)

BoxHeader.displayName = ComponentName.BoxHeader

export default BoxHeader
