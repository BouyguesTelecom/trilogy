import React, {useState} from "react";
import {ImageBackground, StyleSheet, TouchableOpacity, View,} from "react-native";
import {HeroProps} from "./HeroProps";
import {getVariantStyle, TrilogyColor} from "../../objects";
import {Box} from "../box";
import {ComponentName} from "../enumsComponentsName";

/**
 * Hero Component
 * @param children {ReactNode} Hero Children
 * @param backgroundSrc {string} If source, it will display background option
 * @param variant {VariantState} Hero background color : main/accent
 * @param onClick {Function} onClick Event
 * @param overlap {ReactNode[]|Boolean} Hero overlap components in tab (need to add key for each element),
 * if second element add second special overlap (only native-old) - Web (Boolean) Native (ReactNode)
 * @param backgroundHeight {BackgroundHeight} Background heigth
 */
const Hero = ({
  children,
  backgroundSrc,
  variant,
  onClick,
  overlap,
  backgroundHeight,
  ...others
}: HeroProps): JSX.Element => {
  const [overlapHeight, setOverlapHeight] = useState<number>(0);
  const [secondOverlapHeight, setSecondOverlapHeight] = useState<number>(0);

  const isSecondOverlap =
    overlap && Array.isArray(overlap) ? overlap?.length > 1 : false;
  const isSecondOverlapNotEmpty = isSecondOverlap && secondOverlapHeight > 0;

  const overlapMargin = backgroundHeight
    ? overlapHeight - backgroundHeight / 2
    : overlapHeight - 60;
  const marginBottomOverlap = isSecondOverlapNotEmpty ? 70 : 60;

  const styles = StyleSheet.create({
    hero: {
      width: "100%",
      minHeight: 100,
      maxHeight: 300,
      height: backgroundHeight ? backgroundHeight : "auto",
    },
    content: {
      padding: 15,
      marginBottom: overlap ? marginBottomOverlap : 0,
    },
    variant: {
      backgroundColor: variant && getVariantStyle(variant),
    },
    overlap: {
      position: "absolute",
      top: isSecondOverlapNotEmpty
        ? -40
        : backgroundHeight
        ? backgroundHeight * (-1 / 2)
        : -60,
    },
    secondOverlap: {
      position: "absolute",
      alignSelf: "center",
      top: secondOverlapHeight * (-1 / 2) - 40,
      width: "100%",
    },
    subOverlap: {
      height: isSecondOverlapNotEmpty ? overlapHeight - 40 : overlapMargin,
    },
  });
  let heroView: JSX.Element;

  if (variant) {
    heroView = (
      <View style={[styles.variant, styles.hero]}>
        <View style={styles.content}>{children}</View>
      </View>
    );
  } else {
    heroView = (
      <ImageBackground
        source={
          typeof backgroundSrc === "number"
            ? backgroundSrc
            : { uri: backgroundSrc }
        }
        style={styles.hero}
        {...others}
      >
        <View style={styles.content}>{children}</View>
      </ImageBackground>
    );
  }

  let overlapView: JSX.Element;

  if (isSecondOverlap) {
    overlapView = (
      <View style={styles.subOverlap}>
        <View
          style={styles.overlap}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setOverlapHeight(height);
          }}
        >
          <Box background={TrilogyColor.GREY_LIGHTER}>
            <View style={{ marginBottom: secondOverlapHeight / 2 }} />
            {overlap && typeof overlap !== "boolean" ? overlap[0] : null}
          </Box>
        </View>
        <View
          style={styles.secondOverlap}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setSecondOverlapHeight(height);
          }}
        >
          {overlap && typeof overlap !== "boolean" ? overlap[1] : null}
        </View>
      </View>
    );
  } else {
    overlapView = (
      <View style={styles.subOverlap}>
        <View
          style={styles.overlap}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setOverlapHeight(height);
          }}
        >
          {overlap && typeof overlap !== "boolean" ? overlap[0] : null}
        </View>
      </View>
    );
  }

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {heroView}
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{ width: "100%" }}>
      {heroView}
      {overlapView}
    </View>
  );
};

Hero.displayName = ComponentName.Hero;

export default Hero;
