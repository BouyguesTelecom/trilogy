import { BoxNativeRef, BoxProps } from '@/components/box/BoxProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { useState, forwardRef, useMemo, useCallback } from 'react'
import { ImageBackground, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Skeleton } from '@/components/skeleton'
import { useTheme } from '@/hooks/useTheme'
import type { LayoutChangeEvent } from 'react-native'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'
import { lightBackgroundStyles, darkBackgroundStyles } from '@/helpers/styles'
import { getThemeBackground } from '@/helpers/getThemeColors'

/**
 * Box Component
 * @param children {React.ReactNode} Box child
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Box skeleton
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param inverted {boolean} Inverted Box Color
 * @param highlighted {TrilogyColor} Add Left Highlight Border With Semantic Color
 * @param shadowless {boolean} Remove box shadow
 * @param flat {boolean} Flat box, removes shadow and adds plain border
 * @param backgroundSrc {string} Source of background image
 * @param headerOffset {boolean} Add a header offset to the box
 * @param active {boolean} Activated box
 * @param testId {string} Test Id for Test Integration
 * @param id {string} Custom id attribute
 * @param fullheight {boolean} Full height box
 */
const Box = forwardRef<BoxNativeRef, BoxProps>(
  (
    {
      children,
      onClick,
      skeleton,
      highlighted,
      shadowless,
      backgroundColor,
      backgroundSrc,
      inverted,
      flat,
      headerOffset,
      fullheight,
      active,
      testId,
      ...others
    },
    ref,
  ): JSX.Element => {
    const { theme, mode } = useTheme()
    const backgroundStyle = mode === 'dark' ? darkBackgroundStyles : lightBackgroundStyles
    const colorStyle = mode === 'dark' ? darkStyles : lightStyles
    const [boxHeight, setBoxHeight] = useState(0)
    const [numberOfContent, setNumberOfContent] = useState(0)
    const [header, setHeader] = useState<boolean>(false)

    const onPress = useCallback((e?: unknown) => onClick?.(e), [onClick])

    const onLayout = useCallback((event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout
      setBoxHeight(height)
    }, [])

    const highlightedStyle = useMemo(() => {
      return { height: boxHeight }
    }, [boxHeight])

    const imageStyle = useMemo(
      () => ({ borderRadius: theme ? theme.radius.radiusSm : THEME_TRILOGY.radius.radiusSm }),
      [theme],
    )

    const radiusSkeleton = useMemo(
      () => ({ borderRadius: theme ? theme.radius.radiusSm : THEME_TRILOGY.radius.radiusSm }),
      [theme],
    )

    const statesContext = useMemo(
      () => ({ inverted: !!inverted, active: !!active, flat: !!flat }),
      [inverted, active, flat],
    )

    const imageSource = useMemo(
      () => (typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }),
      [backgroundSrc],
    )

    const contextStyles = useMemo(() => {
      if (!theme) return
      return {
        skeleton: {
          backgroundColor: theme.colors.bgSecondarySubtle,
          borderRadius: theme.radius.radiusSm,
        },
        box: {
          backgroundColor: theme.colors[getThemeBackground(backgroundColor ?? 'PRIMARY')],
          borderColor: active ? theme.colors.borderSelected : theme.colors.border,
          borderRadius: theme.radius.radiusSm,
        },
        highlighted: {
          borderTopStartRadius: theme.radius.radiusXs,
          borderBottomStartRadius: theme.radius.radiusXs,
        },
      }
    }, [theme, active, backgroundColor])

    const boxContextValue = useMemo(
      () => ({
        fullHeight: fullheight || false,
        highlighted,
        numberOfContent,
        header,
        setHeader,
        setNumberOfContent,
      }),
      [fullheight, highlighted, numberOfContent, header],
    )

    if (skeleton)
      return (
        <Skeleton
          style={[styles.skeleton, shapeStyles.skeleton, colorStyle.skeleton, contextStyles?.skeleton]}
          width='100%'
          height={50}
          borderRadius={radiusSkeleton.borderRadius}
          testID='skeleton'
        >
          {children}
        </Skeleton>
      )

    return (
      <BoxContext.Provider value={boxContextValue}>
        <TouchableOpacity
          ref={ref as React.Ref<TouchableOpacity>}
          onPress={onPress}
          style={[
            styles.box,
            shapeStyles.box,
            colorStyle.box,
            !flat && !shadowless && styles.shadow,
            flat && styles.boxFlat,
            active && styles.boxActive,
            active && colorStyle.boxActive,
            fullheight && styles.boxFullHeight,
            headerOffset && styles.headerOffset,
            onClick && styles.boxClickable,
            backgroundStyle[backgroundColor ?? 'PRIMARY'],
            contextStyles?.box,
            (others as any)?.style,
          ]}
          onLayout={onLayout}
          testID={testId ?? 'NotSpecified'}
        >
          {backgroundSrc ? (
            <ImageBackground imageStyle={imageStyle} style={styles.boxImage} source={imageSource}>
              {Boolean(highlighted) && (
                <View
                  style={[
                    styles.highlighted,
                    shapeStyles.highlighted,
                    highlighted && backgroundStyle[highlighted],
                    highlightedStyle,
                    contextStyles?.highlighted,
                  ]}
                />
              )}
              <StatesContext.Provider value={statesContext}>{children}</StatesContext.Provider>
            </ImageBackground>
          ) : (
            <>
              {Boolean(highlighted) && (
                <View
                  style={[
                    styles.highlighted,
                    shapeStyles.highlighted,
                    highlighted && backgroundStyle[highlighted],
                    highlightedStyle,
                    contextStyles?.highlighted,
                  ]}
                />
              )}
              <StatesContext.Provider value={statesContext}>{children}</StatesContext.Provider>
            </>
          )}
        </TouchableOpacity>
      </BoxContext.Provider>
    )
  },
)

