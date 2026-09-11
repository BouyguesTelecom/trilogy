import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef, useContext, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxContext } from '@/components/box/context/boxContext'
import { BoxFooterNativeRef, BoxFooterProps } from '@/components/box/footer/BoxFooterProps'
import { Radius } from '@/interfaces/Radius'
import { useThemeRadiusBySize } from '@/hooks/useThemeRadius'
import { useThemeBackground } from '@/hooks/useThemeBackground'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Children
 * @param backgroundColor {TrilogyBackgroundColor} Background for BoxFooter
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const BoxFooter = forwardRef<BoxFooterNativeRef, BoxFooterProps>(
  ({ children, backgroundColor, testId, ...others }, ref): JSX.Element => {
    const borderSmallRadius = useThemeRadiusBySize(Radius.SMALL)
    const { highlighted } = useContext(BoxContext)
    const backgroundStyle = useThemeBackground(backgroundColor)

    const styles = useMemo(
      () =>
        StyleSheet.create({
          boxFooter: {
            padding: 12,
            justifyContent: 'center',
            backgroundColor: backgroundStyle,
            borderBottomLeftRadius: highlighted ? 0 : borderSmallRadius,
            borderBottomRightRadius: borderSmallRadius,
            marginLeft: highlighted ? 4 : 0,
          },
        }),
      [backgroundStyle, borderSmallRadius, highlighted],
    )

    return (
      <View ref={ref} style={[styles.boxFooter]} testID={testId} {...others}>
        {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
      </View>
    )
  },
)

BoxFooter.displayName = ComponentName.BoxFooter

export default BoxFooter
