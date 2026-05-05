import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxContext } from '../context/boxContext'
import { BoxFooterNativeRef, BoxFooterProps } from './BoxFooterProps'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Children
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const BoxFooter = React.forwardRef<BoxFooterNativeRef, BoxFooterProps>(
  ({ children, backgroundColor, testId, ...others }, ref): JSX.Element => {
    const boxRadius = 6
    const { highlighted } = React.useContext(BoxContext)

    const styles = StyleSheet.create({
      boxFooter: {
        padding: 12,
        justifyContent: 'center',
        backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : 'transparent',
        borderBottomLeftRadius: highlighted ? 0 : boxRadius,
        borderBottomRightRadius: boxRadius,
        marginLeft: highlighted ? 4 : 0,
      },
    })

    return (
      <View ref={ref} style={[styles.boxFooter]} testID={testId} {...others}>
        {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
      </View>
    )
  },
)

BoxFooter.displayName = ComponentName.BoxFooter

export default BoxFooter
