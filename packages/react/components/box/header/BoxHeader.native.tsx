import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { forwardRef, useCallback, useContext, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxContext } from '@/components/box/context/boxContext'
import { BoxHeaderNativeRef, BoxHeaderProps } from '@/components/box/header/BoxHeaderProps'
import { useTheme } from '@/hooks/useTheme'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'
import { lightBackgroundStyles, darkBackgroundStyles } from '@/helpers/styles'
import { getThemeBackground } from '@/helpers/getThemeColors'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param variant {TrilogyBackgroundColor} Box Header backgroundColor
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const BoxHeader = forwardRef<BoxHeaderNativeRef, BoxHeaderProps>(
  ({ children, variant, testId, ...others }, ref): JSX.Element => {
    const { theme, mode } = useTheme()
    const statesContext = useContext(StatesContext)
    const boxContext = useContext(BoxContext)
    const backgroundStyle = mode === 'dark' ? darkBackgroundStyles : lightBackgroundStyles
    const colorStyle = mode === 'dark' ? darkStyles : lightStyles

    const contextStyles = useMemo(() => {
      if (!theme) return
      return {
        boxHeader: {
          backgroundColor: theme.colors[getThemeBackground(variant ?? 'SECONDARY')],
          borderTopLeftRadius: boxContext?.highlighted ? theme.radius.radiusXs : theme.radius.radiusSm,
          borderTopRightRadius: theme.radius.radiusSm,
        },
        text: {
          color: theme.colors.textInverse,
        },
      }
    }, [theme, variant, boxContext?.highlighted])

    const onLayout = useCallback(() => {
      boxContext.setHeader(true)
    }, [boxContext])

    return (
      <View
        style={[
          styles.boxHeader,
          backgroundStyle[variant ?? 'SECONDARY'],
          statesContext.active && styles.boxActive,
          statesContext.flat && styles.boxFlat,
          boxContext?.highlighted && shapeStyles.highlighted,
          shapeStyles.boxHeader,
          contextStyles?.boxHeader,
        ]}
        ref={ref}
        testID={testId}
        {...others}
        onLayout={onLayout}
      >
        {children && typeof children.valueOf() === 'string' ? (
          <Text style={[styles.text, colorStyle.text, contextStyles?.text]}>{String(children)}</Text>
        ) : (
          children
        )}
      </View>
    )
  },
)

BoxHeader.displayName = ComponentName.BoxHeader
export default BoxHeader

const styles = StyleSheet.create({
  boxHeader: {
    width: '100%',
    padding: 10,
    paddingLeft: 16,
    marginTop: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  boxActive: {
    marginTop: -2,
  },
  boxFlat: {
    marginTop: -1,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  helpContainer: {
    alignSelf: 'center',
  },
})

const lightStyles = StyleSheet.create({
  text: {
    color: THEME_TRILOGY.colors.light.textInverse,
  },
})

const darkStyles = StyleSheet.create({
  text: {
    color: THEME_TRILOGY.colors.dark.textInverse,
  },
})

const shapeStyles = StyleSheet.create({
  boxHeader: {
    borderTopLeftRadius: THEME_TRILOGY.radius.radiusSm,
    borderTopRightRadius: THEME_TRILOGY.radius.radiusSm,
  },
  highlighted: {
    borderTopLeftRadius: THEME_TRILOGY.radius.radiusXs,
  },
})
