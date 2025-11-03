import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { Image as ImageNative, StyleSheet, TouchableOpacity, View, ImageSourcePropType } from 'react-native'
import { ImageNativeRef, ImageProps, ResizeMode, Priority, CacheControl, Source } from './ImageProps'

// Simple in-memory cache for image loading states
const imageCache = new Map<string, { loading: boolean; error: boolean; loaded: boolean }>()

// Cache for preloaded images
const preloadedImages = new Set<string>()

/**
 * @param src {string|number|Source} Image source - can be string (URL), number (require), or Source object with headers
 * @param alt {string} Image alt text for accessibility
 * @param radius {RadiusValues} Image border radius size
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * @param circled {boolean} Circled Image
 * @param resizeMode {ResizeMode} How to resize the image when the frame doesn't match the raw image dimensions
 * @param priority {Priority} Priority hint for loading the image (for future optimizations)
 * @param cache {CacheControl} Cache control hint for the image (for future optimizations)
 * @param fallback {boolean} Enable fallback behavior on error
 * @param onLoadStart {Function} Called when the image starts loading
 * @param onProgress {Function} Called during image loading progress
 * @param onLoad {Function} Called when the image loads successfully
 * @param onError {Function} Called when the image fails to load
 * @param onLoadEnd {Function} Called when the image loading ends (success or failure)
 */
const Image = React.forwardRef<ImageNativeRef, ImageProps>(({
  src,
  alt = '',
  circled,
  width,
  height,
  onClick,
  resizeMode = ResizeMode.CONTAIN,
  priority = Priority.NORMAL,
  cache = CacheControl.IMMUTABLE,
  fallback = true,
  onLoadStart,
  onProgress,
  onLoad,
  onError,
  onLoadEnd,
  ...others
}, ref): JSX.Element | null => {

  const [, setImageState] = React.useState<{
    loading: boolean
    error: boolean
    loaded: boolean
  }>({ loading: false, error: false, loaded: false })

  // Get cache key for the image
  const getCacheKey = React.useCallback((): string => {
    if (typeof src === 'string') {
      return src
    }
    if (typeof src === 'object' && src.uri) {
      return src.uri
    }
    return ''
  }, [src])

  const shouldUseCache = React.useCallback((): boolean => {
    const cacheKey = getCacheKey()
    if (!cacheKey) return true // For local images, always use default behavior

    const effectiveCache = (typeof src === 'object' && src.cache) || cache

    switch (effectiveCache) {
      case CacheControl.CACHE_ONLY:
        return preloadedImages.has(cacheKey)
      case CacheControl.WEB:
        return true
      case CacheControl.IMMUTABLE:
      default:
        return true
    }
  }, [src, cache, getCacheKey])

  const preloadImage = React.useCallback((uri: string) => {
    if (preloadedImages.has(uri)) return
    ImageNative.prefetch(uri)
      .then(() => {
        preloadedImages.add(uri)
      })
  }, [])

  React.useEffect(() => {
    const cacheKey = getCacheKey()
    if (!cacheKey) return

    const effectivePriority = (typeof src === 'object' && src.priority) || priority

    if (effectivePriority === Priority.HIGH) {
      preloadImage(cacheKey)
    }
  }, [src, priority, getCacheKey, preloadImage])

  const buildImageSource = (): ImageSourcePropType | null => {
    if (typeof src === 'number') {
      return src
    }

    const cacheKey = getCacheKey()
    if (!shouldUseCache() && cacheKey) {
      return null
    }

    if (typeof src === 'string') {
      return { uri: src }
    }

    const sourceObj = src as Source
    const imageSource: any = {
      uri: sourceObj.uri,
    }

    if (sourceObj.headers) {
      imageSource.headers = sourceObj.headers
    }

    const effectiveCache = sourceObj.cache || cache
    if (effectiveCache === CacheControl.WEB) {
      imageSource.cache = 'reload'
    } else if (effectiveCache === CacheControl.CACHE_ONLY) {
      imageSource.cache = 'only-if-cached'
    }

    return imageSource
  }

  const handleLoadStart = React.useCallback(() => {
    const cacheKey = getCacheKey()
    if (cacheKey) {
      imageCache.set(cacheKey, { loading: true, error: false, loaded: false })
      setImageState({ loading: true, error: false, loaded: false })
    }
    onLoadStart?.()
  }, [getCacheKey, onLoadStart])

  const handleLoad = React.useCallback((event: any) => {
    const cacheKey = getCacheKey()
    if (cacheKey) {
      imageCache.set(cacheKey, { loading: false, error: false, loaded: true })
      preloadedImages.add(cacheKey)
      setImageState({ loading: false, error: false, loaded: true })
    }
    onLoad?.(event)
  }, [getCacheKey, onLoad])

  const handleError = React.useCallback(() => {
    const cacheKey = getCacheKey()
    if (cacheKey) {
      imageCache.set(cacheKey, { loading: false, error: true, loaded: false })
      setImageState({ loading: false, error: true, loaded: false })
    }
    onError?.()
  }, [getCacheKey, onError])

  const handleLoadEnd = React.useCallback(() => {
    const cacheKey = getCacheKey()
    if (cacheKey) {
      const currentState = imageCache.get(cacheKey)
      if (currentState) {
        setImageState(prev => ({ ...prev, loading: false }))
      }
    }
    onLoadEnd?.()
  }, [getCacheKey, onLoadEnd])

  const getResizeMode = (mode: ResizeMode): any => {
    return mode as any
  }

  const imageSource = buildImageSource()

  const styles = StyleSheet.create({
    image: {
      width: width ? width : '100%',
      height: height ? height : '100%',
      borderRadius: circled ? 100 : 0,
      overflow: circled ? 'hidden' : 'visible',
      resizeMode: resizeMode as any,
    },
  })

  const image = (
    <ImageNative
      ref={ref}
      style={styles.image}
      accessibilityLabel={alt}
      source={imageSource}
      resizeMode={getResizeMode(resizeMode)}
      onLoadStart={handleLoadStart}
      onProgress={onProgress}
      onLoad={handleLoad}
      onError={handleError}
      onLoadEnd={handleLoadEnd}
      alt={alt}
      {...others}
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
