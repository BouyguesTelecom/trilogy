import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { isAndroid } from '@/helpers/device.native'
import { getAlignStyle, TypographyAlign } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import * as React from 'react'
import ContentLoader, { Circle } from 'react-content-loader/native'
import { StyleSheet, View } from 'react-native'
import { ProgressRadialNativeRef, ProgressRadialProps } from './ProgressRadialProps'
import { AnimatedCircularProgress } from './react-native-circular-progress'

/**
 * Progress Radial component
 * @param percent {number} Progress percent
 * @param label {string} Custom label
 * @param description {string} Custom description
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR|TERTIARY)
 * @param full {boolean} Full progressRadial
 * @param disk {boolean} Disk ProgressRadial
 * @param secondValueColor {TrilogyColor} Second Progress status variant (SUCCESS|INFO|WARNING|ERROR|TERTIARY)
 * @param align {Alignable} Progress Radial Alignement
 * @param loading {boolean} Skeleton Progress Radial
 */
const ProgressRadial = React.forwardRef<ProgressRadialNativeRef, ProgressRadialProps>(({
  children,
  value,
  label,
  description,
  status,
  full,
  disk,
  secondValue,
  secondValueColor,
  align,
  loading,
  ...others
}, ref): JSX.Element => {
  const color = getColorStyle(status || TrilogyColor.MAIN)
  const backgroundColor = getColorStyle(TrilogyColor.MAIN_FADE)
  const percentWidth = value || 0
  const secondFill = secondValue ? { secondFill: secondValue } : null
  const secondFillColor = { secondFillTintColor: getColorStyle(secondValueColor || TrilogyColor.MAIN) }
  const progressRadialWidth = 100
  const progressRadialSkeletonRadius = 50

  const styles = StyleSheet.create({
    container: {
      alignSelf: getAlignStyle(align),
    },
    label: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
      paddingTop: 8,
    },
    description: {
      alignSelf: 'center',
      fontWeight: '500',
    },
    disk: {
      width: progressRadialWidth,
      height: progressRadialWidth,
      borderRadius: 50,
      backgroundColor: color,
    },
    labelDisk: {
      color: getColorStyle(TrilogyColor.FONT),
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
    },
    descriptionDisk: {
      color: getColorStyle(TrilogyColor.FONT),
      textAlign: 'center',
      fontWeight: '400',
    },
    alignCenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    skeleton: {
      width: progressRadialWidth,
      height: progressRadialWidth,
      borderRadius: progressRadialSkeletonRadius,
      backgroundColor: getColorStyle(TrilogyColor.DISABLED_FADE),
      overflow: 'hidden',
    },
  })

  const ProgressRadialSkeleton = (): JSX.Element => (
    <ContentLoader style={styles.skeleton} {...others}>
      <View style={{ opacity: 0 }} />
      {isAndroid && (
        <View>
          <Circle cx='50' cy='50' r='50' />
        </View>
      )}
    </ContentLoader>
  )

  if (loading) {
    return <ProgressRadialSkeleton />
  }

  if (disk) {
    return (
      <View ref={ref} style={styles.container}>
        <View style={[styles.disk, styles.alignCenter]} {...others}>
          {label && typeof label.valueOf() === 'string' ? (
            <Text style={styles.labelDisk} level={TextLevels.TWO}>
              {label || ''}
            </Text>
          ) : (
            label
          )}

          {description && typeof description.valueOf() === 'string' ? (
            <Text style={styles.descriptionDisk} level={TextLevels.THREE} typo={TypographyAlign.TEXT_CENTERED}>
              {description || ''}
            </Text>
          ) : (
            description
          )}
        </View>
      </View>
    )
  }

  return (
    <View ref={ref} style={styles.container} {...others}>
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
            {label && typeof label.valueOf() === 'string' ? (
              <Text style={styles.label} level={TextLevels.TWO}>
                {label || ''}
              </Text>
            ) : (
              <View>{label}</View>
            )}

            {description && typeof description.valueOf() === 'string' ? (
              <Text style={styles.description} level={TextLevels.FOUR}>
                {description || ''}
              </Text>
            ) : (
              <View>{description || children}</View>
            )}
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  )
})

ProgressRadial.displayName = ComponentName.ProgressRadial

export default ProgressRadial
