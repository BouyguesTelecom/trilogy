import React, { useState } from "react"
import { ImageBackground, Platform, StyleSheet, TouchableOpacity, View, } from "react-native"
import { BoxProps } from "./BoxProps"
import { getColorStyle, TrilogyColor, TrilogyColorValues, } from "@/objects/facets/Color"
import ContentLoader, { Rect } from "react-content-loader/native"
import { getBackgroundStyle } from "@/objects/atoms/Background"
import { ComponentName } from "@/components/enumsComponentsName"
import { StatesContext } from "@/context/providerStates"

/**
 * Box Component
 * @param children {React.ReactNode} Childrens
 * @param onClick {Function} onClick Event
 * @param skeleton {boolean} Box skeleton
 * @param background {TrilogyColor} Box Content Background Color
 * @param leftBorder {TrilogyColor} Add Left Highlight Border With Semantic Color
 * @param testId {string} Test id
 * @param shadowless {boolean} Remove box shadow
 * @param backgroundSrc {string} Source of background Image
 * @param inverted {boolean} Inverted Box Color
 * @param flat {boolean} Flat box remove shadow and add plain border
 * @param hat {boolean} Box with a component Sticker props:hat
 * @param flex {boolean} Flex: 1 to the box if usage of Image for Example
 * @param fullheight {boolean}
 * @param active {boolean} Activated box
 * @param others
 */
const Box = ({
  children,
  onClick,
  skeleton,
  leftBorder,
  testId,
  shadowless,
  background,
  backgroundSrc,
  inverted,
  flat,
  hat,
  fullheight,
  active,
  ...others
}: BoxProps): JSX.Element => {
  const colorBgc = getColorStyle(TrilogyColor.BACKGROUND)
  const [boxHeight, setBoxHeight] = useState(0)
  const boxRadius = 6
  const styles = StyleSheet.create({
    box: {
      width: "100%",
      backgroundColor: background ? getBackgroundStyle(background) : colorBgc,
      borderRadius: boxRadius,
      flexDirection: "row",
      justifyContent: "flex-start",
      position: "relative",
      borderStyle: flat ? "solid" : undefined,
      borderWidth: (flat && 1) || (active && 2) || 0,
      borderColor: active
        ? getColorStyle(TrilogyColor.MAIN, 0)
        : getColorStyle(TrilogyColor.FONT, 1),
      marginTop: hat ? 35 : 0,
      flex: fullheight ? 1 : 0,
    },
    shadow: shadowless
      ? {}
      : {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 1,
        },
    skeleton: {
      width: "100%",
      minHeight: 50,
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_LIGHT, 0),
      overflow: "hidden",
      borderRadius: boxRadius,
    },
    leftBorder: {
      position: "absolute",
      width: 8,
      borderTopStartRadius: boxRadius,
      borderBottomStartRadius: boxRadius,
      height: boxHeight,
      backgroundColor:
        getColorStyle(leftBorder as TrilogyColor | TrilogyColorValues) ||
        "transparent",
    },
    column: {
      flexDirection: "column",
      width: "100%",
    },
    boxImage: {
      width: "100%",
      minHeight: 100,
      maxHeight: 300,
      height: "auto",
    },
    boxImageProps: {},
    content: {
      padding: 16,
    },
  })

  const boxTestId = testId || "NotSpecified"

  const BoxSkeleton = () => (
    <ContentLoader style={styles.skeleton} {...others}>
      <View style={{ opacity: 0 }}>{children}</View>

      {Platform.OS === "android" && (
        <View>
          <Rect rx='10' ry='10' width='100%' height='100%' />
        </View>
      )}
    </ContentLoader>
  )

  if (skeleton) {
    return <BoxSkeleton />
  }

  if (onClick) {
    return (
      <TouchableOpacity
        onPress={(e?: unknown) => onClick?.(e)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={[styles.box, !flat && styles.shadow, (others as any)?.style]}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout
          setBoxHeight(height)
        }}
        testID={boxTestId}
      >
        {backgroundSrc ? (
          <ImageBackground
            imageStyle={{ borderRadius: boxRadius }}
            style={styles.boxImage}
            source={
              typeof backgroundSrc === "number"
                ? backgroundSrc
                : { uri: backgroundSrc }
            }
          >
            {Boolean(leftBorder) && <View style={styles.leftBorder} />}
            <StatesContext.Provider
              value={{ inverted: !!inverted, active: !!active, flat: !!flat }}
            >
              <View style={styles.column}>{children}</View>
            </StatesContext.Provider>
          </ImageBackground>
        ) : (
          <>
            {Boolean(leftBorder) && <View style={styles.leftBorder} />}
            <StatesContext.Provider
              value={{ inverted: !!inverted, active: !!active, flat: !!flat }}
            >
              <View style={styles.column}>{children}</View>
            </StatesContext.Provider>
          </>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout
        setBoxHeight(height)
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={[styles.box, !flat && styles.shadow, (others as any)?.style]}
      testID={boxTestId}
    >
      {backgroundSrc ? (
        <ImageBackground
          imageStyle={{ borderRadius: boxRadius }}
          style={styles.boxImage}
          source={
            typeof backgroundSrc === "number"
              ? backgroundSrc
              : { uri: backgroundSrc }
          }
        >
          {Boolean(leftBorder) && <View style={styles.leftBorder} />}
          <StatesContext.Provider
            value={{ inverted: !!inverted, active: !!active, flat: !!flat }}
          >
            <View style={styles.column}>{children}</View>
          </StatesContext.Provider>
        </ImageBackground>
      ) : (
        <StatesContext.Provider
          value={{ inverted: !!inverted, active: !!active, flat: !!flat }}
        >
          {Boolean(leftBorder) && <View style={styles.leftBorder} />}
          <View style={styles.column}>{children}</View>
        </StatesContext.Provider>
      )}
    </View>
  )
}

Box.displayName = ComponentName.Box

export default Box
