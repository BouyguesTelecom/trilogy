import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { forwardRef, useContext, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxContext } from '@/components/box/context/boxContext'
import { BoxHeaderNativeRef, BoxHeaderProps } from '@/components/box/header/BoxHeaderProps'
import { TrilogyBackgroundColor } from '@/interfaces/Color'
import { useTheme } from '@/hooks/useTheme'
import { useThemeBackground } from '@/hooks/useThemeBackground'

/**
 * Box Header Component
 * @param children {React.ReactNode} Children
 * @param variant {TrilogyBackgroundColor} Box Header backgroundColor
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const BoxHeader = forwardRef<BoxHeaderNativeRef, BoxHeaderProps>(
  ({ children, variant, testId, ...others }, ref): JSX.Element => {
    const statesContext = useContext(StatesContext)
    const boxContext = useContext(BoxContext)
    const headerBgc = useThemeBackground(variant || TrilogyBackgroundColor.SECONDARY)
    const { colors, radius } = useTheme()

    const styles = useMemo(
      () =>
        StyleSheet.create({
          boxHeader: {
            width: '100%',
            backgroundColor: headerBgc,
            padding: 10,
            paddingLeft: 16,
            borderTopLeftRadius: boxContext?.highlighted ? radius.radiusXs : radius.radiusSm,
            borderTopRightRadius: radius.radiusSm,
            marginTop: (statesContext.active && -2) || (statesContext.flat && -1) || 0,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'row',
          },
          text: {
            color: colors.textInverse,
            fontSize: 15,
            fontWeight: '600',
          },
          helpContainer: {
            alignSelf: 'center',
          },
          help: {
            fontSize: 12,
            color: colors.textInverse,
            fontWeight: '600',
            lineHeight: 15,
          },
        }),
      [colors.textInverse, radius.radiusSm, radius.radiusXs, headerBgc],
    )

    return (
      <View
        style={[styles.boxHeader]}
        ref={ref}
        testID={testId}
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
      </View>
    )
  },
)

BoxHeader.displayName = ComponentName.BoxHeader

export default BoxHeader
