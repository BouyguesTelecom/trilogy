import { BoxNativeRef, BoxProps } from '@/components/box/BoxProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { StatesContext } from '@/context/providerStates'
import { getColorStyle, TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { getRadius, Radius } from '@/objects/facets/Radius'
import React, { useCallback, useState } from 'react'
import { Theme } from '@/constants/theme'
import { ImageBackground, Platform, TouchableOpacity, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { Skeleton } from '../skeleton'

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
const Box = React.forwardRef<BoxNativeRef, BoxProps>(
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
      radius,
      ...others
    },
    ref,
  ): JSX.Element => {
    const colorBgc = getColorStyle(TrilogyColor.BACKGROUND)
    const boxRadius = getRadius(radius ?? Radius.LG)

    const styles = memoStyles({
      box: {
        width: '100%',
        backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : colorBgc,
        borderRadius: boxRadius,
        justifyContent: 'flex-start',
        position: 'relative',
        borderStyle: flat ? 'solid' : undefined,
        borderWidth: (flat && 1) || (active && 2) || 0,
        borderColor: active ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.STROKE_FADE),
        marginTop: headerOffset ? 35 : 0,
        flex: fullheight ? 1 : 0,
        borderLeftWidth: highlighted ? 4 : undefined,
        borderLeftColor: highlighted ? getColorStyle(highlighted as TrilogyColor | TrilogyColorValues) : undefined,
      },
      shadow: shadowless
        ? {}
        : {
            shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.67)' : '#000',
            shadowOffset: {
              width: 0,
              height: 1.3,
            },
            shadowOpacity: 0.15,
            shadowRadius: 2.4,
            elevation: 4,
          },
      skeleton: {
        width: '100%',
        minHeight: 50,
        backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
        overflow: 'hidden',
        borderRadius: boxRadius,
      },
      boxImage: {
        width: '100%',
        minHeight: 100,
        maxHeight: 300,
        height: 'auto',
      },
    })

    const boxTestId = testId ?? 'NotSpecified'

    const BoxSkeleton = () => (
      <Skeleton style={styles.skeleton} width='100%' height={50} borderRadius={boxRadius} testID='skeleton'>
        {children}
      </Skeleton>
    )

    if (skeleton) {
      return <BoxSkeleton />
    }

    if (onClick) {
      return (
        <BoxContext.Provider
          value={{
            fullHeight: fullheight || false,
          }}
        >
          <View style={[styles.box, !flat && styles.shadow, (others as any)?.style]}>
            <TouchableOpacity
              ref={ref as React.Ref<TouchableOpacity>}
              onPress={(e?: unknown) => onClick?.(e)}
              testID={boxTestId}
              style={{
                overflow: 'hidden',
                borderRadius: boxRadius,
                borderTopLeftRadius: boxRadius - (highlighted ? 2.5 : 0),
                borderBottomLeftRadius: boxRadius - (highlighted ? 2.5 : 0),
              }}
            >
              {backgroundSrc ? (
                <ImageBackground
                  imageStyle={{ borderRadius: boxRadius }}
                  style={styles.boxImage}
                  source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
                >
                  <StatesContext.Provider value={{ inverted: !!inverted, active: !!active, flat: !!flat }}>
                    {children}
                  </StatesContext.Provider>
                </ImageBackground>
              ) : (
                <>
                  <StatesContext.Provider value={{ inverted: !!inverted, active: !!active, flat: !!flat }}>
                    {children}
                  </StatesContext.Provider>
                </>
              )}
            </TouchableOpacity>
          </View>
        </BoxContext.Provider>
      )
    }

    return (
      <BoxContext.Provider
        value={{
          fullHeight: fullheight || false,
        }}
      >
        <View style={[styles.box, !flat && styles.shadow, (others as any)?.style]}>
          <View
            ref={ref as React.Ref<View>}
            testID={boxTestId}
            style={{
              overflow: 'hidden',
              borderRadius: boxRadius,
              borderTopLeftRadius: boxRadius - (highlighted ? 2.5 : 0),
              borderBottomLeftRadius: boxRadius - (highlighted ? 2.5 : 0),
            }}
          >
            {backgroundSrc ? (
              <ImageBackground
                imageStyle={{ borderRadius: boxRadius }}
                style={styles.boxImage}
                source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
              >
                <StatesContext.Provider value={{ inverted: !!inverted, active: !!active, flat: !!flat }}>
                  {children}
                </StatesContext.Provider>
              </ImageBackground>
            ) : (
              <StatesContext.Provider value={{ inverted: !!inverted, active: !!active, flat: !!flat }}>
                {children}
              </StatesContext.Provider>
            )}
          </View>
        </View>
      </BoxContext.Provider>
    )
  },
)

Box.displayName = ComponentName.Box
export default Box
