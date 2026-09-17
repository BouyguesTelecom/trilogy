import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef, useContext, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxContext } from '@/components/box/context/boxContext'
import { BoxFooterNativeRef, BoxFooterProps } from '@/components/box/footer/BoxFooterProps'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'
import { lightBackgroundStyles, darkBackgroundStyles } from '@/helpers/styles'
import { useTheme } from '@/hooks/useTheme'
import { getThemeBackground } from '@/helpers/getThemeColors'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Children
 * @param backgroundColor {TrilogyBackgroundColor} Background for BoxFooter
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 */
const BoxFooter = forwardRef<BoxFooterNativeRef, BoxFooterProps>(
  ({ children, backgroundColor, testId, ...others }, ref): JSX.Element => {
    const { theme, mode } = useTheme()
    const { highlighted } = useContext(BoxContext)
    const backgroundStyle = mode === 'dark' ? darkBackgroundStyles : lightBackgroundStyles

    const contextStyles = useMemo(() => {
      if (!theme) return
      return {
        boxFooter: {
          backgroundColor: theme.colors[getThemeBackground(backgroundColor ?? 'PRIMARY')],
          borderBottomLeftRadius: theme.radius.radiusSm,
          borderBottomRightRadius: theme.radius.radiusSm,
        },
      }
    }, [theme, backgroundColor])

    return (
      <View
        ref={ref}
        style={[
          styles.boxFooter,
          backgroundStyle[backgroundColor ?? 'PRIMARY'],
          shapeStyles.boxFooter,
          highlighted && styles.boxHighlighted,
          contextStyles?.boxFooter,
        ]}
        testID={testId}
        {...others}
      >
        {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
      </View>
    )
  },
)

BoxFooter.displayName = ComponentName.BoxFooter
export default BoxFooter

const styles = StyleSheet.create({
  boxFooter: {
    padding: 12,
    justifyContent: 'center',
    marginLeft: 0,
  },
  boxHighlighted: {
    borderBottomLeftRadius: 0,
    marginLeft: 4,
  },
})

const shapeStyles = StyleSheet.create({
  boxFooter: {
    borderBottomLeftRadius: THEME_TRILOGY.radius.radiusSm,
    borderBottomRightRadius: THEME_TRILOGY.radius.radiusSm,
  },
})
