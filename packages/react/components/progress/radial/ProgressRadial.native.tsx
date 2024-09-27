import * as React from "react"
import { Platform, StyleSheet, View } from "react-native"
import { ProgressRadialProps } from "./ProgressRadialProps"
import { AnimatedCircularProgress } from "./react-native-circular-progress"
import { Text, TextLevels } from "@/components/text"
import { getStatusStyle, getAlignStyle, TypographyAlign, } from "@/objects"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import ContentLoader, { Circle } from "react-content-loader/native"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Progress Radial component
 * @param percent {number} Progress percent
 * @param label {string} Custom label
 * @param description {string} Custom description
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR|TERTIARY)
 * @param full {boolean} Full progressRadial
 * @param disk {boolean} Disk ProgressRadial
 * @param children {React.ReactNode}
 * @param secondStatus {StatusState} Second Progress status variant (SUCCESS|INFO|WARNING|ERROR|TERTIARY)
 * @param secondPercent {number} Second progress percent
 * @param align {Alignable} Progress Radial Alignement
 * @param skeleton {boolean} Skeleton Progress Radial
 */
const ProgressRadial = ({
  percent,
  label,
  description,
  status,
  full,
  disk,
  secondPercent,
  secondStatus,
  align,
  skeleton,
  ...others
}: ProgressRadialProps): JSX.Element => {
  const color = getColorStyle(status || TrilogyColor.MAIN)
  const backgroundColor = getColorStyle(TrilogyColor.MAIN_FADE)
  const percentWidth = percent || 0
  const secondFill = secondPercent ? { secondFill: secondPercent } : null
  const secondFillColor = { secondFillTintColor: getColorStyle(secondStatus || TrilogyColor.INFO) }
  const progressRadialWidth = 100
  const progressRadialSkeletonRadius = 50

  const styles = StyleSheet.create({
    container: {
      alignSelf: getAlignStyle(align),
    },
    label: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "600",
      paddingTop: 8,
    },
    description: {
      alignSelf: "center",
      fontWeight: "500",
    },
    disk: {
      width: progressRadialWidth,
      height: progressRadialWidth,
      borderRadius: 50,
      backgroundColor: color,
    },
    labelDisk: {
      color: getColorStyle(TrilogyColor.FONT),
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
    },
    descriptionDisk: {
      color: getColorStyle(TrilogyColor.FONT),
      textAlign: "center",
      fontWeight: "400",
    },
    alignCenter: {
      alignItems: "center",
      justifyContent: "center",
    },
    skeleton: {
      width: progressRadialWidth,
      height: progressRadialWidth,
      borderRadius: progressRadialSkeletonRadius,
      backgroundColor: getColorStyle(TrilogyColor.DISABLED_FADE),
      overflow: "hidden",
    },
  })

  const ProgressRadialSkeleton = (): JSX.Element => (
    <ContentLoader style={styles.skeleton} {...others}>
      <View style={{ opacity: 0 }} />
      {Platform.OS === "android" && (
        <View>
          <Circle cx='50' cy='50' r='50' />
        </View>
      )}
    </ContentLoader>
  )

  if (skeleton) {
    return <ProgressRadialSkeleton />
  }

  if (disk) {
    return (
      <View style={styles.container}>
        <View style={[styles.disk, styles.alignCenter]} {...others}>
          {label && typeof label.valueOf() === "string" ? (
            <Text style={styles.labelDisk} level={TextLevels.TWO}>
              {label || ""}
            </Text>
          ) : (
            label
          )}

          {description && typeof description.valueOf() === "string" ? (
            <Text
              style={styles.descriptionDisk}
              level={TextLevels.THREE}
              typo={TypographyAlign.TEXT_CENTERED}
            >
              {description || ""}
            </Text>
          ) : (
            description
          )}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container} {...others}>
      <AnimatedCircularProgress
        size={90}
        width={7}
        fill={!full ? percentWidth : 100}
        tintColor={color}
        backgroundColor={backgroundColor}
        rotation={0}
        {...secondFill}
        {...secondFillColor}
      >
        {() => (
          <View style={styles.alignCenter}>
            {label && typeof label.valueOf() === "string" ? (
              <Text style={styles.label} level={TextLevels.TWO}>
                {label || ""}
              </Text>
            ) : (
              <View>{label}</View>
            )}

            {description && typeof description.valueOf() === "string" ? (
              <Text style={styles.description} level={TextLevels.FOUR}>
                {description || ""}
              </Text>
            ) : (
              <View>{description}</View>
            )}
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  )
}

ProgressRadial.displayName = ComponentName.ProgressRadial

export default ProgressRadial