Box.displayName = ComponentName.Box
export default Box

const styles = StyleSheet.create({
  box: {
    width: '100%',
    justifyContent: 'flex-start',
    position: 'relative',
    borderWidth: 0,
    marginTop: 0,
    flex: 0,
    pointerEvents: 'none',
  },
  boxClickable: {
    pointerEvents: 'auto',
  },
  boxFlat: {
    borderStyle: 'solid',
    borderWidth: 1,
  },
  boxActive: {
    borderWidth: 2,
  },
  boxFullHeight: {
    flex: 1,
  },
  headerOffset: {
    marginTop: 35,
  },
  shadow: {
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.67)' : '#000',
    shadowOffset: {
      width: 0,
      height: 1.3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.4,
    elevation: 4,
  },
  highlighted: {
    position: 'absolute',
    width: 4,
    overflow: 'hidden',
  },
  boxImage: {
    width: '100%',
    minHeight: 100,
    maxHeight: 300,
    height: 'auto',
  },
  skeleton: {
    width: '100%',
    minHeight: 50,
    overflow: 'hidden',
  },
})

const shapeStyles = StyleSheet.create({
  skeleton: {
    borderRadius: THEME_TRILOGY.radius.radiusSm,
  },
  highlighted: {
    borderTopStartRadius: THEME_TRILOGY.radius.radiusXs,
    borderBottomStartRadius: THEME_TRILOGY.radius.radiusXs,
  },
  box: {
    borderRadius: THEME_TRILOGY.radius.radiusSm,
  },
})

const lightStyles = StyleSheet.create({
  box: {
    borderColor: THEME_TRILOGY.colors.light.border,
  },
  boxActive: {
    borderColor: THEME_TRILOGY.colors.light.borderSelected,
  },
  skeleton: {
    backgroundColor: THEME_TRILOGY.colors.light.bgSecondarySubtle,
  },
})

const darkStyles = StyleSheet.create({
  box: {
    borderColor: THEME_TRILOGY.colors.dark.border,
  },
  boxActive: {
    borderColor: THEME_TRILOGY.colors.dark.borderSelected,
  },
  skeleton: {
    backgroundColor: THEME_TRILOGY.colors.dark.bgSecondarySubtle,
  },
})
