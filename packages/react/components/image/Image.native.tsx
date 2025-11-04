import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { Image as ImageNative, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ImageNativeRef, ImageProps, ImageCache } from './ImageProps'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param radius {RadiusValues} Image border radius size
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * @param circled {boolean} Circled Image
 * -------------------------- NATIVE PROPERTIES -------------------------------
 * @param cache {ImageCache} Caching strategy for the image
 */
const Image = React.forwardRef<ImageNativeRef, ImageProps>(({ src, alt = '', circled, width, height, onClick, cache, ...others }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    image: {
      width: width ? width : '100%',
      height: height ? height : '100%',
      borderRadius: circled ? 100 : 0,
      overflow: circled ? 'hidden' : 'visible',
      resizeMode: 'contain',
    },
  })

  const getCachePolicy = (cacheType?: ImageCache): "force-cache" | "only-if-cached" | "default" | "reload" | undefined => {
    switch (cacheType) {
      case 'immutable':
        // Aggressive caching - image never changes, cache indefinitely
        return 'force-cache'
      case 'cacheOnly':
        // Only load from cache, never fetch from network
        return 'only-if-cached'
      case 'web':
      default:
        // Standard web behavior - respect HTTP headers and cache intelligently
        return 'default'
    }
  }

  const imageSource = typeof src === 'number'
    ? src
    : {
        uri: src,
        cache: getCachePolicy(cache)
      }

  const image = (
    <ImageNative
      ref={ref}
      style={styles.image}
      accessibilityLabel={alt}
      source={imageSource}
      resizeMode="contain"
      {...others}
      alt={alt}
    />
  )

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {image}
      </TouchableOpacity>
    </View>
  ) : (
    image
  )
})

Image.displayName = ComponentName.Image

export default Image
